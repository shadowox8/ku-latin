// 100% Sure-Proof.
// Inspired by: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

/**
 * Replaces LOWERCASE macron'd characters with their non-macron'd equivalent.
 * @param {string} str The string to be stripped.
 * @returns {string} The stripped string.
 */
function macronStrip(str) {
	// JSLint demanded that I use this.
	"use strict";

	// It seems silly to run this each time the function is invoked, but it
	// seems equally silly to make this a global variable... what do?
	var map = [];
	map["ā"] = "a";
	map["ē"] = "e";
	map["ī"] = "i";
	map["ō"] = "o";
	map["ū"] = "u";

	// Finds macron'd letters and replaces them with their non-macron'd
	// equivalents as defined by `map`.
	return str.replace(/[āēīōū]/g, function (match) {
		return map[match];
	});
}
