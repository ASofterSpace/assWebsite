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

<script src="/tools/universalConverter.js?v=@version"></script>


@include(sectionstart.php)
	<h2>@content(tools_packet_decoder_headline)</h2>

	<div class="content">
		@content(tools_packet_decoder_intro)
	</div>

	<div class="content">
		<div>Input:</div>
		<textarea id="pD-in" onchange="pD.guiDecodePacketCall()" oninput="pD.guiDecodePacketCall()">0890C00100100003190072DD7A82D70A3D00CDFF800000</textarea>
	</div>

	<div class="content">
		<div>@content(tools_packet_decoder_decode_as):</div>
		<select id="pD-type" onchange="pD.guiPacketTypeChangeCall()">
			<option value="auto" selected="selected">@content(tools_packet_decoder_decode_as_auto)</option>
			<option value="ccsdsTM">@content(tools_packet_decoder_decode_as_ccsds_tm)</option>
			<option value="ccsdsTC">@content(tools_packet_decoder_decode_as_ccsds_tc)</option>
			<option value="pusTM">@content(tools_packet_decoder_decode_as_pus_tm)</option>
			<option value="pusTC">@content(tools_packet_decoder_decode_as_pus_tc)</option>
		</select>
	</div>

	<div class="content">
		<div>Output:</div>
		<textarea id="pD-out" style="height: 35em;"></textarea>
	</div>
@include(sectionend.php)

<script src="/tools/packetDecoder.js?v=@version"></script>


@include(bottom.php)
