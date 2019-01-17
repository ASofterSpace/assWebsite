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
		<link href="/style.css?v=@version" media="all" rel="stylesheet" type="text/css"></link>
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
		{{-- leave default --}}
	@endif
	@if(page="donations.php")
		style="background-image: url('pics/bg_island_1.jpg');"
	@endif
	>
	
	<div id="topofpage">&nbsp;</div>

	<header>
		<canvas id="cvHeader" style=""></canvas>
			
		{{-- TODO :: instead of navigating to nav.php, actually open an overlay or somesuch... would be more professional? or is this actually better? xD --}}
		<a class="aburger" href="/nav.php">
			<img class="burger" alt="burger icon" src="/pics/burger.png" />
		</a>

		<a class="alogo" href="/">
			<img class="logo" alt="a softer space logo" src="/pics/logo.png" />
		</a>
		
		<div class="headerbar">
			{{-- show top navigation in the header --}}
			@if(page="mission.php")
			/ <div class="item">
				<a href="/mission.php">Mission</a>
			</div>
			@endif
			@if(page="licenses/unlicense.php")
			/ <div class="item">
				<a href="/mission.php">Mission</a>
			</div> / <div class="item">
				<a href="/licenses/unlicense.php">Unlicense</a>
			</div>
			@endif
			@if(page="products.php")
			/ <div class="item">
				<a href="/products.php">Products</a>
			</div>
			@if(page="privacy/index.php")
			/ <div class="item">
				<a href="/products.php">Products</a>
			</div> / <div class="item">
				<a href="/privacy/">Privacy Policies</a>
			</div>
			@endif
			@if(page="privacy/universalconverter.php")
			/ <div class="item">
				<a href="/products.php">Products</a>
			</div> / <div class="item">
				<a href="/privacy/">Privacy Policies</a>
			</div> / <div class="item">
				<a href="/privacy/universalconverter.php">UniversalConverter</a>
			</div>
			@endif
			@if(page="customers.php")
			/ <div class="item">
				<a href="/customers.php">Customers</a>
			</div>
			@endif
			@if(page="science.php")
			/ <div class="item">
				<a href="/science.php">Science</a>
			</div>
			@endif
			@if(page="games.php")
			/ <div class="item">
				<a href="/games.php">Games</a>
			</div>
			@endif
			@if(page="resources.php")
			/ <div class="item">
				<a href="/resources.php">Resources</a>
			</div>
			@endif
			@if(page="merchandise.php")
			/ <div class="item">
				<a href="/merchandise.php">Merchandise</a>
			</div>
			@endif
			@if(page="donations.php")
			/ <div class="item">
				<a href="/donations.php">Donations</a>
			</div>
			@endif
		</div>
	</header>

	{{-- opening the maincontainer that is closed in bottom
	(which aligns EVERYTHING in the middle if the screen is VERY wide -
	think desktop with two screens) --}}
	<div class="maincontainer clearfix">

		@if(page!="nav.php")
			<div class="leftnavcontainer">
				@include(leftnavs.php)
			</div>
		@endif
