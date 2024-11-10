// An integer is a palindrome when it reads the same forward and backward.

// Solution with converting number to string
const isPalindrome = (num) => {
    return +num.toString().split("").reverse().join('') === num
}

// Solution using Math
const isPalindrome2 = (num) => {
    let copy = num
    let reverse = 0

    while (copy > 0) {
        let digit = copy % 10
        copy = Math.trunc(copy / 10)
        reverse = reverse * 10 + digit
    }
    return reverse === num
}


