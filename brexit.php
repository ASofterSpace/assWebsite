@include(top.php)

@include(sectionstart.php)
	<h1>@content(brexit)</h1>

	<div class="content">
		@content(brexit_intro_1)
	</div>

	<div class="content">
		@content(brexit_intro_2)
	</div>
@include(sectionend.php)

@glossary(brexit_glossary.json)

@include(bottom.php)
