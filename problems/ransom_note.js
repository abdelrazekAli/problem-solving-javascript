/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed
 by using the letters from magazine and false otherwise.

Example 1:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 2:
Input: ransomNote = "aab", magazine = "baa"
Output: true
*/

// Function to convert string into hashMap
const strMap = (str) => {
    const strMap = new Map();
    for (let char of str) {
        if (strMap.has(char)) {
            let keyVal = strMap.get(char);
            strMap.set(char, keyVal + 1);
        } else { strMap.set(char, 1); }
    }
    return strMap
};

const canConstruct = (ransomNote, magazine) => {
    const magazineMap = strMap(magazine),
        ransomNoteMap = strMap(ransomNote);
    for (let [key, val] of ransomNoteMap) {
        let magVal = magazineMap.get(key)
        if (!magVal || magVal < val) { return false }
    }
    return true
};