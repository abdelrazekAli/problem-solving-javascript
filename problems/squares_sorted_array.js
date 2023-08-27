/*
    - Given a sorted integer nums array ,
      return a sorted array of the squares of each number.

    - Example 1:
        Input: nums = [-4,-1,0,3,10],
        Output: [0,1,9,16,100]
*/

const squares_sorted_array = (nums) => {
    let result = new Array(nums.length),
        resultIdx = result.length - 1,
        left = 0,
        right = nums.length - 1

    while (left <= right) {
        leftSqr = nums[left] * nums[left]
        rightSqr = nums[right] * nums[right]
        if (leftSqr < rightSqr) {
            result[resultIdx] = rightSqr
            right--
        }
        else {
            result[resultIdx] = leftSqr
            left++
        }
        resultIdx--
    }


    return result
}

console.log(squares_sorted_array([-4, -1, 0, 3, 10]))