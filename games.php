@include(top.php)

@include(sectionstart.php)
	<h1>@content(games)</h1>

	<div class="content">
		@content(games_intro_1)
	</div>

	<div class="content">
		@content(games_intro_2)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>vrCade</h2>

	<div class="content">
		@content(games_vrcade_intro)
	</div>

	<div class="content">
		@content(games_vrcade_preview)
	</div>

	<div class="content">
		<div style="position:relative;padding-top:56.25%;">
			<iframe src="https://www.youtube.com/embed/7mkDv6NCrKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></iframe>
		</div>
	</div>
@include(sectionend.php)

@include(bottom.php)