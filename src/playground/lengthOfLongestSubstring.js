/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let longestStr = '';
  let currentStr = '';

  // abcabcbb

  for (let i = 0; i < s.length; i++) { // NOSONAR
    let letter = s[i];
    let index = currentStr.indexOf(letter);

    if(index > -1) {
      if(currentStr.length > longestStr.length) longestStr = currentStr;
      currentStr = currentStr.slice(index + 1) + letter;
    } else {
      currentStr += letter;
    }
  }
  if (currentStr.length > longestStr.length) longestStr = currentStr;
  return longestStr.length;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

