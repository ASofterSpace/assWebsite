/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.tA = {

	doanalyze: function() {

		var orig = document.getElementById("tA-in").value;

		var words = 0;
		var sentences = 0;
		var characterOccurrences = [];
		var lastChar = ' ';

		for (var i = 0; i < orig.length; i++) {
			var curChar = orig.charAt(i);
			if ((curChar == " ") && (lastChar != " ")) {
				words++;
			}
			if (this.isSentenceEnd(curChar) && !this.isSentenceEnd(lastChar)) {
				sentences++;
			}
			var curCharVal = curChar.toUpperCase().charCodeAt(0);
			if (characterOccurrences[curCharVal]) {
				characterOccurrences[curCharVal] += 1;
			} else {
				characterOccurrences[curCharVal] = 1;
			}
			lastChar = curChar;
		}

		var mostCommonChar = " ";
		var mostCommonCharAmount = 0;

		for (var i = 0; i < 65536; i++) {
			if (characterOccurrences[i] > mostCommonCharAmount) {
				mostCommonCharAmount = characterOccurrences[i];
				mostCommonChar = String.fromCharCode(i);
			}
		}

		if (mostCommonChar == " ") {
			mostCommonChar = "&nbsp;";
		}

		var mostCommonLetter = " ";
		var mostCommonLetterAmount = 0;

		for (var i = 65; i < 91; i++) {
			if (characterOccurrences[i] > mostCommonLetterAmount) {
				mostCommonLetterAmount = characterOccurrences[i];
				mostCommonLetter = String.fromCharCode(i);
			}
		}

		if (mostCommonLetter == " ") {
			mostCommonLetter = "&nbsp;";
		}

		document.getElementById("tA-out-length").innerHTML = "" + orig.length;
		document.getElementById("tA-out-word-count").innerHTML = "" + words;
		document.getElementById("tA-out-sentence-count").innerHTML = "" + sentences;
		document.getElementById("tA-out-size-est").innerHTML = this.byteAmountToSizeString(orig.length);
		document.getElementById("tA-out-most-common-char").innerHTML = mostCommonChar + " (" + mostCommonCharAmount;
		document.getElementById("tA-out-most-common-letter").innerHTML = mostCommonLetter + " (" + mostCommonLetterAmount;
	},

	isSentenceEnd: function(s) {
		return (s == ".") || (s == "!") || (s == "?");
	},

	byteAmountToSizeString: function(byteAmount) {

		var resultAmount = byteAmount;
		var resultUnit = "B";

		if (resultAmount > 1024) {
			resultAmount = resultAmount / 1024;
			resultUnit = "KB";
		}

		if (resultAmount > 1024) {
			resultAmount = resultAmount / 1024;
			resultUnit = "MB";
		}

		if (resultAmount > 1024) {
			resultAmount = resultAmount / 1024;
			resultUnit = "GB";
		}

		return (Math.round(resultAmount * 100) / 100) + " " + resultUnit;
	},

};
