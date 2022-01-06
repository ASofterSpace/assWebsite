
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
			<canvas id="cvFooter"></canvas>
			<div class="footertext">
				<div class="label above700 footertextblock">
					Tom Moya Schau<br>
					Landwehr 8<br>
					D-63450 Hanau
				</div>
				<div class="label center above700 footertextblock">
					A Softer Space DE, Inhaber Tom Moya Schau<br>
					VAT Nr: DE319451065<br>
					{{-- A Softer Space UK Ltd<br> --}}
					2018 - 2022
				</div>
				<div class="label below700 footertextblock">
					A Softer Space DE<span class="above400">, Inhaber Tom Moya Schau</span><br>
					Landwehr 8<br>
					D-63450 Hanau
				</div>
				<div class="label center below700 above400 footertextblock">
					<br>
					@content(vat_nr):<br>
					DE319451065<br>
				</div>
			</div>
			<a href="#topofpage" class="footeratop"><img class="backtotop" alt="back to top navigator" src="/pics/backtotop_light.png" /></a>
		</footer>

		{{-- scripts that are happier if the whole page already exists when they get loaded --}}
		<script src="/pix.js?v=@version"></script>

	</body>

</html>
