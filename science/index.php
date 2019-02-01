@include(top.php)

@include(sectionstart.php)
	<h1>@content(research)</h1>

	<div class="content">
		@content(science_intro)
	</div>
@include(sectionend.php)

<a id="ekse"></a>
@include(sectionstart.php)
	<h2>@content(ekse_headline)</h2>

	<div class="content">
			<a href="/science/papers/ekse.pdf" class="paperpreview">
				<img src="/science/papers/ekse_cover.png" />
			</a>
			<div class="papertable">
				<table>
					<tbody>
						<tr>
							<td style="min-width: 6.5em;">@content(resource_kind):</td>
							<td>@content(conference_paper)</td>
						</tr>
						<tr>
							<td>@content(file_type):</td>
							<td><a class="plain" href="/science/papers/ekse.pdf" target="_blank">PDF</a></td>
						</tr>
						<tr>
							<td>@content(pages):</td>
							<td>15</td>
						</tr>
						<tr>
							<td>@content(size):</td>
							<td>A4</td>
						</tr>
						<tr>
							<td>@content(author):</td>
							<td><a class="plain" href="mailto:moya@asofterspace.com">Tom Moya Schiller</a></td>
						</tr>
						<tr>
							<td>@content(status):</td>
							<td>@content(ekse_status)</td>
							{{-- <td>This is a preview of unpublished work.</td> --}}
						</tr>
						<tr>
							<td>DOI:</td>
							<td><a href="https://doi.org/10.2514/6.2018-2336" target="_blank">10.2514/6.2018-2336</a></td>
						</tr>
						<tr>
							<td style="vertical-align: bottom;">@content(last_updated):</td>
							<td>@content(ekse_update_date)</td>
						</tr>
					</tbody>
				</table>
			</div>
	</div>
@include(sectionend.php)

@include(bottom.php)