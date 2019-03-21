// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //clean up two strings to keep only characters
  //convert them to lowercase
  //check the length of two string if they are the same
  //if not return false
  //if true - check all the letters in stringA include in stringB
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    // iterate over aCharMap
    for (let char in aCharMap) {
      if (aCharMap[char] !== bCharMap[char]) {
        return false;
      }
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

module.exports = anagrams;

function anagram(a, b) {
  return cleanString(a) === cleanString(b);
}
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .split("")
    .join("");
}
