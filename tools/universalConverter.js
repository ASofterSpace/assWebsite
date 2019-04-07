/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.uC = {

	// TODO :: also add Java / Ecore UUID conversion

	allFields: ["binary", "octal", "decimal", "hexadecimal", "babylonian", /* "roman", "morse", */ "utf16", "uri", "base64"],

	inKind: "hexadecimal",

	outKind: "utf16",


	setIn: function(id) {

		for (var i = 0; i < this.allFields.length; i++) {
			document.getElementById("uC-in-" + this.allFields[i]).className = "option";
		}

		document.getElementById("uC-in-" + id).className = "option selected";

		this.inKind = id;

		this.doconvert();
	},

	setOut: function(id) {

		for (var i = 0; i < this.allFields.length; i++) {
			document.getElementById("uC-out-" + this.allFields[i]).className = "option";
		}

		document.getElementById("uC-out-" + id).className = "option selected";

		this.outKind = id;

		this.doconvert();
	},

	doconvert: function() {
		var orig = document.getElementById("uC-in").value;

		var result = this.convert(orig, this.inKind, this.outKind);

		document.getElementById("uC-out").value = result;

		// adjust the connecting line between input and output
		var el = document.getElementById("uC-inspan-" + this.inKind);
		var x1 = el.offsetWidth + 5;
		el = document.getElementById("uC-in-" + this.inKind);
		var y1 = el.offsetTop + (el.offsetHeight / 2);

		el = document.getElementById("uC-out-" + this.outKind);
		var x2 = el.offsetParent.offsetLeft - 5;
		var y2 = el.offsetTop + (el.offsetHeight / 2);

		document.getElementById("uC-connector").setAttribute('x1', x1);
		document.getElementById("uC-connector").setAttribute('y1', y1);
		document.getElementById("uC-connector").setAttribute('x2', x2);
		document.getElementById("uC-connector").setAttribute('y2', y2);
	},

	convert: function(orig, origKind, targetKind) {

		if (orig == "") {
			return "";
		}

		var trueOrigKind = origKind;

		// preprocess input: make base64 and URI-encoded text look internally just like regular utf16 text
		switch (origKind) {
			case "base64":
				try {
					orig = atob(orig);
				} catch (error) {
					orig = "";
				}
				origKind = "utf16";
				break;
			case "uri":
				try {
					orig = decodeURIComponent(orig);
				} catch (error) {
					orig = "";
				}
				origKind = "utf16";
				break;
		}

		// consolidate input: split the input string into an array of input values
		var origArr;

		switch (origKind) {

			case "babylonian":
				origArr = orig.split("\n");
				break;

			case "utf16":
				origArr = [];
				for (var i = 0; i < orig.length; i++) {
					origArr.push(orig.charCodeAt(i));
				}
				origKind = "decimal";
				break;

			// binary, octal, decimal, hexadecimal
			default:
				origArr = orig.trim().split(" ");
		}

		// convert to intermediate form: array of input values to array of integers
		for (var i = 0; i < origArr.length; i++) {

			switch (origKind) {

				case "babylonian":
					origArr[i] = this.babylonianToInt(origArr[i]);
					break;

				case "binary":
					origArr[i] = parseInt(origArr[i], 2);
					break;

				case "octal":
					origArr[i] = parseInt(origArr[i], 8);
					break;

				case "decimal": // also utf16
					origArr[i] = parseInt(origArr[i], 10);
					break;

				case "hexadecimal":
					origArr[i] = parseInt(origArr[i], 16);
					break;
			}
		}

		// convert to final form: array of integers to array of output values
		for (var i = 0; i < origArr.length; i++) {

			switch (targetKind) {

				case "babylonian":
					origArr[i] = this.intToBabylonian(origArr[i]);
					break;

				case "binary":
					origArr[i] = (origArr[i]).toString(2);
					// UTF16 -> binary: left pad with zeroes
					if (trueOrigKind == "utf16") {
						while (origArr[i].length < 8) {
							origArr[i] = "0" + origArr[i];
						}
					}
					break;

				case "octal":
					origArr[i] = (origArr[i]).toString(8);
					break;

				case "decimal":
					origArr[i] = (origArr[i]).toString(10);
					break;

				case "hexadecimal":
					origArr[i] = (origArr[i]).toString(16);
					// UTF16 -> hex: left pad with zeroes
					if (trueOrigKind == "utf16") {
						while (origArr[i].length < 2) {
							origArr[i] = "0" + origArr[i];
						}
					}
					break;

				case "utf16":
				case "uri":
				case "base64":
					origArr[i] = String.fromCharCode(origArr[i]);
					break;
			}
		}

		// consolidate output: array of output values to string
		var result;

		switch (targetKind) {

			case "babylonian":
				// in babylonian empty spaces already are meaningful, so to have an output array
				// we actually use newlines as array separator
				result = origArr.join("\n");
				break;

			case "hexadecimal":
				result = origArr.join(" ").toUpperCase();
				break;

			case "utf16":
				result = origArr.join("");
				break;

			case "base64":
				try {
					result = btoa(origArr.join(""));
				} catch (error) {
					result = "";
				}
				break;

			case "uri":
				try {
					result = encodeURIComponent(origArr.join(""));
				} catch (error) {
					result = "";
				}
				break;

			// binary, octal, decimal
			default:
				result = origArr.join(" ");
		}

		return result;
	},

	babylonianToInt: function(num) {

		var result = 0;

		var nums = num.split(" ");

		for (var i = 0; i < nums.length; i++) {

			result = result * 60;

			var curNum = nums[i];

			// iterate over entire codepoints
			for (const c of curNum) {
				// accept our own output as input, but also what other programs / people
				// might write in babylonian!
				switch (c) {
					case "\u{12415}":
					case "\u{12470}":
						result += 1;
						break;
					case "\u{12416}":
						result += 2;
						break;
					case "\u{12417}":
					case "\u{12408}":
						result += 3;
						break;
					case "\u{1243C}":
					case "\u{12418}":
					case "\u{12409}":
						result += 4;
						break;
					case "\u{1240A}":
					case "\u{12419}":
						result += 5;
						break;
					case "\u{1240B}":
					case "\u{1241A}":
						result += 6;
						break;
					case "\u{12442}":
						result += 7;
						break;
					case "\u{12444}":
						result += 8;
						break;
					case "\u{12446}":
						result += 9;
						break;
					case "\u{1230B}":
						result += 10;
						break;
					case "\u{12399}":
					case "\u{12471}":
						result += 20;
						break;
					case "\u{1230D}":
						result += 30;
						break;
					case "\u{12469}":
					case "\u{1240F}":
						result += 40;
						break;
					case "\u{1246A}":
					case "\u{12410}":
						result += 50;
						break;
					case "\u{1246B}":
					case "\u{12411}":
						result += 60;
						break;
					case "\u{1246C}":
					case "\u{12412}":
						result += 70;
						break;
					case "\u{1246D}":
					case "\u{12413}":
						result += 80;
						break;
					case "\u{1246E}":
					case "\u{12414}":
						result += 90;
						break;
				}
			}
		}

		return result;
	},

	intToBabylonian: function(num) {

		var ones = [
			"", // 0
			"\u{12415}", // 1
			"\u{12416}", // 2
			"\u{12417}", // 3
			"\u{1243C}", // 4
			"\u{1240A}", // 5
			"\u{1240B}", // 6
			"\u{12442}", // 7
			"\u{12444}", // 8
			"\u{12446}", // 9
		];

		var tens = [
			"", // 0
			"\u{1230B}", // 1
			"\u{1230B}\u{1230B}", // 2
			// a better sign for 2 would be \u{12399}, but it seems to not yet be widely supported...
			"\u{1230D}", // 3
			"\u{12469}", // 4
			"\u{1246A}", // 5
		];

		var result = "";

		// so if someone wants us to go ahead and get a non-integer number in Babylonian...
		if (!Number.isInteger(num)) {
			// ... then we kind of need to decide how accurate to represent it;
			// as there is no decimal point, we need to decide on something,
			// so let's just say that we go for one digit after the (non-existing)
			// decimal point!
			num = num * 60;
		}

		// first of all, get the digits, with each digit representing 60
		var sep = "";
		while (num >= 1) {
			var digit = num % 60;
			var digitOne = digit % 10;
			var digitTen = Math.floor(digit / 10);
			num = Math.floor(num / 60);

			// now actually represent each digit by some funky unicode :)
			result = tens[digitTen] + ones[digitOne] + sep + result;
			sep = " ";
		}

		return result;
	},
};

uC.doconvert();
