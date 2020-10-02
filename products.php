@include(top.php)

@include(sectionstart.php)
	<h1>@content(products)</h1>

	<div class="content">
		@content(products_intro)
	</div>
@include(sectionend.php)

<a id="assMusician"></a>
@include(sectionstart.php)
	<h2>A Softer Space Musician</h2>

	<div class="content">
		@content(products_assMusician_intro_1)
	</div>
	<div class="content centerimg">
		<a href="https://www.youtube.com/channel/UC3FXZ7fjLp_V-bGILOo_nKg/" target="_blank">
			<img src="/pics/products/more_drums_1.png" />
		</a>
	</div>

	<div class="content">
		@content(tryit): <a href="https://www.youtube.com/channel/UC3FXZ7fjLp_V-bGILOo_nKg/" target="_blank">YouTube</a>
	</div>

	<div class="content">
		@content(sourcecode): @content(openly_available_on) <a href="https://github.com/ASofterSpace/assMusician" target="_blank">GitHub</a>
	</div>

@include(sectionend.php)

<a id="cdm"></a>
@include(sectionstart.php)
	<h2><a href="/cdm">CDM Commandline Tool</a></h2>

	@include(cdm_overview.php)

@include(sectionend.php)

<a id="assWorkbench"></a>
@include(sectionstart.php)
	<h2>A Softer Space Workbench</h2>

	<div class="content">
		@content(products_assWorkbench_intro_1)
	</div>

	<div class="content centerimg">
		<img src="/pics/products/assWorkbench_3.png" />
	</div>

	<div class="content">
		@content(sourcecode): @content(openly_available_on) <a href="https://github.com/ASofterSpace/assWorkbench" target="_blank">GitHub</a>
	</div>
@include(sectionend.php)

<a id="ekse"></a>
@include(sectionstart.php)
	<h2>EKSE</h2>

	<div class="content">
		@content(products_ekse_intro_1)
	</div>

	<div class="content centerimg">
		<img src="/pics/products/ekse.png" />
	</div>

	<div class="content">
		@content(products_ekse_intro_2)
	</div>

	<div class="content">
		@content(sourcecode): @content(products_ekse_source_code)
	</div>
@include(sectionend.php)

<a id="ledsolutions"></a>
@include(sectionstart.php)
	<h2>@content(products_led_solutions_headline)</h2>

	<div class="content">
		@content(products_led_solutions_intro)
	</div>

	<div class="content">
		@content(products_led_solutions_preview)
	</div>

	<div class="content">
		<div style="position:relative;padding-top:56.25%;">
			<iframe src="https://www.youtube-nocookie.com/embed/vtidsgbGFhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></iframe>
		</div>
	</div>
@include(sectionend.php)

<a id="pdfqrreader"></a>
@include(sectionstart.php)
	<h2><a href="/pdfQrReader">PDF QR Reader</a></h2>

	@include(pdf_qr_reader_overview.php)

@include(sectionend.php)

<a id="xdcreportcreator"></a>
@include(sectionstart.php)
	<h2><a href="/xdc">XDC Report Creator</a></h2>

	@include(xdc_overview.php)

@include(sectionend.php)

<a id="universalconverter"></a>
@include(sectionstart.php)
	<h2>UniversalConverter</h2>

	<div class="content">
		@content(products_universalconverter_intro)
	</div>

	<div class="content centerimg">
		<img src="/pics/products/universalconverter_feature_graphic.png" />
	</div>

	<div class="content">
		@content(privacy_policy): <a href="privacy/universalconverter.php">@content(policy_document)</a>
	</div>

	<div class="content">
		@content(sourcecode): @content(openly_available_on) <a href="https://github.com/ASofterSpace/UniversalConverter" target="_blank">GitHub</a>
	</div>
@include(sectionend.php)

<a id="assEditor"></a>
@include(sectionstart.php)
	<h2>A Softer Space Editor</h2>

	<div class="content">
		@content(products_assEditor_intro_1)
	</div>
	<div class="content centerimg">
		<img src="/pics/products/assEditor_2.png" />
	</div>

	<div class="content">
		@content(sourcecode): @content(openly_available_on) <a href="https://github.com/ASofterSpace/assEditor" target="_blank">GitHub</a>
	</div>
@include(sectionend.php)

@include(bottom.php)
