@include(top.php)

@include(sectionstart.php)
	<h1>@content(merchandise)</h1>

	<div class="content">
		@content(merch_intro)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h1>@content(merch_presentations_headline)</h1>

	<div class="content">
		@content(merch_presentations_intro)
	</div>

	<a class="resource_preview" href="@content(merch_presentations_pptx_just_href)">
		<img src="/merchandise/ass_presentation_preview.png"></img>
		<div class="resource_preview_fadeout"></div>
	</a>

	<div class="content">
		@content(merch_presentations_pptx)
	</div>

	<div class="content">
		@content(merch_presentations_odp)
	</div>

	<div class="content">
		@content(merch_presentations_pdf)
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h1>@content(flyer_gallery)</h1>

	<div class="content">
		@content(merchandise_flyer_gallery_intro)
	</div>

	<div class="content">
		<a href="#flyer_vr">@content(merchandise_flyer_gallery_headline_ass_vr)</a>
	</div>

	<div class="content">
		<a href="#flyer_process">@content(merchandise_flyer_gallery_headline_ass_process)</a>
	</div>

	<div class="content">
		<a href="#flyer_software">@content(merchandise_flyer_gallery_headline_ass_software)</a>
	</div>

	<div class="content">
		<a href="#flyer_mars">@content(merchandise_flyer_gallery_headline_ass_mars)</a>
	</div>
@include(sectionend.php)

@include(sectionstart.php)
	<h1>@content(poster_gallery)</h1>

	<div class="content">
		@content(merchandise_poster_gallery_intro)
	</div>

	<div class="content">
		<a href="#poster_flipper_qnd">@content(merchandise_poster_gallery_headline_vrcade_flipperqnd)</a>
	</div>
@include(sectionend.php)

<a id="flyer_vr"></a>
@include(sectionstart.php)
	<h2>@content(merchandise_flyer_gallery_headline_ass_vr)</h2>

	<div class="content centerimg">
		<img src="/pics/flyer_vr_@content(lang).png" />
	</div>
@include(sectionend.php)

<a id="flyer_process"></a>
@include(sectionstart.php)
	<h2>@content(merchandise_flyer_gallery_headline_ass_process)</h2>

	<div class="content centerimg">
		<img src="/pics/flyer_process_@content(lang).png" />
	</div>
@include(sectionend.php)

<a id="flyer_software"></a>
@include(sectionstart.php)
	<h2>@content(merchandise_flyer_gallery_headline_ass_software)</h2>

	<div class="content centerimg">
		<img src="/pics/flyer_software_@content(lang).png" />
	</div>
@include(sectionend.php)

<a id="flyer_mars"></a>
@include(sectionstart.php)
	<h2>@content(merchandise_flyer_gallery_headline_ass_mars)</h2>

	<div class="content centerimg">
		<img src="/pics/flyer_mars_@content(lang).png" />
	</div>
@include(sectionend.php)

<a id="poster_flipper_qnd"></a>
@include(sectionstart.php)
	<h2>@content(merchandise_poster_gallery_headline_vrcade_flipperqnd)</h2>

	<div class="content">
		@content(merchandise_poster_gallery_intro_vrcade_flipperqnd)
	</div>

	<div class="content centerimg">
		<img src="/pics/poster_flipper_qnd.png" />
	</div>
@include(sectionend.php)

@include(bottom.php)
