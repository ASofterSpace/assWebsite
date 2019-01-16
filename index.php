@include(top.php)

@include(sectionstartnoopacity.php)
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
@include(sectionend.php)

{{-- @include(sectionstart.php)
<h2>End of Year Report 2018</h2>
<div class="content">
We have just published our End of Year Report 2018.<br>
Have a look and discover what we have been up to!
add date
add fb and twitter links?
</div>
@include(sectionend.php) --}}

{{-- @include(sectionstart.php)
<h2>New Website</h2>
<div class="content">
Do you like our new website?
This is our new website!
add date
add facebook and twitter links
</div>
@include(sectionend.php) --}}

@include(sectionstart.php)
	<h2>Contact</h2>

	<div class="content">
		Have you seen something that you like?<br>
		Do you want to do research with us? Do you want to order custom software for you or your enterprise? Or just chat about the direction Star Wars has been going lately?<br>
		Just send us an email!
	</div>

	<div class="content">
		<a href="mailto:info@asofterspace.com">info@asofterspace.com</a>
	</div>
@include(sectionend.php)

<section>
	<canvas id="cvSection@countup(sections)"></canvas>
	<div class="insec" style="padding-left:0; padding-right:0;">
		<h2>Experience</h2>

		<script src="carousel.js?v=@version"></script>

		<div class="content carouselcontainer">
			<div class="carousel" id="expcarousel">
				{{-- first round --}}
				@include(expcarousel.php)
				{{-- second round --}}
				@include(expcarousel.php)
			</div>
		</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>Cookies</h2>
	<div class="content">
		Btw.: We are <strong>not</strong> asking for your consent about storing cookies on your computing device.<br>
		Why, you may ask?<br>
		Well... our software is simple and dependable. So we are simply not storing any cookies on your computer, period!
		(And we are not using nonsensical thirdparty software either, which might otherwise do so without us knowing.)
	</div>
@include(sectionend.php)

@include(bottom.php)