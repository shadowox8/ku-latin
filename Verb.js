/**
 * Creates a Verb object.
 *
 * @param ch The chapter of Wheelock (7 ed.) in which the verb is
 *           introduced. Else set as "0".
 * @param conj The conjugation of the verb. Integer 1-4 or string "3io" else
 *             set as "0".
 * @param p1 The first principal part. p2 is the second, etc.. Leave blank if
 *           no principal part exists. At least one of the four principal
             parts must be given.
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