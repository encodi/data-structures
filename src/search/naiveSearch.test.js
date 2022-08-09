const naiveSearch = require('./naiveSearch');
let str;

beforeAll(() => {
  str = 'zomwgomgzaomgt'
});

describe('naiveSearch search', () => {
  test('finds an element and returns the index', () => {
    const response = naiveSearch(str, 'omg');
    expect(response).toEqual(2);
  });

  test('does not find an element and returns -1 when the searched string is not found in an empty string', () => {
    const response = naiveSearch('', 'omg');
    expect(response).toEqual(0);
  });

  test('does not find an element and returns -1 when the pattern and search string are empty', () => {
    const response = naiveSearch('', '');
    expect(response).toEqual(0);
  });
});
