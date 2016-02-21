/**
 * Creates a Verb object.
 * @constructor
 * @param {Integer} ch The chapter of Wheelock (7 ed.) in which the verb is introduced. Else -1.
 * @param {Integer|String} conj The conjugation of the verb; 1-4 or "3io". Else -1.
 * @param {String} p1 The first principal part. Leave blank if no pp exists. At least one of the four pps must be given.
 * @param {String} p2 See on `p1`.
 * @param {String} p3 See on `p1`.
 * @param {String} p4 See on `p1`.
 */
function Verb(ch, conj, p1, p2, p3, p4) {
	// No exception for `ch` or `conj` because I don't think it would matter
	// for the end user.
	
	// Throw an exception if no principal parts are given.
	if (!Boolean(p1 || p2 || p3 || p4)) {
		throw "No principal parts given.";
	}
	
	this.ch = ch;
	this.conj = conj;
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	this.p4 = p4;
}

// var amo = new Verb(1, 1, "amo", "amare", "amavi", "amatum");
