// 100% Sure-Proof.

/**
 * Creates a Verb object.
 * @constructor
 * @param {Integer} ch The chapter of Wheelock (7 ed.) in which the verb is introduced. Else -1.
 * @param {Integer|String} conj The conjugation of the verb; 1-4 or "3io". Else -1.
 * @param {String} p1 The first principal part. Leave blank if no pp exists.
 * @param {String} p2 The second principal part. See on `p1`.
 * @param {String} p3 The third principal part. See on `p1`.
 * @param {String} p4 The fourth principal part. See on `p1`.
 */
function Verb(ch, conj, p1, p2, p3, p4) {
	// Placating JSLint...
	"use strict";
	
	this.ch = ch;
	this.conj = conj;
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	this.p4 = p4;
}
