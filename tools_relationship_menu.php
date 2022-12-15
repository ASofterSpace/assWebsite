
<div class="content">
	@content(tools_relationship_menu_intro)
</div>

<div class="content">
	<div id="rM-main-content">
	</div>
	<div id="rM-button-bar">
		<div class="option" onclick="rM.nextPerson();"><b>@content(tools_relationship_menu_btn_click_txt)</b> @content(tools_relationship_menu_btn_next)</div>
		<div class="option" onclick="rM.showResults();"><b>@content(tools_relationship_menu_btn_click_txt)</b> @content(tools_relationship_menu_btn_show)</div>
	</div>
</div>

<div class="content">
	@content(tools_relationship_menu_source)
</div>


<script src="/tools/relationshipMenu.js?v=@version"></script>
