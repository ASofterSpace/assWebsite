/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.jF = {

	doformat: function() {

		var orig = document.getElementById("jF-in").value;

		var sortAlphabetically = document.getElementById("jF-sort-alphabetically").checked;

		try {
			var obj = JSON.parse(orig);

			var jsonText = this.objectToJson(obj, sortAlphabetically);

			document.getElementById("jF-out").value = jsonText;

		} catch(error) {

			document.getElementById("jF-out").value = "" + error;
		}
	},

	objectToJson: function(obj, sortAlphabetically) {

		return this.objectToJsonWithIndent(obj, sortAlphabetically, "");
	},

	objectToJsonWithIndent: function(obj, sortAlphabetically, indent) {

		var result = "";
		var objtype = typeof obj;

		switch (objtype) {

			case "object":

				var curIndent = indent + "  ";
				var del = "";

				if (Array.isArray(obj)) {

					result += "[\n";
					var length = obj.length;
					for (var i = 0; i < length; i++) {
						result += del + curIndent + this.objectToJsonWithIndent(obj[i], sortAlphabetically, curIndent);
						del = ",\n";
					}
					if (del.length > 0) {
						result += "\n";
					}
					result += indent + "]";

				} else {

					result += "{\n";
					if (sortAlphabetically) {
						var keys = [];
						var len = 0;
						for (var key in obj) {
							if (obj.hasOwnProperty(key)) {
								keys.push(key);
								len++;
							}
						}
						keys.sort();
						for (var i = 0; i < len; i++) {
							result += del + curIndent + this.toJsonString(keys[i]) + ": " + this.objectToJsonWithIndent(obj[keys[i]], sortAlphabetically, curIndent);
							del = ",\n";
						}
					} else {
						// the ordering here relies on objects not reordering their properties...
						// this works in most modern browsers but is not guaranteed by the standard!
						// (it would be nicer to have our own JSON parser that makes arrays instead
						// of objects and the array keeps each entry as object with a key and value,
						// as arrays really are stable, even by the standard)
						for (var key in obj) {
							if (obj.hasOwnProperty(key)) {
								result += del + curIndent + this.toJsonString(key) + ": " + this.objectToJsonWithIndent(obj[key], sortAlphabetically, curIndent);
								del = ",\n";
							}
						}
					}
					if (del.length > 0) {
						result += "\n";
					}
					result += indent + "}";
				}

				break;

			case "string":
				result = this.toJsonString(obj);
				break;

			case "number":
				result = "" + obj;
				break;

			case "boolean":
				result = "" + obj;
				break;
		}

		return result;
	},

	// takes a string and makes it into a valid JSON string
	// (so e.g. foobar becomes "foobar", but the string foo"bar becomes "foo\"bar"))
	toJsonString: function(str) {

		str = str.split("\\").join("\\\\");
		str = str.split("\"").join("\\\"");

		return "\"" + str + "\"";
	}

};

tA.doformat();
