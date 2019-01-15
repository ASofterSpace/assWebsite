@include(top.php)

{{-- this is the main landing page, so it needs to look especially good, so we do not leave THIS ONE opacity up to randomness --}}
<section style="opacity:0.98">
	<div class="insec">
		<h1>Welcome</h1>
		<div class="content">
			Hey there,<br>
			We are A Softer Space.<br>
			We create software for space, science, and anything else that seems worthwhile.<br>
			If you want to learn more about us, you might want to look at our <a href="mission.php">mission statements</a> or our <a href="customers.php">customers</a>.
			Or maybe you want to see some <a href="products.php">products</a> or <a href="games.php">games</a> that we have been working on?<br>
			More interested in <a href="science.php">science</a>?
			Want to learn about our <a href="donations.php">donations</a>?
			Or do you just want to get some <a href="resources.php">free resources</a>?<br>
			Whatever it is that you are looking for, I truly hope you will find it here.<br>
			Have a great day!<br>
			Moya
		</div>
	</div>
	@include(secpix.php)
</section>

<!-- section style="opacity:0.9@rand(10)">
<h1>End of Year Report 2018</h1>
<div class="content">
We have just published our End of Year Report 2018.<br>
Have a look and discover what we have been up to!
</div>
</section -->

<!-- section style="opacity:0.9@rand(10)">
<h1>New Website</h1>
<div class="content">
Do you like our new website?
This is our new website!
add date
add facebook and twitter links
</div>
</section -->

@include(sectionstart.php)
	<h1>Contact</h1>

	<div class="content">
		Interested?<br>
		Seen something you like?<br>
		Just send us an email!
	</div>

	<div class="content">
		<a href="mailto:info@asofterspace.com">info@asofterspace.com</a>
	</div>
@include(sectionend.php)

<section style="opacity:0.9@rand(10)">
	<div class="insec" style="padding-left:0px; padding-right:0px;">
		<h1 style="padding-left:10px">Experience</h1>

		<script src="carousel.js?v=@version"></script>

		<div class="content carouselcontainer">
			<div class="carousel" id="expcarousel">
				{{-- first round --}}
				<a href="http://www.recoded.co/en/" target="_blank"><img alt="Recoded logo" src="pics/exp_recoded.png"/></a>
				<a href="http://www.egscc.esa.int/" target="_blank"><img alt="EGS-CC logo" src="pics/exp_egscc.png"/></a>
				<a href="http://skyhook.is/" target="_blank"><img alt="Skyhook logo" src="pics/exp_skyhook.png"/></a>
				<a href="https://nasa.github.io/openmct/" target="_blank"><img alt="OpenMCT logo" src="pics/exp_openmct.png"/></a>
				<a href="http://www.bluebirdcargo.com/" target="_blank"><img alt="Bluebird Cargo logo" src="pics/exp_bluebird.png"/></a>
				<a href="http://tomschiller.de/reference_graphs/" target="_blank"><img alt="Graph Merging Library logo" src="pics/exp_gml.png"/></a>
				<a href="https://www.right-basedonscience.de/" target="_blank"><img alt="Right based on science logo" src="pics/exp_right.png"/></a>
				{{-- second round --}}
				<a href="http://www.recoded.co/en/" target="_blank"><img alt="Recoded logo" src="pics/exp_recoded.png"/></a>
				<a href="http://www.egscc.esa.int/" target="_blank"><img id="expcarouselFirstImgSecondRound" alt="EGS-CC logo" src="pics/exp_egscc.png"/></a>
				<a href="http://skyhook.is/" target="_blank"><img alt="Skyhook logo" src="pics/exp_skyhook.png"/></a>
				<a href="https://nasa.github.io/openmct/" target="_blank"><img alt="OpenMCT logo" src="pics/exp_openmct.png"/></a>
				<a href="http://www.bluebirdcargo.com/" target="_blank"><img alt="Bluebird Cargo logo" src="pics/exp_bluebird.png"/></a>
				<a href="http://tomschiller.de/reference_graphs/" target="_blank"><img alt="Graph Merging Library logo" src="pics/exp_gml.png"/></a>
				<a href="https://www.right-basedonscience.de/" target="_blank"><img alt="Right based on science logo" src="pics/exp_right.png"/></a>
			</div>
		</div>
	</div>
	@include(secpix.php)
</section>

@include(sectionstart.php)
	<h1>Cookies</h1>
	<div class="content">
		Btw.: We are <strong>not</strong> asking for your consent about storing cookies on your computing device.<br>
		Why, you may ask?<br>
		Well... our software is simple and dependable. So we are simply not storing any cookies on your computer, period!
		(And we are not using nonsensical thirdparty software either, which might otherwise do so without us knowing.)
	</div>
@include(sectionend.php)

@include(bottom.php)