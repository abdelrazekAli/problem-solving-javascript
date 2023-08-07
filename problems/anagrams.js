/*
    - Given two strings s and t, return true if t is an anagram of s,
      and false otherwise.

    - An Anagram is a word formed by rearranging the letters of a different word,
      typically using all the original letters exactly once.

    - Example 1:
        Input: s = "fast", t = "fats"
        Output: true
*/

// We can solve this problem using HashMap

const isAnagram = (str1, str2) => {
  // Check if length of strings is not equal
  if (str1.length != str2.length) {
    return false;
  }

  let str1Map = new Map(),
    str2Map = new Map()

  // Set the first string Map keys
  for (ch of str1) {
    if (str1Map.has(ch)) {
      keyValue = str1Map.get(ch)
      str1Map.set(ch, keyValue += 1)
    }
    else str1Map.set(ch, 1)
  }

  // Set the second string Map keys
  for (ch of str2) {
    if (str2Map.has(ch)) {
      keyValue = str2Map.get(ch)
      str2Map.set(ch, keyValue += 1)
    }
    else str2Map.set(ch, 1)
  }

  // Check anagrams
  for (el of str1Map) {
    value = str2Map.get(el[0]);
    if (!value || value !== el[1]) return false
  }
  return true
}

