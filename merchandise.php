@include(top.php)

@include(sectionstart.php)
	<h1>Poster Gallery</h1>

	<div class="content">
		These are some posters we have designed:
	</div>
	
	<div class="content">
		<a href="#poster_software">A Softer Space Software-themed Poster</a>
	</div>
	
	<div class="content">
		<a href="#poster_mars">A Softer Space Mars-themed Poster</a>
	</div>
	
	<div class="content">
		<a href="#poster_flipper_qnd">Poster about Flipper QnD from vrCade</a>
	</div>
@include(sectionend.php)

<section id="poster_software" style="opacity:0.9@rand(10)">
	<div class="insec">
		<h2>A Softer Space Software-themed Poster</h2>
		
		<div class="content centerimg">
			<img src="/pics/poster_software.png" />
		</div>
	</div>
	@include(secpix.php)
</section>

<section id="poster_mars" style="opacity:0.9@rand(10)">
	<div class="insec">
		<h2>A Softer Space Mars-themed Poster</h2>
		
		<div class="content centerimg">
			<img src="/pics/poster_mars.png" />
		</div>
	</div>
	@include(secpix.php)
</section>

<section id="poster_flipper_qnd" style="opacity:0.9@rand(10)">
	<div class="insec">
		<h2>Poster about Flipper QnD from vrCade</h2>
		
		<div class="content centerimg">
			<img src="/pics/poster_flipper_qnd.png" />
		</div>
	</div>
	@include(secpix.php)
</section>

@include(bottom.php)