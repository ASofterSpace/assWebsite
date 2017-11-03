/*
We here combined the toggle and carousel scripts because they both
use a constantly running function, and then we only need to have
one of these functions rather than two of them...
*/

window.expand = {
	toanimate: [],
	toggle: function(elementNr) {
		var el = document.getElementById("expand" + elementNr);
		var targetHeight = 55;
			
		if ((el.style.height == "") || (el.style.height == "55px")) {
			targetHeight = el.scrollHeight;
		}
		
		this.expand(el, targetHeight);
	},
	getElementAndExpand: function(elementNr) {
		var el = document.getElementById("expand" + elementNr);
		this.expand(el, el.scrollHeight);
	},
	expand: function(element, targetHeight) {
		for (var i = 0; i < this.toanimate.length; i++) {
			if (this.toanimate[i].element === element) {
				this.toanimate[i].height = targetHeight;
				return;
			}
		}
		
		this.toanimate.push({element: element, height: targetHeight});
	},
	toggleAll: function() {
		this.getElementAndExpand(1);
		this.getElementAndExpand(2);
		this.getElementAndExpand(3);
		this.getElementAndExpand(4);
		this.getElementAndExpand(5);
		this.getElementAndExpand(6);
	},
}

window.expcarousel = {
	position: 0,
	element: document.getElementById('expcarousel'),
	firstImgSecondRound: document.getElementById('expcarouselFirstImgSecondRound'),
};

window.setInterval(function() {

	// expand / collapse
	for (var i = expand.toanimate.length - 1; i >= 0; i--) {
	
		var anim = expand.toanimate[i];
		var curHeight = anim.element.style.height;
		if (curHeight == "") {
			curHeight = 55;
		} else {
			curHeight = parseFloat(curHeight);
		}
		
		var newHeight = (curHeight + anim.height) / 2;
		if (Math.abs(anim.height - newHeight) < 0.1) {
			newHeight = anim.height;
			expand.toanimate.splice(i, 1);
		}
		anim.element.style.height = newHeight + "px";
	}

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
