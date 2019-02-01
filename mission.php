@include(top.php)

@include(sectionstart.php)
	<h1>@content(mission)</h1>

	<div class="content">
		@content(mission_intro)
	</div>
@include(sectionend.php)

<a id="hippies"></a>
@include(sectionstart.php)
	<h2>@content(mission_hippies_headline)</h2>

	<div class="content">
		@content(mission_hippies_intro)
	</div>
@include(sectionend.php)

<a id="space"></a>
@include(sectionstart.php)
	<h2>@content(mission_space_headline)</h2>

	<div class="content">
		@content(mission_space_intro)
	</div>
@include(sectionend.php)

<a id="earth"></a>
@include(sectionstart.php)
	<h2>@content(mission_earth_headline)</h2>

	<div class="content">
		@content(mission_earth_intro_1)
	</div>

	<div class="content">
		@content(mission_earth_intro_2)
	</div>
@include(sectionend.php)

<a id="science"></a>
@include(sectionstart.php)
	<h2>@content(mission_science_headline)</h2>

	<div class="content">
		@content(mission_science_intro)
	</div>
@include(sectionend.php)

<a id="open"></a>
@include(sectionstart.php)
	<h2>@content(mission_open_headline)</h2>

	<div class="content">
		@content(mission_open_intro)
	</div>
@include(sectionend.php)

<a id="military"></a>
@include(sectionstart.php)
	<h2>@content(mission_military_headline)</h2>

	<div class="content">
		@content(mission_military_intro)
	</div>
@include(sectionend.php)

@include(bottom.php)