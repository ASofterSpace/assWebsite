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
	@if(pageStart="mission")
		style="background-image: url('/pics/bg_esja_1.jpg');"
	@endif
	@if(pageStart="products")
		style="background-image: url('/pics/bg_newton_1.jpg');"
	@endif
	@if(pageStart="cdm")
		style="background-image: url('/pics/bg_newton_1.jpg');"
	@endif
	@if(pageStart="pdfQrReader")
		style="background-image: url('/pics/bg_newton_1.jpg');"
	@endif
	@if(pageStart="xdc")
		style="background-image: url('/pics/bg_newton_1.jpg');"
	@endif
	@if(pageStart="brexit")
		style="background-image: url('/pics/bg_brexit_1.jpg');"
	@endif
	@if(pageStart="customers")
		{{-- leave default --}}
	@endif
	@if(pageStart="science")
		style="background-image: url('/pics/bg_newton_2.jpg');"
	@endif
	@if(pageStart="tools")
		style="background-image: url('/pics/bg_solheimajokull_1.jpg');"
	@endif
	@if(pageStart="games")
		style="background-image: url('/pics/bg_esja_2.jpg');"
	@endif
	@if(pageStart="resources")
		style="background-image: url('/pics/bg_esja_1.jpg');"
	@endif
	@if(pageStart="merchandise")
		{{-- leave default --}}
	@endif
	@if(pageStart="donations")
		style="background-image: url('/pics/bg_island_1.jpg');"
	@endif
	@if(page="oops404.php")
		style="background-image: url('/pics/bg_sos_1.jpg');"
	@endif
	>

	<script>
		window._globalSiteLang = "@content(lang)";
	</script>

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
				<a href="/mission">@content(mission)</a>
			</div>
			@endif
			@if(page="licenses/unlicense.php")
			/ <div class="item">
				<a href="/mission">@content(mission)</a>
			</div> / <div class="item">
				<a href="/licenses/unlicense">Unlicense</a>
			</div>
			@endif
			@if(page="products.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div>
			@endif
			@if(page="cdm/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/cdm">CDM Commandline Tool</a>
			</div>
			@endif
			@if(page="pdfQrReader/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/pdfQrReader">PDF QR Reader</a>
			</div>
			@endif
			@if(page="xdc/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/xdc">XDC Report Creator</a>
			</div>
			@endif
			@if(page="iprawareness/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/iprawareness">IPR Awareness</a>
			</div>
			@endif
			@if(page="vrcodeanalyzer/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/vrcodeanalyzer">VR Code Analyzer</a>
			</div>
			@endif
			@if(page="privacy/index.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/privacy/">@content(privacy_policies)</a>
			</div>
			@endif
			@if(page="privacy/universalconverter.php")
			/ <div class="item">
				<a href="/products">@content(products)</a>
			</div> / <div class="item">
				<a href="/privacy/">@content(privacy_policies)</a>
			</div> / <div class="item">
				<a href="/privacy/universalconverter">UniversalConverter</a>
			</div>
			@endif
			@if(page="customers.php")
			/ <div class="item">
				<a href="/customers">@content(customers)</a>
			</div>
			@endif
			@if(page="science/index.php")
			/ <div class="item">
				<a href="/science">@content(science)</a>
			</div>
			@endif
			@if(page="tools/index.php")
			/ <div class="item">
				<a href="/tools">@content(tools)</a>
			</div>
			@endif
			@if(page="tools/universalConverter.php")
			/ <div class="item">
				<a href="/tools">@content(tools)</a>
			</div> / <div class="item">
				<a href="/tools/universalConverter">@content(tools_universal_converter_headline)</a>
			</div>
			@endif
			@if(page="tools/packetDecoder.php")
			/ <div class="item">
				<a href="/tools">@content(tools)</a>
			</div> / <div class="item">
				<a href="/tools/packetDecoder">@content(tools_packet_decoder_headline)</a>
			</div>
			@endif
			@if(page="tools/textAnalyzer.php")
			/ <div class="item">
				<a href="/tools">@content(tools)</a>
			</div> / <div class="item">
				<a href="/tools/textAnalyzer">@content(tools_text_analyzer_headline)</a>
			</div>
			@endif
			@if(page="tools/jsonFormatter.php")
			/ <div class="item">
				<a href="/tools">@content(tools)</a>
			</div> / <div class="item">
				<a href="/tools/jsonFormatter">@content(tools_json_formatter_headline)</a>
			</div>
			@endif
			@if(page="games/index.php")
			/ <div class="item">
				<a href="/games">@content(games)</a>
			</div>
			@endif
			@if(page="resources/index.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div>
			@endif
			@if(page="resources/bricks_1.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div> / <div class="item">
				<a href="/bricks_1">@content(bricks) 1</a>
			</div>
			@endif
			@if(page="resources/bricks_2.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div> / <div class="item">
				<a href="/bricks_2">@content(bricks) 2</a>
			</div>
			@endif
			@if(page="resources/particleboard_1.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div> / <div class="item">
				<a href="/particleboard_1">@content(particleboard) 1</a>
			</div>
			@endif
			@if(page="resources/wallpaper_1.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div> / <div class="item">
				<a href="/wallpaper_1">@content(wallpaper) 1</a>
			</div>
			@endif
			@if(page="resources/wallpaper_2.php")
			/ <div class="item">
				<a href="/resources">@content(resources)</a>
			</div> / <div class="item">
				<a href="/wallpaper_2">@content(wallpaper) 2</a>
			</div>
			@endif
			@if(page="merchandise/index.php")
			/ <div class="item">
				<a href="/merchandise">@content(merchandise)</a>
			</div>
			@endif
			@if(page="jobs.php")
			/ <div class="item">
				<a href="/jobs">@content(jobs)</a>
			</div>
			@endif
			@if(page="donations.php")
			/ <div class="item">
				<a href="/donations">@content(donations)</a>
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
