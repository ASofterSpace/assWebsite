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

	<body id="topofpage"
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

	<a class="blogo" href="/index.php">
		<img class="logo" alt="a softer space logo" src="/pics/logo.png" />
	</a>
	
	{{-- TODO :: instead of navigating to nav.php, actually open an overlay or somesuch... would be more professional? --}}
	<a class="burger" href="/nav.php">
		<img alt="burger icon" src="/pics/burger.png" />
	</a>

	<header>
		<div class="headerwhite">
			<a class="alogo" href="/index.php">
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
					<a href="/privacy/index.php">Privacy Policies</a>
				</div>
				@endif
				@if(page="privacy/universalconverter.php")
				/ <div class="item">
					<a href="/products.php">Products</a>
				</div> / <div class="item">
					<a href="/privacy/index.php">Privacy Policies</a>
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
		</div>
		<img class="pix headerpix" alt="pixelated design element" src="/pics/pixels_header.png" />
	</header>

	{{-- opening the maincontainer that is closed in bottom
	(which aligns EVERYTHING in the middle if the screen is VERY wide -
	think desktop with two screens) --}}
	<div class="maincontainer clearfix">

		<div class="leftnavcontainer" 
				@if(page="nav.php")
					style="display:none !important"
				@endif
		>
			@include(leftnavs.php)
		</div>
