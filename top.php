<!DOCTYPE html>
<html lang="@content(lang)">

	<head>
		<meta charset="utf-8">

		<title>@content(title)</title>

		{{-- SEO keywords (not terribly important though) --}}
		<meta name="keywords" content="@content(keywords)">

		{{-- description should be 150 characters long; not more than 160! --}}
		<meta name="description" content="@content(description)">

		{{-- CSS --}}
		<link href="style.css?v=@version" media="all" rel="stylesheet" type="text/css"></link>
	</head>

	<body
	{{-- different backgrounds for different pages --}}
	@if(page="mission.php")
		style="background-image: url('pics/bg_esja_1.jpg');"
	@endif
	@if(page="products.php")
		style="background-image: url('pics/bg_newton_1.jpg');"
	@endif
	@if(page="customers.php")
		{{-- leave default --}}
	@endif
	@if(page="science.php")
		style="background-image: url('pics/bg_newton_2.jpg');"
	@endif
	@if(page="games.php")
		style="background-image: url('pics/bg_esja_2.jpg');"
	@endif
	@if(page="resources.php")
		style="background-image: url('pics/bg_esja_1.jpg');"
	@endif
	@if(page="merchandise.php")
		style="background-image: url('pics/bg_newton_1.jpg');"
	@endif
	@if(page="donations.php")
		style="background-image: url('pics/bg_island_1.jpg');"
	@endif
	>
		<a name="topofpage"></a>

	<header>
		<div class="headerwhite">
			<a href="index.php">
				<img class="logo" alt="a softer space logo" src="pics/logo.png" />
			</a>
			<div class="headerbar">
				{{-- show top navigation in the header --}}
				@if(page="mission.php")
				/ <div class="item" id="whatwedoitem">
					<a href="mission.htm">Mission</a>
				</div>
				@endif
				@if(page="products.php")
				/ <div class="item" id="whatwedoitem">
					<a href="products.htm">Products</a>
				</div>
				@endif
				@if(page="customers.php")
				/ <div class="item" id="whatwedoitem">
					<a href="customers.htm">Customers</a>
				</div>
				@endif
				@if(page="science.php")
				/ <div class="item" id="whatwedoitem">
					<a href="science.htm">Science</a>
				</div>
				@endif
				@if(page="games.php")
				/ <div class="item" id="whatwedoitem">
					<a href="games.htm">Games</a>
				</div>
				@endif
				@if(page="resources.php")
				/ <div class="item" id="whatwedoitem">
					<a href="resources.htm">Resources</a>
				</div>
				@endif
				@if(page="merchandise.php")
				/ <div class="item" id="whatwedoitem">
					<a href="merchandise.htm">Merchandise</a>
				</div>
				@endif
				@if(page="donations.php")
				/ <div class="item" id="whatwedoitem">
					<a href="donations.htm">Donations</a>
				</div>
				@endif
			</div>
		</div>
		<img class="pix headerpix" alt="pixelated design element" src="pics/pixels_header.png" />
	</header>

	<div class="leftnavcontainer">
		<section class="leftnav">
			<div class="insec">
				<a href="index.php">
					<div>
						Home
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="mission.php">
					<div>
					Mission
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="products.php">
					<div>
					Products
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="customers.php">
					<div>
					Customers
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="science.php">
					<div>
					Science
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="games.php">
					<div>
					Games
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="resources.php">
					<div>
					Resources
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
				<div class="insec">
			<a href="merchandise.php">
					<div>
					Merchandise
				</div>
			</a>
			</div>
			@include(navpix.php)
		</section>
				
		<section class="leftnav">
			<div class="insec">
				<a href="donations.php">
					<div>
						Donations
					</div>
				</a>
			</div>
			@include(navpix.php)
		</section>
	</div>
