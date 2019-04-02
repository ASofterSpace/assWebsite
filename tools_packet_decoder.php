
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


<script src="/tools/packetDecoder.js?v=@version"></script>
