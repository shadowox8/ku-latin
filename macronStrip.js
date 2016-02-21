/**
 * Replaces macron'd characters with their LOWERCASE non-macron'd equivalent.
 * @param {string} str The string to be stripped.
 * @returns {string} The stripped string.
 */
function macronStrip(str) {
	// str = str.toLowerCase();
	str = str.replace(/ā/gi, "a");
	str = str.replace(/ē/gi, "e");
	str = str.replace(/ī/gi, "i");
	str = str.replace(/ō/gi, "o");
	str = str.replace(/ū/gi, "u");
	return str;
}
