@include(top.php)

@include(sectionstart.php)
	{{-- <h1>@content(textures)</h1> --}}
	<h1>@content(resources)</h1>

	<div class="content">
		@content(resources_intro)
	</div>

	@include(resource_disclaimer.php)

@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(bricks) 1</h2>

	<a class="resource_preview" href="/resources/bricks_1">
		<img src="/pics/textures/bricks_1_preview.jpg"></img>
		<img src="/pics/textures/bricks_1_in_wall_preview.jpg"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(resources_bricks_1_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(bricks) 2</h2>

	<a class="resource_preview" href="/resources/bricks_2">
		<img src="/pics/textures/bricks_2_preview.jpg"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(resources_bricks_2_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(particleboard) 1</h2>

	<a class="resource_preview" href="/resources/particleboard_1">
		<img src="/pics/textures/particleboard_1_preview.jpg"></img>
		<img src="/pics/textures/particleboard_1_continuous_preview.jpg"></img>
		<img src="/pics/textures/particleboard_1_purple_continuous_preview.jpg"></img>
		<img src="/pics/textures/particleboard_1_silver_continuous_preview.jpg"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(resources_particleboard_1_intro)
	</div>
@include(sectionend.php)

@include(sectionstartnoopacity.php)
	<h2>@content(wallpaper) 1</h2>

	<a class="resource_preview" href="/resources/wallpaper_1">
		<img src="/pics/textures/wallpaper_1_preview.jpg"></img>
		<img src="/pics/textures/wallpaper_1_continuous_preview.jpg"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(resources_wallpaper_1_intro)
	</div>
@include(sectionend.php)

@include(sectionstartnoopacity.php)
	<h2>@content(wallpaper) 2</h2>

	<a class="resource_preview" href="/resources/wallpaper_2">
		<img src="/pics/textures/wallpaper_2_preview.jpg"></img>
		<img src="/pics/textures/wallpaper_2_continuous_preview.jpg"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(resources_wallpaper_2_intro)
	</div>
@include(sectionend.php)

@include(bottom.php)
