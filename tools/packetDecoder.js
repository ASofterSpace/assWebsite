
window.pD = {

	// possible values:
	// auto
	// ccsdsTM
	// ccsdsTC
	// pusTM
	// pusTC
	// TODO :: ccsdsFrame
	packetKind: "auto",

	lastPacketKind: "ccsdsTM",

	guiDecodePacketCall: function() {
		var orig = document.getElementById("pD-in").value;

		var result = this.decodePacket(orig);

		result = result.split("\n\n").join("\n&nbsp;\n");
		result = result.split("\n ").join("\n&nbsp;");
		result = result.split("&nbsp;     ").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		result = result.split("&nbsp;    ").join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		result = result.split("&nbsp;   ").join("&nbsp;&nbsp;&nbsp;&nbsp;");
		result = result.split("&nbsp;  ").join("&nbsp;&nbsp;&nbsp;");
		result = result.split("&nbsp; ").join("&nbsp;&nbsp;");
		result = "<div>" + result.split("\n").join("</div><div>") + "</div>";

		document.getElementById("pD-out").innerHTML = result;
	},

	guiPacketTypeChangeCall: function() {
		this.packetKind = document.getElementById("pD-type").value;

		this.guiDecodePacketCall();
	},

	// we assume the packet is given in hex
	decodePacket: function(packetStr) {

		var curPacketKind = this.packetKind;

		if (curPacketKind == "auto") {
			this.doDecode(packetStr, curPacketKind);
			curPacketKind = this.lastPacketKind;
		}

		return this.doDecode(packetStr, curPacketKind);
	},

	doDecode: function(packetStr, curPacketKind) {

		this.lastPacketKind = "ccsdsTM";

		var warnings = [];

		packetStr = packetStr.split(' ').join('');
		packetStr = packetStr.split('\n').join('');
		packetStr = packetStr.split('\t').join('');
		packetStr = packetStr.split('0x').join('');

		var addedExtraZero = false;

		if (packetStr.length % 2 == 1) {
			packetStr = "0" + packetStr;
			addedExtraZero = true;
			warnings.push("The data that you entered does not have an even length. To get complete bytes out of this, a leading zero was added.");
		}

		var packetStrBytes = [];

		for (var i = 0; i < packetStr.length / 2; i++) {
			packetStrBytes[i] = packetStr.charAt(2*i) + packetStr.charAt(2*i+1);
		}

		var packetBytes = [];

		for (var i = 0; i < packetStrBytes.length; i++) {
			packetBytes[i] = parseInt(packetStrBytes[i], 16);
		}

		var result = "";
		var ccsdsVersion = null;
		var packetType = null;
		var apid = null;
		var apidStart = "";
		var seqCountStart = "";
		var packetLengthStart = "";
		var packetLength = null;
		var dataFieldHeaderPresent = false;
		var pecStart = "";

		for (var i = 0; i < packetBytes.length; i++) {
			var packetByte = packetBytes[i];
			var packetByteStr = (packetByte).toString(2);
			while (packetByteStr.length < 8) {
				packetByteStr = '0' + packetByteStr;
			}
			var counter = "" + i;
			if (counter.length < 2) {
				counter = "0" + counter;
			}

			if (addedExtraZero && (i == 0)) {
				result += counter + ": <span class='hidden'>0000</span>" + packetByteStr.substr(4, 4) + " (<span class='hidden'>0</span>" + packetStrBytes[i].substr(1, 1) + ")\n";
			} else {
				result += counter + ": " + packetByteStr + " (" + packetStrBytes[i] + ")\n";
			}

			switch (i) {
				case 0:
					ccsdsVersion = parseInt(packetByteStr.substr(0, 3), 2);
					result += "    ";
					if (addedExtraZero) {
						result += "<span class='hidden'>";
					}
					result += packetByteStr.substr(0, 3) + " ....... CCSDS Version Number: " + ccsdsVersion;
					if (addedExtraZero) {
						result += "</span>";
					}
					result += "\n";
					packetType = packetByteStr.substr(3, 1);

					var warn = false;
					if (packetType == "1") {
						if ((curPacketKind == "ccsdsTM") || (curPacketKind == "pusTM")) {
							warnings.push("It seems that the reported packet kind does not correspond to the selected packet kind! (Telemetry packet selected, but packet indicates that it is a telecommand packet.)");
							warn = true;
						}
					} else {
						if ((curPacketKind == "ccsdsTC") || (curPacketKind == "pusTC")) {
							warnings.push("It seems that the reported packet kind does not correspond to the selected packet kind! (Telecommand packet selected, but packet indicates that it is a telemetry packet.)");
							warn = true;
						}
					}

					result += "       ";
					if (warn) {
						result += "<span class='warn'>";
					}
					if (addedExtraZero) {
						result += "<span class='hidden'>";
					}
					result += packetType + " ...... Packet Type: ";
					if (packetType == "1") {
						result += "Telecommand";
						this.lastPacketKind = "ccsdsTC";
					} else {
						result += "Telemetry";
					}
					if (addedExtraZero) {
						result += "</span>";
					}
					if (warn) {
						result += "</span>";
					}
					result += "\n";

					var dataFieldHeaderFlag = packetByteStr.substr(4, 1);
					dataFieldHeaderPresent = dataFieldHeaderFlag == "1";

					var warn = false;
					if (!dataFieldHeaderPresent) {
						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							warnings.push("It seems that the reported packet kind does not correspond to the selected packet kind! (PUS packet selected, but no data field header seems present, which is not allowed according to the PUS specification!)");
							warn = true;
						}
					}

					result += "        ";
					if (warn) {
						result += "<span class='warn'>";
					}
					result += dataFieldHeaderFlag + " ..... Data Field Header Flag: ";
					if (dataFieldHeaderPresent) {
						result += "Data Field Header present";
					} else {
						result += "No Data Field Header";
					}
					if (warn) {
						result += "</span>";
					}
					result += "\n";
					apidStart = packetByteStr.substr(5, 3);
					result += "         " + apidStart + " .. Application Process ID start\n";
					break;

				case 1:
					apid = parseInt(apidStart + packetByteStr, 2);
					result += "    " + packetByteStr + " .. Application Process ID end, APID value: " + apid + "\n";
					break;

				case 2:
					var seqFlags = packetByteStr.substr(0, 2);
					result += "    " + seqFlags + " ........ Sequence Flags: ";
					switch (seqFlags) {
						case "00":
							result += "Continuation Packet";
							break;
						case "01":
							result += "First Packet in Sequence";
							break;
						case "10":
							result += "Last Packet in Sequence";
							break;
						case "11":
							result += "Standalone Packet";
							break;
					}
					result += "\n";
					seqCountStart = packetByteStr.substr(2, 6);
					result += "      " + seqCountStart + " .. Source Sequence Counter start\n";
					break;

				case 3:
					var seqCounter = parseInt(seqCountStart + packetByteStr, 2);
					result += "    " + packetByteStr + " .. Source Sequence Counter end, SSC value: " + seqCounter + "\n";
					break;

				case 4:
					packetLengthStart = packetByteStr;
					// set a span with a non-existing class which we can change later to warn if a warning becomes necessary
					result += "    <span class='possiblywarnforpacketlength'>" + packetLengthStart + " .. Packet Length start</span>\n";
					break;

				case 5:
					// according to the PUS standard, this field is its actual value minus 1... because... why not .-.
					var packetLength = parseInt(packetLengthStart + packetByteStr, 2) + 1;

					var realLength = packetBytes.length;
					var reportedLength = packetLength + 6;
					var warn = false;
					if (reportedLength != realLength) {
						warnings.push("It seems that the reported packet length does not correspond with the actual length of the packet!\n(The reported length is " + reportedLength + " bytes, while the actual length seems to be " + realLength + " bytes.)");
						warn = true;
						// here, set the warning for the start of the packet length also, if necessary
						result = result.replace("possiblywarnforpacketlength", "warn");
					}

					result += "    ";
					if (warn) {
						result += "<span class='warn'>";
					}
					result += packetByteStr + " .. Packet Length end, length: " + packetLength + " bytes in packet data field";
					if (warn) {
						result += "</span>";
					}
					result += "\n";

					break;

				case 6:
					if (dataFieldHeaderPresent) {
						var ccsdsSecHeaderFlag = packetByteStr.substr(0, 1);

						var warn = false;
						if (ccsdsSecHeaderFlag == "1") {
							if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
								warnings.push("It seems that the reported packet kind does not correspond to the selected packet kind! (PUS packet selected, but a CCSDS-specified secondary header seems present, which is not allowed according to the PUS specification!)");
								warn = true;
							}
						}

						result += "    ";
						if (warn) {
							result += "<span class='warn'>";
						}
						result += ccsdsSecHeaderFlag + " ......... CCSDS Secondary Header Flag: ";
						if (ccsdsSecHeaderFlag == "1") {
							result += "CCSDS-defined secondary header";
						} else {
							result += "non-CCSDS-defined secondary header";
							if (packetType == "1") {
								this.lastPacketKind = "pusTC";
							} else {
								this.lastPacketKind = "pusTM";
							}
						}
						if (warn) {
							result += "</span>";
						}
						result += "\n";

						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							var tcPacketPusVersion = parseInt(packetByteStr.substr(1, 3), 2);
							result += "     " + packetByteStr.substr(1, 3) + " ...... PUS Version Number: " + tcPacketPusVersion + "\n";
						}

						if (curPacketKind == "pusTC") {
							var ackComplete = packetByteStr.substr(4, 1);
							result += "        " + ackComplete + " ..... Acknowledgement Flag: ";
							if (ackComplete == "1") {
								result += "acknowledge completion of execution\n";
							} else {
								result += "do not acknowledge completion of execution\n";
							}
							var ackProgress = packetByteStr.substr(5, 1);
							result += "         " + ackProgress + " .... Acknowledgement Flag: ";
							if (ackProgress == "1") {
								result += "acknowledge progress of execution\n";
							} else {
								result += "do not acknowledge progress of execution\n";
							}
							var ackStart = packetByteStr.substr(6, 1);
							result += "          " + ackStart + " ... Acknowledgement Flag: ";
							if (ackStart == "1") {
								result += "acknowledge start of execution\n";
							} else {
								result += "do not acknowledge start of execution\n";
							}
							var ackAcceptance = packetByteStr.substr(7, 1);
							result += "           " + ackAcceptance + " .. Acknowledgement Flag: ";
							if (ackAcceptance == "1") {
								result += "acknowledge acceptance of the packet\n";
							} else {
								result += "do not acknowledge acceptance of the packet\n";
							}
						}

						if (curPacketKind == "pusTM") {
							var spareBits1 = packetByteStr.substr(4, 4);

							var warn = false;

							if (spareBits1 != "0000") {
								warnings.push("It seems that this PUS packet is slightly malformed! (The block of four spare bits in the data field header should be all zeroes according to the PUS standard.)");
								warn = true;
							}

							result += "        ";
							if (warn) {
								result += "<span class='warn'>";
							}
							result += spareBits1 + " .. Spare Bits (should all be zero)";
							if (warn) {
								result += "</span>";
							}
							result += "\n";
						}
					}
					break;

				case 7:
					if (dataFieldHeaderPresent) {
						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							var pusServiceType = parseInt(packetByteStr, 2);
							result += "    " + packetByteStr + " .. PUS Service Type: " + pusServiceType + " ";
							if (pusServiceType > 127) {
								result += "(mission-specific)";
							} else {
								result += "(generic PUS";
								// TODO :: add many more!
								switch (pusServiceType) {
									case 3:
										result += ": housekeeping";
										break;
								}
								result += ")";
							}
							result += "\n";
						}
					}
					break;

				case 8:
					if (dataFieldHeaderPresent) {
						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							var pusServiceSubType = parseInt(packetByteStr, 2);
							result += "    " + packetByteStr + " .. PUS Service Subtype: " + pusServiceSubType + " ";
							if ((pusServiceType > 127) || (pusServiceSubType > 127)) {
								result += "(mission-specific)";
							} else {
								result += "(generic PUS";
								// TODO :: add many more!
								switch (pusServiceType) {
									case 3:
										switch (pusServiceSubType) {
											case 25:
												result += ": housekeeping parameter report";
												break;
											case 26:
												result += ": diagnostic parameter report";
												break;
										}
										break;
								}
								result += ")";
							}
							result += "\n";
						}
					}
					break;

				// TODO :: for PUS TM, we also should have the packet subcounter, destination id and timestamp...
				// but they are all optional, can vary in size and even in format, not just between missions,
				// but even between the various pieces of equipment on board that are emitting the TM... GREAT .-.

				case packetBytes.length-2:
					if (dataFieldHeaderPresent) {
						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							pecStart = packetByteStr;
							result += "    " + pecStart + " .. Packet Error Control start\n";
						}
					}
					break;

				case packetBytes.length-1:
					if (dataFieldHeaderPresent) {
						if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
							var pec = parseInt(pecStart + packetByteStr, 2);
							result += "    " + packetByteStr + " .. Packet Error Control end, full PEC: " + pec + "\n";
						}
					}
					break;

			}
			result += "\n";
		}

		// remove trailing \n
		result = result.substr(0, result.length - 1);

		for (var i = 0; i < warnings.length; i++) {
			result += "\n<span class='warn'>WARNING:</span> " + warnings[i];
		}

		return result;
	}
}

pD.guiDecodePacketCall();

console.log("should be PUS TC:");
console.log(pD.decodePacket("199D C050 0004 4F80 01E9 54"));

console.log("should be PUS TM:");
console.log(pD.decodePacket("0870C1A200100003190072DD7A82D70A3D00CDFF800000"));
