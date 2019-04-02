
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

<div class="content">
	<label><input type="checkbox" id="jF-sort-alphabetically" onchange="jF.doformat()">@content(tools_json_formatter_sort_alphabetically)</label>
</div>


<script src="/tools/jsonFormatter.js?v=@version"></script>
