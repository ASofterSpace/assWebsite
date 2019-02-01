@include(top.php)

@include(sectionstart.php)
	<h1>@content(particleboard) 1</h1>

	<div class="content">
		@content(resources_particleboard_1_intro)
	</div>
	
	@include(resource_disclaimer.php)
	
	@include(resource_howto.php)
	
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(original)</h2>

	@include(resource_kind_original.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/particleboard_1.jpg" />
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(continuous)</h2>

	@include(resource_kind_continuous.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/particleboard_1_continuous.jpg" />
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(purple)</h2>

	@include(resource_kind_colored.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/particleboard_1_purple_continuous.jpg" />
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(silver)</h2>

	@include(resource_kind_colored.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/particleboard_1_silver_continuous.jpg" />
	</div>
@include(sectionend.php)

@include(bottom.php)