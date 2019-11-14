@include(top.php)

@include(sectionstart.php)
	<h1>@content(tools)</h1>

	<div class="content">
		@content(tools_intro)
	</div>
@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/dependencyFieldGuide">@content(tools_dependency_field_guide_headline)</a></h2>

	@include(tools_dependency_field_guide_1.php)

	<div class="content">
		@include(tools_dependency_field_guide_2.php)
	</div>

@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/universalConverter">@content(tools_universal_converter_headline)</a></h2>

	@include(tools_universal_converter.php)

@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/packetDecoder">@content(tools_packet_decoder_headline)</a></h2>

	@include(tools_packet_decoder.php)

@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/textAnalyzer">@content(tools_text_analyzer_headline)</a></h2>

	@include(tools_text_analyzer.php)

@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/jsonFormatter">@content(tools_json_formatter_headline)</a></h2>

	@include(tools_json_formatter.php)

@include(sectionend.php)


@include(sectionstart.php)
	<h2><a href="/tools/deckBuildingCalculator">@content(tools_deck_building_calculator_headline)</a></h2>

	@include(tools_deck_building_calculator.php)

@include(sectionend.php)


@include(bottom.php)
