// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const is_string_palindrome = (str) => {
    // Check if string length is less than 2 chars
    if (str.length < 2) return true

    // Remove all non-alphanumeric chars
    const sanitize_str = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    return sanitize_str.split("").reverse().join("") === sanitize_str
}

console.log(is_string_palindrome("A man, a plan, a canal: Panama")) //true

console.log(is_string_palindrome("race a car")) //false

/* Also we can solve this problem using 2 pointer, 
one at the beginning, and the other at the end then loop and compare 
if they are not equal return false
*/
