// Finding the second largest number in an array
const secondLargest = (arr) => {
    let first = -Infinity
    let second = -Infinity

    for (let num of arr) {
        if (num > first) {
            first = num
        } else if (num > second && num < first) {
            second = num
        }
    }
    return second
}

console.log(secondLargest([12, 35, 35, 2, 10, 10, 34])) // 34