<!DOCTYPE html>
<html lang="@content(lang)">

	<head>
		<meta charset="utf-8">

		<title>Boundless - Tentacles Below!</title>

		{{-- SEO keywords (not terribly important though) --}}
		<meta name="keywords" content="Boundless, Comic, Pirates, Polyamory">

		{{-- description should be 150 characters long; not more than 160! --}}
		<meta name="description" content="“Boundless - Tentacles Below!” is the name of an adventure-filled comicbook full of polyamorous pirates. Tentaclive release date: summer 2025.">

		{{-- PayPal: View Cart --}}
		<script src="https://www.paypalobjects.com/ncp/cart/cart.js" data-merchant-id="6G76JW4BAJKJ2"></script>

		<style>
			body {
				padding: 5pt 20% 5pt 20%;
				background: linear-gradient(165deg, #553774, #66325F, #553774, #19BCBA);
				color: #E5BF7A;
			}

			input {
				background: #553774;
				border: 1px solid #22AAAA;
				border-radius: 4px;
				color: #E5BF7A;
			}

			a, a:link, a:hover, a:active, a:visited {
				color: #E5BF7A;
				text-decoration: underline;
			}
			a:hover {
				color: #FFFFCC;
				text-decoration: underline;
			}

			img.divider {
				width: 100%;
			}

			img.previewpage {
				width: 25%;
				margin-top: 16pt;
				margin-bottom: 16pt;
				margin-left: 37.5%;
				transition: transform .7s ease-in-out;
			}
			img.previewpage.slightturnright {
				transform: rotate(5deg);
			}
			img.previewpage.slightturnright:hover {
				transform: rotate(-5deg);
			}
			img.previewpage.slightturnleft{
				transform: rotate(-5deg);
			}
			img.previewpage.slightturnleft:hover {
				transform: rotate(5deg);
			}

			img.previewpage.leftoftwo {
				margin-left: 15%;
			}
			img.previewpage.rightoftwo {
				margin-right: 15%;
				margin-left: 0;
				float: right;
			}

			img.previewpage.middleofthreestack {
				position: relative;
				z-index: 16;
			}
			img.previewpage.leftofthreestack {
				position: absolute;
				z-index: 32;
			}
			img.previewpage.rightofthreestack {
				position: absolute;
				z-index: 64;
			}

			div.container {
				position: relative;
			}

			form > div {
				padding-bottom: 3pt;
			}

			a.bigpage {
				display: inline-block;
				width: 30%;
				text-align: center;
			}

			img.bigpage {
				width: 100%;
			}

			paypal-cart-button {
				float: right;
			}
		</style>
	</head>
	<body>
		{{-- PayPal View Cart --}}
		<paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>
		<script>
			cartPaypal.Cart({ id: "pp-view-cart" })
		</script>

		<h1>Boundless - Tentacles Below!</h1>
		<p>“Boundless - Tentacles Below!” is the name of an adventure-filled comicbook full of polyamorous pirates.</p>

		<div>
			<img class="previewpage rightoftwo slightturnleft" src="../pics/boundless/page03.jpg" />
			<img class="previewpage leftoftwo slightturnright" src="../pics/boundless/cover.jpg" />
		</div>

		<h2>Sneak Preview</h2>
		<p>Curious about pirate-y adventures? Here is a little peek; click on the pages to maximize:</p>
		<div>
			<a class="bigpage" href="../pics/boundless/page01m.jpg">
				<img class="bigpage" src="../pics/boundless/page01m.jpg" />
				Page 01
			</a>
			<a class="bigpage" href="../pics/boundless/page02m.jpg">
				<img class="bigpage" src="../pics/boundless/page02m.jpg" />
				Page 02
			</a>
			<a class="bigpage" href="../pics/boundless/page07m.jpg">
				<img class="bigpage" src="../pics/boundless/page07m.jpg" />
				Page 07
			</a>
		</div>

		<h2>Finally - Boundless is Out!</h2>
		<p>Hot off the printing press: the first batch of Boundless comics is ready to be shipped!</p>
		<p>Would you like to receive a copy? How about a special tshirt to commemorate the occasion?</p>

		{{-- paypal button: just the comic --}}
		<paypal-add-to-cart-button data-id="SM8BBTEPTQP3E"></paypal-add-to-cart-button>
		<script>
			cartPaypal.AddToCart({ id: "SM8BBTEPTQP3E" })
		</script>

		<div>
			<img class="previewpage rightoftwo slightturnleft" src="../pics/boundless/page07.jpg" />
			<img class="previewpage leftoftwo slightturnright" src="../pics/boundless/page06.jpg" />
		</div>

		{{-- paypal button: comic + tshirt bundle --}}
		<paypal-add-to-cart-button data-id="GPPE2NBBSWJFJ"></paypal-add-to-cart-button>
		<script>
			cartPaypal.AddToCart({ id: "GPPE2NBBSWJFJ" })
		</script>

		<div class="container">
			<img class="previewpage leftofthreestack slightturnleft" src="../pics/boundless/cover.jpg" />
			<img class="previewpage rightofthreestack slightturnright" src="../pics/boundless/cover.jpg" />
			<img class="previewpage middleofthreestack" src="../pics/boundless/cover.jpg" />
		</div>

		{{-- paypal button: 3 comics --}}
		<paypal-add-to-cart-button data-id="XUGN2YVMLG59W"></paypal-add-to-cart-button>
		<script>
			cartPaypal.AddToCart({ id: "XUGN2YVMLG59W" })
		</script>

		<div>
			<img class="previewpage slightturnright" src="../pics/boundless/page27.jpg" />
		</div>

		<h2>Newsletter</h2>
		<p>If you would like to receive occasional information about Boundless - Tentacles Below! in the future, please enter your email address below:</p>
		<form action="https://asofterspace.com/boundless/signup" method="post">
			<div>
				<label for="email">Your email address:</label><br>
				<input type="text" id="email" name="email" required />
			</div>
			<div>
				<label for="amount">If you would like to preorder the comic, please enter how many copies you would like to preorder:</label><br>
				<input type="number" id="amount" name="amount" value="0" />
			</div>
			<div style="display: none;">
				<input type="hidden" id="language" name="language" value="en" />
			</div>
			<div>
				<input type="submit" value="Subscribe!" />
			</div>
		</form>
		<p>Your Boundless team</p>
		<p>&nbsp;</p>
		<p>(You can reach out to us via <a target="_blank" href="mailto:boundless@asofterspace.com">boundless@asofterspace.com</a> - we are looking forward to your emails!)</p>

		<img class="divider" src="../pics/boundless/divider.png" />
	</body>
</html>
