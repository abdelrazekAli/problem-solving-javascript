/*
    - Given an integer array nums, move all 0's to the end of it
     while maintaining the relative order of non-zero elements.

    - Note that you must do this in-place without making
      a copy of the array.

    - Example 1:
        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]
*/

const move_zeros = (nums) => {
    let lastNonZeroIdx = 0

    // Move non zero elements to the top of array
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroIdx++] = nums[i]
        }
    }

    // Make elements equal to zero from the last non zero element 
    for (; lastNonZeroIdx < nums.length; lastNonZeroIdx++) {
        nums[lastNonZeroIdx] = 0
    }
    return nums
}
