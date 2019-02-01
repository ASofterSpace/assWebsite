@include(top.php)

@include(sectionstart.php)
	<h1>@content(products)</h1>

	<div class="content">
		@content(products_intro)
	</div>
@include(sectionend.php)

<a id="cdm"></a>
@include(sectionstart.php)
	<h2>CDM Commandline Tool</h2>

	@include(cdm_overview.php)

@include(sectionend.php)

<a id="xdcreportcreator"></a>
@include(sectionstart.php)
	<h2>XDC Report Creator</h2>

	@include(xdc_overview.php)
	
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

@include(bottom.php)