/**
 * Represents a book.
 * @constructor
 * @param {string} a - The title of the book.
 * @param {string} b - The author of the book.
 */
function sum(a, b) {
  return a + b;
}
test('adds 1 + 2 to equal 3', function() {
  return expect(sum(1, 2)).toBe(3);
});
