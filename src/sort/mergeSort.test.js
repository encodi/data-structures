const mergeSort = require('./mergeSort');
let arrayOfStrings;

beforeAll(() => {
  arrayOfStrings = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  arrayOfStrings.reverse();
});

describe('mergeSort', () => {
  test('returns the sorted array in ascending order', () => {
    const response = mergeSort(arrayOfStrings);
    expect(response[0]).toEqual('Alabama');
    expect(response[response.length-1]).toEqual('Wyoming');
  });

  test('returns the same array when no sorting happens', () => {
    const response = mergeSort([]);
    expect(response.length).toEqual(0);
  });
});
