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
		
		<script src="carousel.js?v=@version"></script>
	</head>
	
	<body>
		<a name="topofpage"></a>
	
		<div class="header">
			<img class="logo" alt="a softer space logo" src="pics/logo.png" />
			
			<div class="headerbar">
				<div class="item">
					<a href="#aboutus">What We Do</a>
				</div>
				<div class="item">
					<a href="#ourteam">Our Team</a>
				</div>
				<div class="item">
					<a href="#contact">Contact</a>
				</div>
				<div class="item">
					<a href="#experience">Experience</a>
				</div>
			</div>
		</div>

		<div class="contentarea">
			<a name="aboutus"></a>
			
			<h3>What We Do</h3>
			
			<div class="content">
				Our goal in creating A Softer Space is to enable exciting and wonderful science to happen - especially in the space sector (Mars, we are coming!), but in any other field as well.<br>
				To do that, we intend to write the best software we can, in whatever language or environment might be best in your particular case.
			</div>
			
			<div class="content">
				After gathering experience in “the real world,” we noticed that grand scientific endeavours currently are facing many silly problems.
				<ul>
					<li>
						Many companies right now overpromise, then cannot deliver on time, and many big projects are suffering for it
					</li>
					<li>
						Contracts are interpreted in the narrowest possible sense, such that companies get away with working as little as possible, meaning that contracts nowadays need to be more and more detailed, and a whole bunch of everyone's time is wasted just explicitly writing out what should be clear in the first place - or what could be determined through some informal communication in a couple of minutes
					</li>
					<li>
						Scientists at universities struggle as students produce wonderful programs that can do amazing things - but then leave, and never manage to fully complete their projects, or to maintain them to ensure they are still working a year down the road
					</li>
				</ul>
				Our answer is A <b>Softer</b> Space - we are upfront, do not overpromise, and are flexible in adapting even when your needs change, or when your ideas become clearer and more refined throughout the project.
			</div>
				
			<div class="content">
				Have fun exploring our site and do not hesitate to get in contact,<br>
				Moya
			</div>
		</div>
			
		<div class="contentarea">
			<a name="ourteam"></a>
			
			<h3>Our Team</h3>
			
			<div class="content">
				<div class="person">
					<div class="name">
						Tom Moya Schiller
					</div>
					<div class="picbiocontainer">
						<img class="pic" alt="picture of moya" src="pics/moya_2.jpg" />
						<div class="bio">
							As a Young Graduate Trainee at ESA's European Space Operations Centre in Germany, Moya is working with and creating EGS-CC based software.<br>
							Interested in various fields, Moya previously worked as front- and backend developer for an aviation startup in Reykjavík and a horse racing track in Berlin.<br>
							He graduated from the University of Iceland with a Master's degree in Computer Sciences after studying Mathematics and Physics, having written a thesis in Bioinformatics.
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="contentarea">
			<a name="contact"></a>
			
			<h3>Contact</h3>
		
			<div class="content">
				Interested?<br>
				Seen something you like?<br>
				Just send me an email!<br><br>
				moya{{-- TODO :: @asofterspace.com! --}}ccercchi@hotmail.de
			</div>
		</div>

		<div class="contentarea">
			<a name="experience"></a>
			
			<h3>Experience</h3>
		
			<div class="content carouselcontainer">
				<div class="carousel" id="expcarousel">
					{{-- first round --}}
					<a href="http://www.egscc.esa.int/"><img alt="EGS-CC logo" src="pics/exp_egscc.png" style="height: 50px; width: 278px;" /></a>
					<a href="https://nasa.github.io/openmct/"><img alt="OpenMCT logo" src="pics/exp_openmct.png" style="height: 50px; width: 241px;" /></a>
					{{-- second round --}}
					<a href="http://www.egscc.esa.int/"><img id="expcarouselFirstImgSecondRound" alt="EGS-CC logo" src="pics/exp_egscc.png" style="height: 50px; width: 278px;" /></a>
					<a href="https://nasa.github.io/openmct/"><img alt="OpenMCT logo" src="pics/exp_openmct.png" style="height: 50px; width: 241px;" /></a>
				</div>
			</div>
		</div>

		<div class="footerplaceholder">
		</div>
		
		<div class="footer">
			<div class="aligncontainer">
				<div class="label">
					A Softer Space, 2017
				</div>
				<div class="label right">
					<a href="#topofpage">Back to Top</a>
				</div>
			</div>
		</div>
		
	</body>
	
</html>