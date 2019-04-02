
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


<script src="/tools/textAnalyzer.js?v=@version"></script>
