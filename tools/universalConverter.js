/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.uC = {

	inKind: "hexadecimal",

	outKind: "binary",


	setIn: function(id) {
		document.getElementById("uC-in-binary").className = "option";
		document.getElementById("uC-in-octal").className = "option";
		document.getElementById("uC-in-decimal").className = "option";
		document.getElementById("uC-in-hexadecimal").className = "option";
		document.getElementById("uC-in-utf16").className = "option";

		document.getElementById("uC-in-" + id).className = "option selected";

		this.inKind = id;

		this.doconvert();
	},

	setOut: function(id) {
		document.getElementById("uC-out-binary").className = "option";
		document.getElementById("uC-out-octal").className = "option";
		document.getElementById("uC-out-decimal").className = "option";
		document.getElementById("uC-out-hexadecimal").className = "option";
		document.getElementById("uC-out-utf16").className = "option";

		document.getElementById("uC-out-" + id).className = "option selected";

		this.outKind = id;

		this.doconvert();
	},

	doconvert: function() {
		var orig = document.getElementById("uC-in").value;

		var result = this.convert(orig, this.inKind, this.outKind);

		document.getElementById("uC-out").value = result;
	},

	convert: function(orig, origKind, targetKind) {

		if (orig == "") {
			return "";
		}

		var trueOrigKind = origKind;

		if (origKind == "utf16") {
			if (targetKind == "utf16") {
				return orig;
			}
			var newOrig = "";
			for (var i = 0; i < orig.length; i++) {
				newOrig += orig.charCodeAt(i) + " ";
			}
			orig = newOrig;
			origKind = "decimal";
		}

		var origBase = 10;
		var targetBase = 10;

		if (origKind == "binary") {
			origBase = 2;
		}
		if (origKind == "octal") {
			origBase = 8;
		}
		if (origKind == "decimal") {
			origBase = 10;
		}
		if (origKind == "hexadecimal") {
			origBase = 16;
		}

		if (targetKind == "binary") {
			targetBase = 2;
		}
		if (targetKind == "octal") {
			targetBase = 8;
		}
		if (targetKind == "decimal") {
			targetBase = 10;
		}
		if (targetKind == "hexadecimal") {
			targetBase = 16;
		}

		// TODO :: also add Java / Ecore UUID conversion

		orig = orig.trim();

		var origArr = orig.split(" ");

		if (targetKind == "utf16") {

			var result = "";

			for (var i = 0; i < origArr.length; i++) {

				var intermediate = parseInt(origArr[i], origBase);

				result += String.fromCharCode(intermediate);
			}

			return result;
		}

		for (var i = 0; i < origArr.length; i++) {

			var intermediate = parseInt(origArr[i], origBase);

			origArr[i] = (intermediate).toString(targetBase);

			// UTF16 -> binary: left pad with zeroes
			if (trueOrigKind == "utf16") {
				if (targetKind == "binary") {
					while (origArr[i].length < 8) {
						origArr[i] = "0" + origArr[i];
					}
				}
				if (targetKind == "hexadecimal") {
					while (origArr[i].length < 2) {
						origArr[i] = "0" + origArr[i];
					}
				}
			}
		}

		var result = origArr.join(" ");

		if (targetKind == "hexadecimal") {
			result = result.toUpperCase();
		}

		return result;
	},
};
