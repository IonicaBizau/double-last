// Dependencies
var LastChar = require("last-char");

/**
 * DoubleLast
 * Doubles the last letter.
 *
 * @name DoubleLast
 * @function
 * @param {String} input The input string.
 * @param {Array} letters An array of letters: if the last letter of the input
 * is not found in this list, it will *not* be doubled.
 * @return {String} The modified string.
 */

module.exports = function DoubleLast(input, letters) {
    var last = LastChar(input);
    if (!letters || ~letters.indexOf(last)) {
        return input + last;
    }
    return input;
};
