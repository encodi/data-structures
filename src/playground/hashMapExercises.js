/*
Write a function that returns the intersection of two arrays.
The intersection is a third array that contains all values contained within
the first two arrays.
For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].
Your function should have a complexity of O(N).
(If your programming language has a built-in way of doing this,
  don’t use it. The idea is to build the algorithm yourself.)
*/
function intersectionArrays(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];
  let arr = [];
  let nHashMap = {};

  for (const element of arr1) {
    nHashMap[element] = (nHashMap[element]) ? nHashMap[element] + 1 : 1;
  }

  for (const element of arr2) {
    nHashMap[element] = (nHashMap[element]) ? nHashMap[element] + 1 : 1;
  }

  for (const key in nHashMap) {
    const element = nHashMap[key];
    if (element > 1) {
      arr.push(key);
    }
  }

  return arr;
}

// console.log(intersectionArrays([1,2,3,4,5], [0,2,4,6,8]));

/*
Write a function that accepts an array of strings and returns the first duplicate value
it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the
function should return "c", since it’s duplicated within the array.
(You can assume that there’s one pair of duplicates within the array.)
Make sure the function has an efficiency of O(N).
*/
function hasCharacterDuplicate(strArr) {
  // If is not valid array, return ''
  // Loop strArr and create simple hashmap w counter like ['a': 1, 'b': 1...]
  //  IF repeated key is found return 'key' and stop looping
  //  ELSE continue until end of strArr
  // return '';
  if (!strArr.length) return '';
  let duplicatedStr = {};

  for (const char of strArr) {
    if (duplicatedStr[char]) return char;
    duplicatedStr[char] = 1;
  }

  return '';
}

// console.log(hasCharacterDuplicate(["a", "b", "e", "d", "c", "a", "f"]));

/*
Write a function that accepts a string that contains all the letters of the alphabet
except one and returns the missing letter. For example, the string,
 "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet
 except the letter, "f". The function should have a time complexity of O(N).
*/
function alphabetMissingLetter(str) {
  if (!str.length) return '';
  // If not valid str, return ''
  // Create an alphabet hashmap
  // Loop through the str
  //   IF character exists in alphabet hashmap, remove it
  //   ELSE ignore it
  // return the first letter in the alphabet hashmap that still there
  let alphabetHashMap = {};
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  alpha.map((x) => {
    alphabetHashMap[String.fromCharCode(x)] = true;
  });
  let i = 0;
  let char;
  while (i < str.length) {
    char = str[i].toUpperCase();
    if (alphabetHashMap[char]) delete alphabetHashMap[char];
    i++;
  }

  return alphabetHashMap;
}

// console.log(alphabetMissingLetter('the quick brown box jumps over a lazy dog'));

/**
  Write a function that returns the first non-duplicated character in a string.
  For example, the string, "minimum" has two characters that only exist
    once—the "n" and the "u", so your function should return the "n",
    since it occurs first. The function should have an efficiency of O(N).
 */
function firstNonDuplicatedChar(str) {
  // Validate str

}