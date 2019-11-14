/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.dBC = {

	docalculate: function() {

		var result = this.calculateResult();
		document.getElementById("dBC-output").innerHTML = "" + (Math.round(result * 10) / 10) + "%";
	},

	parse: function(str) {
		if (str == null) {
			return 0;
		}
		if (str == "") {
			return 0;
		}
		return parseInt(str, 10);
	},

	calculateResult: function() {

		var differentlyMarkedCards = 4;

		var deckSize = this.parse(document.getElementById("dBC-deck-size").value);
		var drawAmount = this.parse(document.getElementById("dBC-draw-amount").value);

		if (drawAmount > deckSize) {
			return 100;
		}

		var marks = [];
		var markAmounts = [];
		for (var i = 0; i < differentlyMarkedCards; i++) {
			marks[i] = document.getElementById("dBC-mark-" + i).value;
			markAmounts[i] = this.parse(document.getElementById("dBC-mark-amount-" + i).value);
		}

		var result = "" + 0 + "%";

		var cards = [];
		for (var i = 0; i < deckSize; i++) {
			cards[i] = {name: null};
		}
		var offset = 0;
		for (var i = 0; i < differentlyMarkedCards; i++) {
			for (var j = 0; j < markAmounts[i]; j++) {
				cards[offset+j] = {name: marks[i]};
			}
			offset += markAmounts[i];
		}

		var trialAmount = 100000;
		var successes = 0;
		for (var trial = 0; trial < trialAmount; trial++) {

			var markDrawn = [];
			for (var i = 0; i < differentlyMarkedCards; i++) {
				markDrawn[i] = false;
				// ignore ones that we don't have in the deck
				// TODO :: in the future, let the user add as many as they want, and if one is at zero, just go to zero result
				if (markAmounts[i] < 1) {
					markDrawn[i] = true;
				}
			}

			// draw the first drawAmount cards...
			for (var c = 0; c < deckSize; c++) {
				cards[c].hasBeenDrawn = false;
			}
			for (var c = 0; c < drawAmount; c++) {
				var randCard = cards[Math.floor(Math.random() * deckSize)];
				while (randCard.hasBeenDrawn) {
					randCard = cards[Math.floor(Math.random() * deckSize)];
				}
				randCard.hasBeenDrawn = true;

				// ... and check if they include the marks...
				for (var i = 0; i < differentlyMarkedCards; i++) {
					if (randCard.name == marks[i]) {
						markDrawn[i] = true;
					}
				}
			}

			// ... and if not, do not count this round as a success!
			var isSuccess = true;
			for (var i = 0; i < differentlyMarkedCards; i++) {
				if (markDrawn[i] == false) {
					isSuccess = false;
				}
			}
			if (isSuccess) {
				successes++;
			}
		}

		return (100 * successes) / trialAmount;
	},

};

dBC.docalculate();
