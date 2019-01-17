window.expcarousel = {
	position: 0,
	element: document.getElementById('expcarousel'),
	firstImgSecondRound: document.getElementById('expcarouselFirstImgSecondRound'),
};

window.setInterval(function() {

	// carousel
	if (expcarousel.element == null) {
		expcarousel.element = document.getElementById('expcarousel');
	} else {
		expcarousel.element.style.left = '-' + expcarousel.position + 'px';
		expcarousel.position = expcarousel.position + 1;
	}

	if (expcarousel.firstImgSecondRound == null) {
		expcarousel.firstImgSecondRound = document.getElementById('expcarouselFirstImgSecondRound');
	} else {
		if (expcarousel.position > expcarousel.firstImgSecondRound.offsetLeft) {
			expcarousel.position = 0;
		}
	}

}, 100);
