/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/let final = (string) => {
  return string.split("").sort().join("");
}

function isAnagram(str1, str2) {
  if (final(str1) == final(str2)) {
    return true;
  } else {
    return false;
  }
}
// let ans=isAnagram("shanu","anush")
// console.log(ans);
module.exports = isAnagram;
