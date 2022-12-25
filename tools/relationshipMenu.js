/**
 * Unlicensed code created by A Softer Space, 2022
 * www.asofterspace.com/licenses/unlicense.txt
 */

window.rM = {

	categories: {},

	categoriesPerLanguage: {
		"en": {
			"friendship": ["companionship", "playfulness", "shared hobbies"],
			"communication": ["frequent", "deep conversations", "pet names"],
			"emotional intimacy": ["sharing", "vulnerability"],
			"emotional support": ["listening", "problem-solving"],
			"life partner": ["sharing goals", "embracing change in one another"],
			"social partners": ["marriage", "events", "social media", "family"],
			"caretaking": ["illness", "age", "general needs / favors"],
			"co-caregiving": ["children", "pets", "family"],
			"domestic": ["living together", "cooking together", "chores and duties"],
			"romance": ["dating", "feelings of love", "courtship"],
			"physicality": ["dance", "massage", "body contact"],
			"touch": ["hugging", "cuddling", "holding hands"],
			"sex": ["kissing", "making out", "manual", "oral", "genital"],
			"kink": ["bdsm", "fetish", "non-vanilla"],
			"power dynamic": ["boss", "dom(me)", "age/pet play"],
			"collaborating": ["creativity", "organizing", "projects"],
			"business": ["creating", "owning", "sharing duties"],
			"finances": ["money", "accounts", "property"],
		},
		"de": {
			"Freundschaft": ["Kamerad*innenschaft", "Verspieltheit", "Geteilte Hobbies"],
			"Kommunikation": ["Häufig", "Tiefe Konversationen", "Kosenamen"],
			"Emotionale Intimität": ["Emotionen miteinander teilen", "Verwundbarkeit"],
			"Emotionale Unterstützung": ["Zuhören", "Probleme lösen"],
			"Lebenspartner*innen": ["Ziele teilen", "Veränderungen der anderen Person(en) wertschätzen"],
			"Soziale Partner*innen": ["Heirat", "Ereignisse", "Soziale Medien", "Familie"],
			"Sich umeinander kümmern": ["Krankheit", "Alter", "Generelle Bedürfnisse"],
			"Gemeinsam pflegen": ["Kinder", "Haustiere", "Familie"],
			"Häuslich": ["Zusammen leben", "Gemeinsam kochen", "Aufgaben und Pflichten"],
			"Romantik": ["Dating", "Liebesgefühle", "Balzverhalten"],
			"Physische Intimität": ["Tanzen", "Massage", "Körperkontakt"],
			"Anfassen": ["Umarmen", "Knuddeln", "Händchenhalten"],
			"Sex": ["Küssen", "Herummachen", "Manuell", "Oral", "Genital"],
			"Kink": ["BDSM", "Fetisch", "Nicht-vanilla"],
			"Machtgefälle": ["Boss", "Dom(me)", "Alters-/Tierspiel"],
			"Kollaborieren": ["Kreativität", "Organisieren", "Projekte"],
			"Geschäftlich": ["Erschaffen", "Besitzen", "Aufgaben teilen"],
			"Finanzen": ["Geld", "Konten", "Eigentum"],
		},
	},

	soFarIncluded: [],


	resetLanguage: function() {
		this.categories = this.categoriesPerLanguage[window._globalSiteLang];
	},

	renderInputs: function() {
		var mainDiv = document.getElementById("rM-main-content");
		if (mainDiv) {
			var html = "";
			var inputNum = 0;
			var cats = this.categories;
			for (const key in cats) {
				html += "<div style='padding-bottom:8pt;'>";
				html += "<b>" + key + "</b><br>";

				for (var i = 0; i < cats[key].length; i++) {
					html += "<input class='input-checkbox' type='checkbox' id='rM-input-" + inputNum + "' name='rM-input-" + inputNum + "' >";
					html += "<label class='input-checkbox-label' for='rM-input-" + inputNum + "'>" + cats[key][i] + "</label><br>";
					inputNum++;
				}

				html += "</div>";
			}

			mainDiv.innerHTML = html;
		}
	},

	renderResults: function() {
		var mainDiv = document.getElementById("rM-main-content");
		if (mainDiv) {
			var html = "";
			var inputNum = 0;
			var cats = this.categories;
			for (const key in cats) {
				var cur = "";
				var someAgreement = false;

				for (var i = 0; i < cats[key].length; i++) {
					if (this.soFarIncluded.indexOf(inputNum) >= 0) {
						cur += cats[key][i] + "<br>";
						someAgreement = true;
					} else {
						cur += "<strike style='opacity:0.5;'>" + cats[key][i] + "</strike><br>";
					}
					inputNum++;
				}

				html += "<div style='padding-bottom:8pt;'>";
				if (someAgreement) {
					html += "<b>" + key + "</b><br>";
				} else {
					html += "<strike style='opacity:0.65;'><b>" + key + "</b></strike><br>";
				}
				html += cur;
				html += "</div>";
			}

			mainDiv.innerHTML = html;
		}
	},

	resetResults: function() {

		var newRes = [];
		var inputNum = 0;
		var cats = this.categories;
		for (const key in cats) {
			for (var i = 0; i < cats[key].length; i++) {
				newRes.push(inputNum);
				inputNum++;
			}
		}
		this.soFarIncluded = newRes;
	},

	gatherResults: function() {
		var someWasChecked = false;
		var inputNum = 0;
		var cats = this.categories;
		for (const key in cats) {
			for (var i = 0; i < cats[key].length; i++) {
				var el = document.getElementById("rM-input-" + inputNum);
				if (el) {
					if (el.checked) {
						someWasChecked = true;
					}
				}
				inputNum++;
			}
		}

		// if not a single one was checked, ignore this particular input,
		// as then someone probably just mis-clicked
		if (!someWasChecked) {
			return;
		}

		inputNum = 0;
		for (const key in cats) {
			for (var i = 0; i < cats[key].length; i++) {
				var el = document.getElementById("rM-input-" + inputNum);
				if (el) {
					// if unchecked, remove from the results
					if (!el.checked) {
						var index = this.soFarIncluded.indexOf(inputNum);
						if (index >= 0) {
							this.soFarIncluded.splice(index, 1);
						}
					}
				}
				inputNum++;
			}
		}
	},

	nextPerson: function() {

		this.gatherResults();

		this.renderInputs();
	},

	showResults: function() {

		this.gatherResults();

		var el = document.getElementById("rM-button-bar");
		if (el) {
			el.style.display = "none";
		}

		this.renderResults();
	},
};


rM.resetLanguage();

rM.resetResults();

rM.renderInputs();
