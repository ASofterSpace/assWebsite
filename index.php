@include(top.php)

@include(sectionstartnoopacity.php)
	<h1>@content(welcome)</h1>
	
	<div class="content">
		@content(index_welcome_section)
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
	<h2>@content(contact)</h2>

	<div class="content">
		@content(index_contact_section)
	</div>

	<div class="content">
		<a href="mailto:info@asofterspace.com">info@asofterspace.com</a>
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(experience)</h2>

	<script src="carousel.js?v=@version"></script>

	<div class="content carouselcontainer">
		<div class="carousel" id="expcarousel">
			{{-- first round --}}
			@include(expcarousel.php)
			<a id="expcarouselFirstImgSecondRound"></a>
			{{-- second round --}}
			@include(expcarousel.php)
		</div>
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(cookies)</h2>
	<div class="content">
		@content(index_cookie_section)
	</div>
@include(sectionend.php)

@include(bottom.php)