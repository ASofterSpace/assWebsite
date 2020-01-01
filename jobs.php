@include(top.php)

@include(sectionstart.php)
	<h1>@content(jobs)</h1>

	<div class="content">
		@content(jobs_intro)
	</div>

	<div class="content">
		@content(jobs_searching)
	</div>

	<div class="content">
		@content(jobs_call_to_action)
	</div>
@include(sectionend.php)

@include(bottom.php)
