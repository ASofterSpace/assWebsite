/*
We here combined the toggle and carousel scripts because they both
use a constantly running function, and then we only need to have
one of these functions rather than two of them...
*/

window.expand = {
	
	toanimate: [],
	
	indicatorHeight: 0,
	
	getDefaultHeight: function() {
	
		if (this.indicatorHeight == 0) {
			var indicator = document.getElementById("expandable_size_indicator");
			this.indicatorHeight = indicator.clientHeight;
		}
		
		return this.indicatorHeight;
	},
	
	toggle: function(elementNr) {
	
		var el = document.getElementById("expand" + elementNr);
			
		if ((el.style.height == "") || (el.style.height == this.getDefaultHeight() + "px")) {
			this.expand(elementNr);
		} else {
			this.collapse(elementNr);
		}
	},
	
	expand: function(elementNr) {
	
		document.getElementById("expandlabel" + elementNr).innerHTML = "[collapse this]";
		var el = document.getElementById("expand" + elementNr);
		this.resizeTo(el, el.scrollHeight);
	},
	
	collapse: function(elementNr) {
	
		document.getElementById("expandlabel" + elementNr).innerHTML = "[expand this]";
		var el = document.getElementById("expand" + elementNr);
		this.resizeTo(el, this.getDefaultHeight());
	},
	
	resizeTo: function(element, targetHeight) {
	
		for (var i = 0; i < this.toanimate.length; i++) {
			if (this.toanimate[i].element === element) {
				this.toanimate[i].height = targetHeight;
				return;
			}
		}
		
		this.toanimate.push({element: element, height: targetHeight});
	},
	
	expandAll: function() {
	
		this.expand(1);
		this.expand(2);
		this.expand(3);
		this.expand(4);
		this.expand(5);
		this.expand(6);
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
			curHeight = expand.getDefaultHeight();
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
