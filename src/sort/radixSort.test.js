const radixSort = require('./radixSort');
let arrayOfNumbers;

beforeAll(() => {
  arrayOfNumbers = [31231, 4, 23, 3535, 642, 12, 11, 54789, 15430, 6079, 432, 1];
  arrayOfNumbers.reverse();
});

describe('radixSort', () => {
  test('returns the sorted array in ascending order', () => {
    const response = radixSort(arrayOfNumbers);
    expect(response[0]).toEqual(1);
    expect(response[response.length-1]).toEqual(54789);
  });

  test('returns the same array when no sorting happens', () => {
    const response = radixSort([]);
    expect(response.length).toEqual(0);
  });
});
