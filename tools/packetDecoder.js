
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

		document.getElementById("pD-out").value = result;
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

		packetStr = packetStr.split(' ').join('');
		packetStr = packetStr.split('\n').join('');
		packetStr = packetStr.split('\t').join('');
		packetStr = packetStr.split('0x').join('');

		if (packetStr.length % 2 == 1) {
			packetStr = "0" + packetStr;
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
		var spareBits1 = "";

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
			result += counter + ": " + packetByteStr + " (" + packetStrBytes[i] + ")\n";

			switch (i) {
				case 0:
					ccsdsVersion = parseInt(packetByteStr.substr(0, 3), 2);
					result += "    " + packetByteStr.substr(0, 3) + " ....... CCSDS Version Number: " + ccsdsVersion + "\n";
					packetType = packetByteStr.substr(3, 1);
					result += "       " + packetType + " ...... Packet Type: ";
					if (packetType == "1") {
						result += "Telecommand";
						this.lastPacketKind = "ccsdsTC";
					} else {
						result += "Telemetry";
					}
					result += "\n";
					var dataFieldHeaderFlag = packetByteStr.substr(4, 1);
					result += "        " + dataFieldHeaderFlag + " ..... Data Field Header Flag: ";
					dataFieldHeaderPresent = dataFieldHeaderFlag == "1";
					if (dataFieldHeaderPresent) {
						result += "Data Field Header present";
					} else {
						result += "No Data Field Header";
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
					result += "    " + packetLengthStart + " .. Packet Length start\n";
					break;

				case 5:
					var packetLength = parseInt(packetLengthStart + packetByteStr, 2);
					result += "    " + packetByteStr + " .. Packet Length end, length: " + packetLength + " bytes in packet data field\n";
					break;

				case 6:
					if (dataFieldHeaderPresent) {
						var ccsdsSecHeaderFlag = packetByteStr.substr(0, 1);
						result += "    " + ccsdsSecHeaderFlag + " ......... CCSDS Secondary Header Flag: ";
						if (ccsdsSecHeaderFlag == "1") {
							result += "CCSDS-defined secondary header\n";
						} else {
							result += "non-CCSDS-defined secondary header\n";
							if (packetType == "1") {
								this.lastPacketKind = "pusTC";
							} else {
								this.lastPacketKind = "pusTM";
							}
						}

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
							spareBits1 = packetByteStr.substr(4, 4);
							result += "        " + spareBits1 + " .. Spare Bits (should all be zero)\n";
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

		var realLength = packetBytes.length - 1;
		var reportedLength = packetLength + 6;
		if (reportedLength != realLength) {
			result += "\n\nWARNING: It seems that the reported packet length does not correspond with the actual length of the packet!\n(The reported length is " + reportedLength + " bytes, while the actual length seems to be " + realLength + " bytes.)";
		}

		if (packetType == "1") {
			if ((curPacketKind == "ccsdsTM") || (curPacketKind == "pusTM")) {
				result += "\n\nWARNING: It seems that the reported packet kind does not correspond to the selected packet kind! (Telemetry packet selected, but packet indicates that it is a telecommand packet.)";
			}
		} else {
			if ((curPacketKind == "ccsdsTC") || (curPacketKind == "pusTC")) {
				result += "\n\nWARNING: It seems that the reported packet kind does not correspond to the selected packet kind! (Telecommand packet selected, but packet indicates that it is a telemetry packet.)";
			}
		}

		if (!dataFieldHeaderPresent) {
			if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
				result += "\n\nWARNING: It seems that the reported packet kind does not correspond to the selected packet kind! (PUS packet selected, but no data field header seems present, which is not allowed according to the PUS specification!)";
			}
		}

		if (ccsdsSecHeaderFlag == "1") {
			if ((curPacketKind == "pusTM") || (curPacketKind == "pusTC")) {
				result += "\n\nWARNING: It seems that the reported packet kind does not correspond to the selected packet kind! (PUS packet selected, but a CCSDS-specified secondary header seems present, which is not allowed according to the PUS specification!)";
			}
		}

		if (spareBits1 != "0000") {
			if (curPacketKind == "pusTM") {
				result += "\n\nWARNING: It seems that this PUS packet is slightly malformed! (The block of four spare bits in the data field header should be all zeroes according to the PUS standard.)";
			}
		}

		return result;
	}
}

pD.guiDecodePacketCall();

console.log("should be PUS TC:");
console.log(pD.decodePacket("199D C050 0004 4F80 01E9 54"));

console.log("should be PUS TM:");
console.log(pD.decodePacket("0870C1A200100003190072DD7A82D70A3D00CDFF800000"));
