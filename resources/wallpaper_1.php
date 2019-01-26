@include(top.php)

@include(sectionstart.php)
	<h1>Wallpaper 1</h1>

	<div class="content">
		Some white wallpaper we have at home... not really impressive, but a good staple to have.
	</div>
	
	@include(resource_disclaimer.php)
	
	@include(resource_howto.php)
	
@include(sectionend.php)

@include(sectionstartnoopacity.php)
	<h2>Original</h2>

	@include(resource_kind_original.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/wallpaper_1.jpg" />
	</div>
@include(sectionend.php)

@include(sectionstartnoopacity.php)
	<h2>Continuous</h2>

	@include(resource_kind_continuous.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/wallpaper_1_continuous.jpg" />
	</div>
@include(sectionend.php)

@include(bottom.php)