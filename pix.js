
// size of one blocky pixel
var px = 8;
var dppx = 1;

// there might be browsers that do not have this... in that case, better get
// the block size wrong than completely explode
if (window.devicePixelRatio) {
	// however, not QUITE so large, e.g. 8 for dppx 1, and 10 for dppx 1.5, and 12 for dppx 2...
	// instead of the more straightforward 8 for dppx 1, 12 for dppx 1.5, 16 for dppx 2
	px *= 1 + 0.5*(window.devicePixelRatio - 1);
	dppx = window.devicePixelRatio;
}

// is this the first time we are displaying stuff?
// (if yes, we also adjust the opacities... if no, then we leave them as they are)
var firstdisplay = true;



// BODY RESIZING TO FILL FULL SCREEN

function resizeBody() {

	/**
	soooo basically...
	we have html and we have body; in the end, we want body to fill the full screen
	(in case the content is less than the full screen), and we want body to expand
	according to the content (if the content is more than the full screen)
	traditionally, we would do this by setting height: 100% on html and min-height:
	100% on body (min height on body such that it can also be larger if the content
	is larger; height on the html, not min height, because two min heights inside
	each other do not always get treated correctly and the inner one gets ignored)
	in theory this works perfectly fine, but in practice body the background has
	problems to then cover the body; therefore, we instead to the following:
	we set both to min-height: 100%; and dynamically (on startup and on reach
	resize) check if body is smaller than html, and if it is smaller, we set its
	height manually to that of html... it is not as clean and clear as a css-only
	solution, but this seems the only way to ensure cross-browserly that body clears
	its contents AND fills the space vertically AND has no problems with background
	cover (and no, even clearfix does not help elsewisely...)
	the only only ONLY downside to this here is that if we dynamically expand the
	browser, and then make it smaller again, the footer stays at the expanded state,
	but that is not a big problem because (a) on refresh it goes back to normal,
	and (b) there is nothing "wrong" being shown, we only just in that case have
	more empty space above the footer than absolutely necessary
	*/

	var body = document.getElementsByTagName("body")[0];

	var html = document.getElementsByTagName("html")[0];

	if (body.clientHeight < html.clientHeight) {
		body.style.minHeight = html.clientHeight + "px";
	}
}



// HEADER

function redisplayHeader() {

	var canvas = document.getElementById("cvHeader");
	var ctx = canvas.getContext("2d");
	var width = canvas.offsetWidth;
	var height = canvas.offsetHeight;
	var removeAmount = Math.floor(height / px);
	canvas.width = width;
	canvas.height = height;

	// draw the header all white
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(0, 0, width, height);

	// now remove the very rightmost vertical line of blocks
	ctx.clearRect(width - px, 0, px, height);
	// and the bottom right three blocks too
	ctx.clearRect(width - 2*px, height - 2*px, px, px);
	ctx.clearRect(width - 2*px, height - px, px, px);
	ctx.clearRect(width - 3*px, height - px, px, px);

	// now go over a bottom right triangle of blocks...
	for (var x = 0; x < removeAmount; x++) {
		for (var y = 0; y <= x; y++) {
			// ... for each one deciding whether to remove or not
			if (Math.random() < 0.5) {
				ctx.clearRect(width - (1+removeAmount-x)*px, height - y*px, px, px);
			}
		}
	}

	// and once more, much further, but with a much lower threshold
	var extraRemoveAmount = Math.ceil(removeAmount*3);
	// for this size, we do not want the header to eat the (small) logo
	if ((width < 600) || ((dppx > 1.5) && (width < 700)) ||
		((dppx > 2) && (width < 800)) || ((dppx > 3) && (width < 1200)) ||
		((dppx > 4) && (width < 1500))) {
		extraRemoveAmount = Math.ceil(removeAmount*2);
	}

	for (var x = 0; x < extraRemoveAmount; x++) {
		for (var y = 0; (y <= x) && (y < removeAmount); y++) {
			// ... for each one deciding whether to remove or not
			if (Math.random() < 0.5*x/extraRemoveAmount) {
				var clearX = width - (1+extraRemoveAmount-x)*px;
				if (clearX > 0) {
					ctx.clearRect(clearX, height - y*px, px, px);
				}
			}
		}
	}
}



// LEFT NAV

function redisplayLeftNavs() {

	// there are 9 nav entries: cvLeftnav0 until cvLeftnav8
	var amountOfNavEntries = 9;

	// we leave blocks: 2 top, 3 right, 1 bottom, 3 left
	var offsetLeft = 3;
	var offsetRight = 3;
	var offsetTop = 2;
	var offsetBottom = 1;

	for (var i = 0; i < amountOfNavEntries; i++) {

		var canvas = document.getElementById("cvLeftnav" + i);
		if (firstdisplay) {
			if (canvas.parentElement.className != "noopacity") {
				canvas.parentElement.style.opacity = "0.9" + Math.floor(Math.random()*10);
			}
		}
		var ctx = canvas.getContext("2d");
		var width = canvas.offsetWidth;
		var height = canvas.offsetHeight;
		var mainWidth = width - (offsetLeft+offsetRight)*px;
		var mainHeight = height - (offsetTop+offsetBottom)*px;
		var mainWidthNum = Math.round(mainWidth / px);
		var mainHeightNum = Math.round(mainHeight / px);
		var widthNum = mainWidthNum + offsetLeft + offsetRight;
		var heightNum = mainHeightNum + offsetTop + offsetBottom;
		canvas.width = width;
		canvas.height = height;

		// first of all, clear out everything...
		ctx.clearRect(0, 0, width, height);

		// then draw the center all white
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect(offsetLeft*px, offsetTop*px, mainWidth, mainHeight);

		// now add a few white blocks here and there
		var removeAmount = Math.floor(Math.random()*30);
		for (var p = 0; p < removeAmount; p++) {
			var leftNum = Math.floor(Math.random()*widthNum);
			var topNum = Math.floor(Math.random()*heightNum);
			if (topNum < 1) {
				// quick fix for now: keep first line clear
				continue;
			}
			var leftPos = leftNum*px;
			var topPos = topNum*px;
			// our blocky pixels are not properly aligned with the container;
			// to make it less noticeable, we go from the sides inwards,
			// meaning if we are over the middle, then come from the other side
			if (leftPos > width / 2) {
				leftPos = width - (widthNum-leftNum)*px;
			}
			if (topPos > height / 2) {
				topPos = height - (heightNum-topNum)*px;
			}
			// TODO :: stay away from the center! (as those are unnecessary writes... as we are writing white, anyway .o.)
			ctx.fillRect(leftPos, topPos, px, px);
		}

		// and remove a few others here and there
		var removeAmount = Math.floor(Math.random()*8);
		for (var p = 0; p < removeAmount; p++) {
			var leftNum = Math.floor(Math.random()*mainWidthNum);
			var topNum = Math.floor(Math.random()*mainHeightNum);
			var leftPos = (offsetLeft+leftNum)*px;
			var topPos = (offsetTop+topNum)*px;
			// our blocky pixels are not properly aligned with the container;
			// to make it less noticeable, we go from the sides inwards,
			// meaning if we are over the middle, then come from the other side
			if (leftPos > width / 2) {
				leftPos = width - (offsetRight+mainWidthNum-leftNum)*px;
			}
			if (topPos > height / 2) {
				topPos = height - (offsetBottom+mainHeightNum-topNum)*px;
			}
			// stay away from the center! (otherwise, we cannot read anything anymore ^^)
			if ((leftPos < width / 3) ||  (leftPos > 2 * width / 3)) {
				ctx.clearRect(leftPos, topPos, px, px);
			}
		}
	}
}



// SECTIONS

function redisplaySections() {

	// we leave blocks: 2 top, 2 right, 2 bottom, 2 left
	var offsetLeft = 2;
	var offsetRight = 2;
	var offsetTop = 2;
	var offsetBottom = 2;

	// the amount of sections is not known; however, we can count up until one does not exist, and then break
	for (var i = 0; true; i++) {

		var canvas = document.getElementById("cvSection" + i);
		if (!canvas) {
			break;
		}
		if (firstdisplay) {
			if (canvas.parentElement.className != "noopacity") {
				canvas.parentElement.style.opacity = "0.9" + Math.floor(Math.random()*10);
			}
		}
		var ctx = canvas.getContext("2d");
		var width = canvas.offsetWidth;
		var height = canvas.offsetHeight;
		var mainWidth = width - (offsetLeft+offsetRight)*px;
		var mainHeight = height - (offsetTop+offsetBottom)*px;
		var mainWidthNum = Math.round(mainWidth / px);
		var mainHeightNum = Math.round(mainHeight / px);
		var widthNum = mainWidthNum + offsetLeft + offsetRight;
		var heightNum = mainHeightNum + offsetTop + offsetBottom;
		canvas.width = width;
		canvas.height = height;

		// first of all, clear out everything...
		ctx.clearRect(0, 0, width, height);

		// then draw the center all white
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillRect(offsetLeft*px, offsetTop*px, mainWidth, mainHeight);

		// now add a few white blocks here and there
		var removeAmount = Math.floor(Math.random()*100);
		for (var p = 0; p < removeAmount; p++) {
			var leftNum = Math.floor(Math.random()*widthNum);
			var topNum = Math.floor(Math.random()*heightNum);
			if (topNum < 1) {
				// quick fix for now: keep first line clear
				continue;
			}
			var leftPos = leftNum*px;
			var topPos = topNum*px;
			// our blocky pixels are not properly aligned with the container;
			// to make it less noticeable, we go from the sides inwards,
			// meaning if we are over the middle, then come from the other side
			if (leftPos > width / 2) {
				leftPos = width - (widthNum-leftNum)*px;
			}
			if (topPos > height / 2) {
				topPos = height - (heightNum-topNum)*px;
			}
			// TODO :: stay away from the center! (as those are unnecessary writes... as we are writing white, anyway .o.)
			ctx.fillRect(leftPos, topPos, px, px);
		}

		// and remove a few others here and there - once horizontally at the top and bottom,
		// once vertically at the left and right, such that we never remove stuff from the middle
		var removeAmount = Math.floor(Math.random()*5);
		for (var p = 0; p < removeAmount; p++) {
			var leftNum = Math.floor(Math.random()*mainWidthNum);
			var topNum = Math.floor(Math.random()*4);
			if (topNum > 1) {
				topNum = mainHeightNum - (4 - topNum);
			}
			var leftPos = (offsetLeft+leftNum)*px;
			var topPos = (offsetTop+topNum)*px;
			// our blocky pixels are not properly aligned with the container;
			// to make it less noticeable, we go from the sides inwards,
			// meaning if we are over the middle, then come from the other side
			if (leftPos > width / 2) {
				leftPos = width - (offsetRight+mainWidthNum-leftNum)*px;
			}
			if (topPos > height / 2) {
				topPos = height - (offsetBottom+mainHeightNum-topNum)*px;
			}
			ctx.clearRect(leftPos, topPos, px, px);
		}
		removeAmount = Math.floor(Math.random()*5);
		for (var p = 0; p < removeAmount; p++) {
			var leftNum = Math.floor(Math.random()*4);
			if (leftNum > 1) {
				leftNum = mainWidthNum - (4 - leftNum);
			}
			var topNum = Math.floor(Math.random()*mainHeightNum);
			var leftPos = (offsetLeft+leftNum)*px;
			var topPos = (offsetTop+topNum)*px;
			// our blocky pixels are not properly aligned with the container;
			// to make it less noticeable, we go from the sides inwards,
			// meaning if we are over the middle, then come from the other side
			if (leftPos > width / 2) {
				leftPos = width - (offsetRight+mainWidthNum-leftNum)*px;
			}
			if (topPos > height / 2) {
				topPos = height - (offsetBottom+mainHeightNum-topNum)*px;
			}
			ctx.clearRect(leftPos, topPos, px, px);
		}
	}
}



// FOOTER

function redisplayFooter() {

	var canvas = document.getElementById("cvFooter");
	var ctx = canvas.getContext("2d");
	var width = canvas.offsetWidth;
	var height = canvas.offsetHeight;
	var removeAmount = Math.floor(height / px);
	canvas.width = width;
	canvas.height = height;

	// draw the header all gray
	ctx.fillStyle = "rgba(15, 0, 20, 0.9)";
	ctx.fillRect(0, 0, width, height);

	// now go over a top right triangle of blocks...
	for (var x = 0; x < removeAmount; x++) {
		for (var y = 0; y <= x; y++) {
			// ... for each one deciding whether to remove or not
			if (Math.random() < 0.1) {
				ctx.clearRect(width - (1+removeAmount-x)*px, y*px, px, px);
			}
		}
	}

	// plus - also ensure that at least two pixels are removed in the top row,
	// and one in the row below
	var x = Math.floor(Math.random()*removeAmount);
	ctx.clearRect(width - (1+removeAmount-x)*px, 0, px, px);
	x = Math.floor(Math.random()*removeAmount);
	ctx.clearRect(width - (1+removeAmount-x)*px, 0, px, px);
	x = Math.floor(Math.random()*removeAmount);
	ctx.clearRect(width - (1+removeAmount-x)*px, px, px, px);
}



function redisplay() {

	resizeBody();

	redisplayHeader();

	redisplayLeftNavs();

	redisplaySections();

	redisplayFooter();

	firstdisplay = false;
}



// kick it all off - four times, such that it looks a bit fun :)
redisplay();
setTimeout(redisplay, 80);
setTimeout(redisplay, 160);
setTimeout(redisplay, 320);



// redraw on browser resize
window.addEventListener('resize', redisplay);
