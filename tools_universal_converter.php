
<div class="content">
	@content(tools_universal_converter_intro)
</div>

<div class="content" style="position: relative;">
	<div>@content(tools_universal_converter_convert_from):</div>
	<div id="uC-in-binary" class="option" onclick="uC.setIn('binary');"><span id="uC-inspan-binary">@content(tools_universal_converter_binary)</span></div>
	<div id="uC-in-octal" class="option" onclick="uC.setIn('octal');"><span id="uC-inspan-octal">@content(tools_universal_converter_octal)</span></div>
	<div id="uC-in-decimal" class="option selected" onclick="uC.setIn('decimal');"><span id="uC-inspan-decimal">@content(tools_universal_converter_decimal)</span></div>
	<div id="uC-in-hexadecimal" class="option" onclick="uC.setIn('hexadecimal');"><span id="uC-inspan-hexadecimal">@content(tools_universal_converter_hexadecimal)</span></div>
	<div id="uC-in-utf16" class="option" onclick="uC.setIn('utf16');"><span id="uC-inspan-utf16">@content(tools_universal_converter_utf16)</span></div>

	<div style="position: absolute; left: 50%; top: 0;">
		<div>@content(tools_universal_converter_convert_to):</div>
		<div id="uC-out-binary" class="option" onclick="uC.setOut('binary');">@content(tools_universal_converter_binary)</div>
		<div id="uC-out-octal" class="option" onclick="uC.setOut('octal');">@content(tools_universal_converter_octal)</div>
		<div id="uC-out-decimal" class="option" onclick="uC.setOut('decimal');">@content(tools_universal_converter_decimal)</div>
		<div id="uC-out-hexadecimal" class="option selected" onclick="uC.setOut('hexadecimal');">@content(tools_universal_converter_hexadecimal)</div>
		<div id="uC-out-utf16" class="option" onclick="uC.setOut('utf16');">@content(tools_universal_converter_utf16)</div>
	</div>

	<svg style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; width: 100%; height: 100%; z-index: -1;">
		<line id="uC-connector" x1="0" y1="0" x2="0" y2="0" stroke="black"/>
	</svg>
</div>

<div class="content">
	<div>@content(input):</div>
	<textarea id="uC-in" class="codebox" onchange="uC.doconvert()" oninput="uC.doconvert()">0</textarea>
</div>

<div class="content">
	<div>@content(output):</div>
	<textarea id="uC-out" class="codebox">0</textarea>
</div>


<script src="/tools/universalConverter.js?v=@version"></script>
