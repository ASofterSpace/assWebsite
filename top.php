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

		<script src="toggleandcarousel.js?v=@version"></script>
	</head>

	<body>
		<a name="topofpage"></a>

		<header>
			<a href="/">
				<img class="logo" alt="a softer space logo" src="pics/logo.png" />
			</a>

			<div class="headerbar">
				<div class="item" id="whatwedoitem">
					<a href="index.php#aboutus">What We Do</a>
				</div>
				<div class="item">
					<a href="team.php">Our Team</a>
				</div>
				<div class="item">
					<a href="index.php#contact">Contact</a>
				</div>
				<div class="item">
					<a href="index.php#experience">Experience</a>
				</div>
			</div>
		</header>
