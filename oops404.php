@include(top.php)

@include(sectionstart.php)
	<h1>@content(oops)</h1>

	<div class="content">
		@content(404_intro_1)
	</div>

	<div class="content">
		@content(404_intro_2)
	</div>

	<div class="content">
		@content(404_intro_3)
	</div>
@include(sectionend.php)

@include(bottom.php)