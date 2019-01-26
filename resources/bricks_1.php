@include(top.php)

@include(sectionstart.php)
	<h1>Bricks 1</h1>

	<div class="content">
		Just, well, bricks...
	</div>
	
	@include(resource_disclaimer.php)
	
	@include(resource_howto.php)
	
@include(sectionend.php)

@include(sectionstart.php)
	<h2>Original</h2>

	@include(resource_kind_original.php)
	
	<div class="content centerimg">
		<img src="/pics/textures/bricks_1.jpg" />
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>Transparent</h2>

	<div class="content">
		Here, we edited the texture to be transparent such that it can be put on top of any wallpaper and then looks as if the wallpaper was ripped open and the bricks could be seen through.<br>
		(However, if you want to be even more realistic, you should apply this kind of ripped up effect to your wallpaper directly, and place the bricks behind it - as in real life, the bricks are BEHIND the wallpaper, right? ^^)
	</div>
	
	<div class="content centerimg">
		<img src="/pics/textures/bricks_1_in_wall.png" />
	</div>
@include(sectionend.php)

@include(bottom.php)