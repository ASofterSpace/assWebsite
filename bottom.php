
		{{-- closing the maincontainer that was opened in top
		(which aligns EVERYTHING in the middle if the screen is VERY wide -
		think desktop with two screens) --}}
		</div>

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
			<div class="footertext">
				<div class="label above700 footertextblock">
					Tom Moya Schiller<br>
					Heerstraße 3 b<br>
					D-60488 Frankfurt
				</div>
				<div class="label center above700 footertextblock">
					A Softer Space DE, Inhaber Tom Moya Schiller<br>
					VAT Nr: DE319451065<br>
					<!-- A Softer Space UK Ltd<br> -->
					2018 - 2019
				</div>
				<div class="label below700 footertextblock">
					A Softer Space DE, Inhaber Tom Moya Schiller<br>
					Heerstraße 3 b<br>
					D-60488 Frankfurt
				</div>
				<div class="label center below700 footertextblock">
					<br>
					VAT Nr:<br>
					DE319451065<br>
				</div>
			</div>
			<div class="footergray" style="height:82px">
				&nbsp;
			</div>
			<img class="pix footerpix" alt="pixelated design element" src="/pics/pixels_footer.png" />
			<a href="#topofpage" class="footeratop"><img class="backtotop" alt="back to top navigator" src="/pics/backtotop_light.png" /></a>
		</footer>

		{{-- scripts that are happier if the whole page already exists when they get loaded --}}
		<script src="pix.js?v=@version"></script>

	</body>

</html>