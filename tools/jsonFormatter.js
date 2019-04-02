
window.jF = {

	doformat: function() {

		var orig = document.getElementById("jF-in").value;

		try {
			var obj = JSON.parse(orig);

			var jsonText = this.objectToJson(obj);

			document.getElementById("jF-out").value = jsonText;

		} catch(error) {

			document.getElementById("jF-out").value = "" + error;
		}
	},

	objectToJson: function(obj) {

		return this.objectToJsonWithIndent(obj, "");
	},

	objectToJsonWithIndent: function(obj, indent) {

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
						result += del + curIndent + this.objectToJsonWithIndent(obj[i], curIndent);
						del = ",\n";
					}
					if (del.length > 0) {
						result += "\n";
					}
					result += indent + "]";

				} else {

					result += "{\n";
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							result += del + curIndent + this.toJsonString(key) + ": " + this.objectToJsonWithIndent(obj[key], curIndent);
							del = ",\n";
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
