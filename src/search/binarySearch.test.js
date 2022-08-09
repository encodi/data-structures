const binarySearch = require('./binarySearch');
let arrayOfStrings;

beforeAll(() => {
  arrayOfStrings = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
});

describe('binarySearch search', () => {
  test('finds an element and returns the index', () => {
    const response = binarySearch(arrayOfStrings, 'Washington');
    expect(response).toEqual(55);
  });

  test('does not find an element and returns -1 when the array and search string are empty', () => {
    const response = binarySearch([], '');
    expect(response).toEqual(-1);
  });

  test('does not find an element and returns -1 when the search string is empty', () => {
    const response = binarySearch(arrayOfStrings, '');
    expect(response).toEqual(-1);
  });

  test('does not find an element and returns -1 when search string is not in the array', () => {
    const response = binarySearch(arrayOfStrings, 'john');
    expect(response).toEqual(-1);
  });
});
