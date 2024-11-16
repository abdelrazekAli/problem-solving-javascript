/*Given an unsorted integer array nums. Return the smallest positive integer
 that is not present in nums*/

const first_missing_positive = (nums) => {
    const maxNum = Math.max(...nums)

    if (maxNum <= 0) { return 1 }
    for (let i = 1; i <= maxNum + 1; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}

console.log(first_missing_positive([1, 2, 0])) // 3
console.log(first_missing_positive([3, 4, -1, 1])) // 2