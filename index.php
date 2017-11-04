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
			<img class="logo" alt="a softer space logo" src="pics/logo.png" />
			
			<div class="headerbar">
				<div class="item" id="whatwedoitem">
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
		</header>
	
		<section>
			<a name="aboutus"></a>
			
			<h1>What We Do</h1>
			
			<div class="content">
				Hey there,<br>
				We are A Softer Space - a startup focused on creating software for space research (Mars, we see you!) and
				scientific research in general with enthusiasm and flexibility rather than bureaucracy and legalese.<br>
				Have fun exploring our site and do not hesitate to get in contact!<br>
				Moya
			</div>
			
			<div onclick="expand.toggle(1)" id="expand1" class="expandable">
				<h2>Hippies Into Space!</h2>
				
				<div class="content">
					Hippies! Queers! Vegans! Punks! Feminists! Nerds! Kinksters! Refugees!<br>
					Everyone is welcome here - we want to do fun space and science things together,
					and everyone can participate. You don't even have to wear a suit!
					(However, if you really happen to like suits, then yay for you; of course you may. ^^)<br>
					A lot of our fun is (and will be)
					<a href="https://github.com/ASofterSpace/" target="_blank">freely available online</a>,
					so you can just participate there if you feel like it.
					Of course, if you want to spend any serious amount of time working
					with our toys, then you can also just apply to work with us - just send us a message
					(preferably not much before summer 2018, as that is when we will officially start existing.)
				</div>
			</div>
			
			<div class="expander" onclick="expand.toggle(1)" id="expandlabel1">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>

			<div onclick="expand.toggle(2)" id="expand2" class="expandable">
				<h2>Why Space?</h2>
				
				<div class="content">
					We love space!<br>
					Look at some slick Soviet-designed space vehicles with their
					<a href="https://en.wikipedia.org/wiki/Soyuz_(spacecraft)" target="_blank">round bits and bobs</a>
					like <a href="https://nssdc.gsfc.nasa.gov/nmc/spacecraftDisplay.do?id=1981-106D" target="_blank">wonky insects
					with onions as their heads</a>,
					or look at SpaceX <a href="https://www.youtube.com/watch?v=lEr9cPpuAx8" target="_blank">landing rockets on drone ships</a>
					named after spacecraft from the
					<a href="https://en.wikipedia.org/wiki/Culture_series" target="_blank">Culture series</a>,
					or at <a href="https://en.wikipedia.org/wiki/Huygens_(spacecraft)">Huygens landing on Titan</a>
					and sending back a supercool
					<a href="https://en.wikipedia.org/wiki/Huygens_(spacecraft)#/media/File:Huygens_surface_color.jpg" target="_blank">hipster sepia photo</a>...<br>
					Everything to do with space is awesome, cool - and yet incredibly difficult.
					But doing the impossible makes us mighty. 
					Only when struggling against the greatest odds can we as humans truly shine the brightest, 
					come up with wonderful innovations, and make giant leaps ahead.
					And so we choose to do these things
					<a href="https://en.wikipedia.org/wiki/We_choose_to_go_to_the_Moon" target="_blank">not because they are easy, but because they are hard</a>.
				</div>
			</div>
				
			<div class="expander" onclick="expand.toggle(2)" id="expandlabel2">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>

			<div onclick="expand.toggle(3)" id="expand3" class="expandable">
				<h2>But what about the people on Earth?</h2>
				
				<div class="content">
					<i>Shouldn't you spend, like, all your efforts on directly decreasing problems here on Earth,
					as long as there are still people living in poverty, and wars going on, and diseases spreading around, and...?</i>
				</div>
					
				<div class="content">
					Yes, there are many problems that need to be addressed here on Earth.<br>
					However, focusing on space and science in general already allows us to have a positive impact,
					as pretty much all space technology in some way or another improves the lives of real people at home.
					We have the Sentinel satellites watching over us, helping respond to natural disasters more quickly
					and efficiently; we have the GPS satellite network enabling people to now get lost while staring at
					their smartphones rather than getting lost while staring at paper maps; we have solar panels on
					roofs, creating clean energy based on inventions originally made with space in mind; the list is endless.<br>
					Of course, not every problem will be miraculously fixed by science - but if we are only looking at ourselves
					and trying to improve ourselves, we will never get “out there.”
					There will always be some inequality to fix somewhere, some problem to overcome at home,
					some reason to keep us from adventuring out to the stars.<br>
					It seems that a balance needs to be found - a balance between boldly going forward and still
					focusing efforts on improving the conditions for all humans on this, our home planet.
					Trying to somewhat achieve this balance, we therefore are taking the
					<a href="https://www.givingwhatwecan.org/" target="_blank">Giving What We Can</a> pledge,
					and are encouraging everyone else to do it too. We, as a company, will now and forever donate
					at least 10 percent of our net profit (say, yearly) to causes that have proven the most impactful in actually
					helping people out.
				</div>
			</div>
				
			<div class="expander" onclick="expand.toggle(3)" id="expandlabel3">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>

			<div onclick="expand.toggle(4)" id="expand4" class="expandable">
				<h2>Science and Universities</h2>
				
				<div class="content">
					We love science too!<br>
					As focusing on space alone would be very narrow and ultimately might be a bit boring,
					we also want to outreach to the wider scientific community and offer assistance with
					anything that is weird, new, interesting, groundbreaking, or in any other way,
					shape or form: fun.<br>
					We especially think that we can help with one particular problem that scientists at
					universities face all over the place:
					Students produce wonderful programs that can do amazing things, e.g. during their thesis - but then they leave,
					sometimes not managing to fully complete their projects,
					or to maintain them to ensure they are still working a year down the road.
					This leaves researchers with a whole variety of half-cooked tools that all
					kind-of-somehow-a-little-bit-but-not-really-work.
					We want to work together with you on such products and ensure that they do
					what is required of them, not just now, but also in the long run.<br>
					The same applies to scientists anywhere - if you are in the field and need a specific
					software tool to do xyz for you, and the tool does not yet exist: let us know, we can make it!
					If you work for a company and do research for them, but you are missing a particular program
					that would make your day in the lab so much more efficient - poke your manager until
					they hire us to make it for you! ;)<br>
					Knowing that money is very limited when doing scientific
					research, we are open to any and all proposals for how a meaningful exchange could
					still come to fruition - think outside the box; we really want to help you
					(but also feed our developers.)
				</div>
			</div>
				
			<div class="expander" onclick="expand.toggle(4)" id="expandlabel4">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>

			<div onclick="expand.toggle(5)" id="expand5" class="expandable">
				<h2>Open Everything</h2>
				
				<div class="content">
					We love FOSS
					(<a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" target="_blank">free and open source software</a>),
					and we believe in freely available information in general.<br>
					You will not find us hiding any breakthroughs behind a paywall; instead, we love open access to both scientific
					data and software, and we love the idea of the <a href="http://unlicense.org/" target="_blank">Unlicense</a>,
					which allows software to be used in literally whatever way you want.
					We are trying to make as much of our software available under this license, however as we do intend
					to work together with other companies which may not fully share our worldview,
					we cannot at this moment promise that we will always use the unlicense for everything we produce.
				</div>
			</div>
				
			<div class="expander" onclick="expand.toggle(5)" id="expandlabel5">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>

			<div onclick="expand.toggle(6)" id="expand6" class="expandable">
				<h2>Military</h2>
				
				<div class="content">
					We said before that everyone is welcome with us - however, there is one sector
					we gladly choose to not work with: The miliary.<br>
					A lot of aerospace companies take that sweet sweet military money, but we will not partake in it - no offense,
					no fucking “defense” either that in practice seems to mean the same thing most of the time.<br>
					The only thing our software might ever defend you from are natural disasters, and possibly zombies; never
					other humans. Those you will just have to talk to, sorry.
					We are with
					<a href="http://slatestarcodex.com/2014/07/30/meditations-on-moloch/" target="_blank">Elua, not with Moloch</a>.<br>
					If you want us to make software for weapons, well tough luck!
					We believe weapons always fucking kill people and are <strong>always</strong> bad.
					We are certain you will find enough people gladly working for you, but <strong>NOT US</strong>.<br>
					<strong>NOT NOW.</strong><br>
					<strong>NOT EVER.</strong><br>
					We are the good ones. Or at least we try as hard as we fucking can.<br>
					Srsly.
				</div>
			</div>
			
			<div class="expander" onclick="expand.toggle(6)" id="expandlabel6">[expand this]</div><div class="expander" onclick="expand.expandAll()">[expand all]</div>
		</section>
			
		<section>
			<a name="ourteam"></a>
			
			<h1>Our Team</h1>
			
			<div class="content">
				<div class="person">
					<div class="name">
						Tom Moya Schiller
					</div>
					<div class="picbiocontainer">
						<img class="pic" alt="Picture of Moya" src="pics/moya_2.jpg" />
						<div class="bio">
							As a Young Graduate Trainee at ESA's European Space Operations Centre in Germany, Moya is working with and creating EGS-CC based software.<br>
							Interested in various fields, Moya previously worked as front- and backend developer for an aviation startup in Reykjavík and a horse racing track in Berlin.<br>
							He graduated from the University of Iceland with a Master's degree in Computer Sciences after studying Mathematics and Physics, having written a thesis in Bioinformatics.
						</div>
					</div>
				</div>
				
				<div class="person">
					<div class="name">
						Rosemary Anne Milton
					</div>
					<div class="picbiocontainer">
						<img class="pic" alt="Picture of Rosemary" src="pics/rosemary_1.jpg" />
						<div class="bio">
							Ms. Milton attained a BSc. Psychology from The University of Manchester, which is an elite Russell Group university and ranked 7th in the United Kingdom.<br>
							With a focus on research and practical knowledge gained by being an Assistant Manager she is the human management aspect of this startup.
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<a name="contact"></a>
			
			<h1>Contact</h1>
		
			<div class="content">
				Interested?<br>
				Seen something you like?<br>
				Just send me an email!
			</div>

			<div class="content">
				<a href="mailto:moya{{-- TODO :: @asofterspace.com! --}}ccercchi@hotmail.de">moya{{-- TODO :: @asofterspace.com! --}}ccercchi@hotmail.de</a>
			</div>
		</section>

		<section>
			<a name="experience"></a>
			
			<h1>Experience</h1>
		
			<div class="content carouselcontainer">
				<div class="carousel" id="expcarousel">
					{{-- first round --}}
					<a href="http://www.egscc.esa.int/" target="_blank"><img alt="EGS-CC logo" src="pics/exp_egscc.png" style="height: 50px; width: 278px;" /></a>
					<a href="http://skyhook.is/" target="_blank"><img alt="Skyhook logo" src="pics/exp_skyhook.png" style="height: 55px; width: 246px;" /></a>
					<a href="https://nasa.github.io/openmct/" target="_blank"><img alt="OpenMCT logo" src="pics/exp_openmct.png" style="height: 50px; width: 241px;" /></a>
					<a href="http://www.bluebirdcargo.com/" target="_blank"><img alt="Bluebird Cargo logo" src="pics/exp_bluebird.png" style="height: 55px; width: 196px;" /></a>
					<a href="http://tomschiller.de/reference_graphs/" target="_blank"><img alt="Graph Merging Library logo" src="pics/exp_gml.png" style="height: 50px; width: 121px;" /></a>
					{{-- second round --}}
					<a href="http://www.egscc.esa.int/" target="_blank"><img id="expcarouselFirstImgSecondRound" alt="EGS-CC logo" src="pics/exp_egscc.png" style="height: 50px; width: 278px;" /></a>
					<a href="http://skyhook.is/" target="_blank"><img alt="Skyhook logo" src="pics/exp_skyhook.png" style="height: 55px; width: 246px;" /></a>
					<a href="https://nasa.github.io/openmct/" target="_blank"><img alt="OpenMCT logo" src="pics/exp_openmct.png" style="height: 50px; width: 241px;" /></a>
					<a href="http://www.bluebirdcargo.com/" target="_blank"><img alt="Bluebird Cargo logo" src="pics/exp_bluebird.png" style="height: 55px; width: 196px;" /></a>
					<a href="http://tomschiller.de/reference_graphs/" target="_blank"><img alt="Graph Merging Library logo" src="pics/exp_gml.png" style="height: 50px; width: 121px;" /></a>
				</div>
			</div>
		</section>

		<div class="footerplaceholder">
			{{--
			this element is sized using CSS based on media queries, and the
			size is then read out in toggleandcarousel.js to find out what
			the default size in pixels for an expandable div should be
			this element is not used for anything else and should be pretty
			much invisible to the user =)
			--}}
			<div class="expandable" id="expandable_size_indicator">
			</div>
		</div>
		
		<footer>
			<div class="aligncontainer">
				<div class="label">
					Tom Moya Schiller<br>
					Heerstraße 3 b<br>
					D-60488 Frankfurt
				</div>
				<div class="label center">
					A Softer Space, 2017<br>
				</div>
				<div class="label right">
					<a href="#topofpage"><img class="backtotop" alt="Back to Top" src="pics/backtotop_light.png" /></a>
				</div>
			</div>
		</footer>
		
	</body>
	
</html>