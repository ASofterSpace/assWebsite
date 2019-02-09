@include(top.php)

@include(sectionstart.php)
	<h1>@content(tools)</h1>

	<div class="content">
		@content(tools_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(tools_universal_converter_headline)</h2>

	<div class="content">
		@content(tools_universal_converter_intro)
	</div>
	
	<div class="content">
		<div>Input:</div>
		<textarea id="uC-in" onchange="uC.doconvert()" oninput="uC.doconvert()">0</textarea>
	</div>
	
	<div class="content" style="position: relative;">
		<div>Convert from:</div>
		<div id="uC-in-binary" class="option" onclick="uC.setIn('binary');">@content(tools_universal_converter_binary)</div>
		<div id="uC-in-octal" class="option" onclick="uC.setIn('octal');">@content(tools_universal_converter_octal)</div>
		<div id="uC-in-decimal" class="option" onclick="uC.setIn('decimal');">@content(tools_universal_converter_decimal)</div>
		<div id="uC-in-hexadecimal" class="option selected" onclick="uC.setIn('hexadecimal');">@content(tools_universal_converter_hexadecimal)</div>
		
		<div style="position: absolute; left: 50%; top: 0;">
			<div>Convert to:</div>
			<div id="uC-out-binary" class="option selected" onclick="uC.setOut('binary');">@content(tools_universal_converter_binary)</div>
			<div id="uC-out-octal" class="option" onclick="uC.setOut('octal');">@content(tools_universal_converter_octal)</div>
			<div id="uC-out-decimal" class="option" onclick="uC.setOut('decimal');">@content(tools_universal_converter_decimal)</div>
			<div id="uC-out-hexadecimal" class="option" onclick="uC.setOut('hexadecimal');">@content(tools_universal_converter_hexadecimal)</div>
		</div>
	</div>
	
	<div class="content">
		<div>Output:</div>
		<textarea id="uC-out">0</textarea>
	</div>
@include(sectionend.php)

<script>
	window.uC = {
	
		inKind: "hexadecimal",
	
		outKind: "binary",
	
	
		setIn: function(id) {
			document.getElementById("uC-in-binary").className = "option";
			document.getElementById("uC-in-octal").className = "option";
			document.getElementById("uC-in-decimal").className = "option";
			document.getElementById("uC-in-hexadecimal").className = "option";
			
			document.getElementById("uC-in-" + id).className = "option selected";
			
			this.inKind = id;
			
			this.doconvert();
		},
		
		setOut: function(id) {
			document.getElementById("uC-out-binary").className = "option";
			document.getElementById("uC-out-octal").className = "option";
			document.getElementById("uC-out-decimal").className = "option";
			document.getElementById("uC-out-hexadecimal").className = "option";
			
			document.getElementById("uC-out-" + id).className = "option selected";
			
			this.outKind = id;
			
			this.doconvert();
		},
		
		doconvert: function() {
			var orig = document.getElementById("uC-in").value;
			
			var result = this.convert(orig, this.inKind, this.outKind);
		
			document.getElementById("uC-out").value = result;
		},
		
		convert: function(orig, origKind, targetKind) {
		
			if (orig == "") {
				return "";
			}
		
			var origBase = 10;
			var targetBase = 10;

			if (origKind == "binary") {
				origBase = 2;
			}
			if (origKind == "octal") {
				origBase = 8;
			}
			if (origKind == "decimal") {
				origBase = 10;
			}
			if (origKind == "hexadecimal") {
				origBase = 16;
			}

			if (targetKind == "binary") {
				targetBase = 2;
			}
			if (targetKind == "octal") {
				targetBase = 8;
			}
			if (targetKind == "decimal") {
				targetBase = 10;
			}
			if (targetKind == "hexadecimal") {
				targetBase = 16;
			}

			orig = orig.trim();

			var intermediate = parseInt(orig, origBase);

			var result = (intermediate).toString(targetBase);

			return result.toUpperCase();
		},
	};
</script>

@include(sectionstart.php)
	<h2>@content(tools_packet_decoder_headline)</h2>

	<div class="content">
		@content(tools_packet_decoder_intro)
	</div>
	
	<div class="content">
		<div>Input:</div>
		<textarea id="pD-in" onchange="pD.dodecode()" oninput="pD.dodecode()">0890C00100100003190072DD7A82D70A3D00CDFF800000</textarea>
	</div>
	
	<div class="content">
		<div>Output:</div>
		<textarea id="pD-out" style="height: 35em;"></textarea>
	</div>
@include(sectionend.php)

<script>
	window.pD = {
	
		dodecode: function() {
			var orig = document.getElementById("pD-in").value;
			
			var result = this.decodePacket(orig);
		
			document.getElementById("pD-out").value = result;
		},
		
		// we assume the packet is given in hex
		decodePacket: function(packetStr) {
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
			var pusType = null;
			var apid = null;
			var apidStart = "";
			var seqCountStart = "";
			var packetLengthStart = "";
			var packetLength = null;
			var dataFieldHeaderPresent = false;
			
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
						pusType = packetByteStr.substr(3, 1);
						result += "       " + pusType + " ...... Packet Type: ";
						if (pusType == "1") {
							result += "Telecommand";
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
							}
							
							if (pusType == "1") {
								var tcPacketPusVersion = parseInt(packetByteStr.substr(1, 3), 2);
								result += "     " + packetByteStr.substr(1, 3) + " ...... TC Packet PUS Version Number: " + tcPacketPusVersion + "\n";
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
			
			return result;
		}
	}
	
	pD.dodecode();

	console.log("should be PUS TC:");
	console.log(pD.decodePacket("199D C050 0004 4F80 01E9 54"));

	console.log("should be PUS TM:");
	console.log(pD.decodePacket("0870C1A200100003190072DD7A82D70A3D00CDFF800000"));

</script>

@include(bottom.php)