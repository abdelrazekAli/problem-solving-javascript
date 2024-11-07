// Two-Pointer Technique for Sorted Array
// Time Complexity: O(n), since we only pass through the array once with the two pointers.
// Space Complexity: O(1), since we only use two pointers and no additional data structures.
function twoSumSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++; // Move left pointer to the right to increase sum
        } else {
            right--; // Move right pointer to the left to decrease sum
        }
    }
}

// HashMap Technique for not Sorted Array
// Time Complexity: O(n), since we only loop through the array once.
// Space Complexity: O(n), for the hash map to store the elements and their indices.
function twoSumNotSorted(nums, target) {
    const numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (numsMap.has(complement)) {
            return [map.get(complement), i]
        }
        // Store current number and its index in the map
        numsMap.set(nums[i], i)

    }

    return [];
}