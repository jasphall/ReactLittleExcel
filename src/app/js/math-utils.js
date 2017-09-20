/**
 * Sprawdzenie, czy argument jest liczbą
 * @param n
 * @returns {boolean}
 */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = {
    isNumber: isNumber
};