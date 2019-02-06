@include(top.php)

@include(sectionstart.php)
	<h1>@content(tools)</h1>

	<div class="content">
		@content(tools_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(tools_binary_decoder_headline)</h2>

	<div class="content">
		@content(tools_binary_decoder_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h2>@content(tools_packet_decoder_headline)</h2>

	<div class="content">
		@content(tools_packet_decoder_intro)
	</div>
@include(sectionend.php)

@include(bottom.php)