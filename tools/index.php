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
		<div>@content(input):</div>
		<textarea id="uC-in" class="codebox" onchange="uC.doconvert()" oninput="uC.doconvert()">0</textarea>
	</div>

	<div class="content" style="position: relative;">
		<div>@content(tools_universal_converter_convert_from):</div>
		<div id="uC-in-binary" class="option" onclick="uC.setIn('binary');">@content(tools_universal_converter_binary)</div>
		<div id="uC-in-octal" class="option" onclick="uC.setIn('octal');">@content(tools_universal_converter_octal)</div>
		<div id="uC-in-decimal" class="option" onclick="uC.setIn('decimal');">@content(tools_universal_converter_decimal)</div>
		<div id="uC-in-hexadecimal" class="option selected" onclick="uC.setIn('hexadecimal');">@content(tools_universal_converter_hexadecimal)</div>
		<div id="uC-in-utf16" class="option" onclick="uC.setIn('utf16');">@content(tools_universal_converter_utf16)</div>

		<div style="position: absolute; left: 50%; top: 0;">
			<div>@content(tools_universal_converter_convert_to):</div>
			<div id="uC-out-binary" class="option selected" onclick="uC.setOut('binary');">@content(tools_universal_converter_binary)</div>
			<div id="uC-out-octal" class="option" onclick="uC.setOut('octal');">@content(tools_universal_converter_octal)</div>
			<div id="uC-out-decimal" class="option" onclick="uC.setOut('decimal');">@content(tools_universal_converter_decimal)</div>
			<div id="uC-out-hexadecimal" class="option" onclick="uC.setOut('hexadecimal');">@content(tools_universal_converter_hexadecimal)</div>
			<div id="uC-out-utf16" class="option" onclick="uC.setOut('utf16');">@content(tools_universal_converter_utf16)</div>
		</div>
	</div>

	<div class="content">
		<div>@content(output):</div>
		<textarea id="uC-out" class="codebox">0</textarea>
	</div>
@include(sectionend.php)

<script src="/tools/universalConverter.js?v=@version"></script>


@include(sectionstart.php)
	<h2>@content(tools_packet_decoder_headline)</h2>

	<div class="content">
		@content(tools_packet_decoder_intro)
	</div>

	<div class="content">
		<div>@content(input):</div>
		<textarea id="pD-in" class="codebox" onchange="pD.guiDecodePacketCall()" oninput="pD.guiDecodePacketCall()">0890C00100100003190072DD7A82D70A3D00CDFF800000</textarea>
	</div>

	<div class="content">
		<div>@content(tools_packet_decoder_decode_as):</div>
		<select id="pD-type" onchange="pD.guiPacketTypeChangeCall()" class="codeselector">
			<option value="auto" selected="selected">@content(tools_packet_decoder_decode_as_auto)</option>
			<option value="ccsdsTM">@content(tools_packet_decoder_decode_as_ccsds_tm)</option>
			<option value="ccsdsTC">@content(tools_packet_decoder_decode_as_ccsds_tc)</option>
			<option value="pusTM">@content(tools_packet_decoder_decode_as_pus_tm)</option>
			<option value="pusTC">@content(tools_packet_decoder_decode_as_pus_tc)</option>
		</select>
	</div>

	<div class="content">
		<div>@content(output):</div>
		<div id="pD-out" class="codecontainer"></div>
	</div>
@include(sectionend.php)

<script src="/tools/packetDecoder.js?v=@version"></script>


@include(sectionstart.php)
	<h2>@content(tools_text_analyzer_headline)</h2>

	<div class="content">
		@content(tools_text_analyzer_intro)
	</div>

	<div class="content">
		<div>Text:</div>
		<textarea id="tA-in" class="codebox" onchange="tA.doanalyze()" oninput="tA.doanalyze()"></textarea>
	</div>

	<div class="content" style="position: relative;">
		<div>@content(tools_text_analyzer_out_length): <span id="tA-out-length">0</span></div>
		<div>@content(tools_text_analyzer_out_word_count): <span id="tA-out-word-count">0</span></div>
		<div>@content(tools_text_analyzer_out_sentence_count): <span id="tA-out-sentence-count">0</span></div>
		<div>@content(tools_text_analyzer_out_size_est): <span id="tA-out-size-est">0</span></div>
		<div>@content(tools_text_analyzer_out_most_common_char): <span id="tA-out-most-common-char">&nbsp; (0</span> @content(times))</div>
		<div>@content(tools_text_analyzer_out_most_common_letter): <span id="tA-out-most-common-letter">&nbsp; (0</span> @content(times))</div>
	</div>
@include(sectionend.php)

<script src="/tools/textAnalyzer.js?v=@version"></script>


@include(sectionstart.php)
	<h2>@content(tools_json_formatter_headline)</h2>

	<div class="content">
		@content(tools_json_formatter_intro)
	</div>

	<div class="content">
		<div>JSON @content(input):</div>
		<textarea id="jF-in" class="codebox" onchange="jF.doformat()" oninput="jF.doformat()">{"a softer":"space"}</textarea>
	</div>

	<div class="content">
		<div>JSON @content(output):</div>
		<textarea id="jF-out" class="codebox">{
&nbsp;&nbsp;"a softer": "space"
}</textarea>
	</div>

	<!-- TODO :: add option to sort keys alphabetically -->
@include(sectionend.php)

<script src="/tools/jsonFormatter.js?v=@version"></script>


@include(bottom.php)
