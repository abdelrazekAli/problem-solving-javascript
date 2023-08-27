/*
    - Given two sorted integer arrays nums1 and nums2,
      merge nums2 into nums1 as one sorted array.

    - The number of elements initalized in nums1 and nums2
      are m and n respectively. 

    - You may assume that nums1 has a size equal to m+n
     
    - Example 1:
        Input: nums1 = [1,2,3,0,0,0], m = 3,
               nums2 = [2,5,6], n = 3
        Output: [1,2,2,3,5,6]
*/

const merge_sorted_array = (nums1, m, nums2, n) => {
    let first = m - 1,
        second = n - 1,
        i = m + n - 1

    while (second >= 0) {
        if (nums2[second] > nums1[first]) {
            nums1[i] = nums2[second]
            second--
        }

        else {
            nums1[i] = nums1[first]
            first--
        }

        i--
    }
    return nums1
}

console.log(merge_sorted_array([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))