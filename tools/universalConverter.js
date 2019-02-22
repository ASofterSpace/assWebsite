
window.uC = {

	inKind: "hexadecimal",

	outKind: "binary",


	setIn: function(id) {
		document.getElementById("uC-in-binary").className = "option";
		document.getElementById("uC-in-octal").className = "option";
		document.getElementById("uC-in-decimal").className = "option";
		document.getElementById("uC-in-hexadecimal").className = "option";

		document.getElementById("uC-in-" + id).className = "option selected";

		this.inKind = id;

		this.doconvert();
	},

	setOut: function(id) {
		document.getElementById("uC-out-binary").className = "option";
		document.getElementById("uC-out-octal").className = "option";
		document.getElementById("uC-out-decimal").className = "option";
		document.getElementById("uC-out-hexadecimal").className = "option";

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

		var intermediate = parseInt(orig, origBase);

		var result = (intermediate).toString(targetBase);

		return result.toUpperCase();
	},
};
