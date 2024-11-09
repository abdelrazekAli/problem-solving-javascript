const threeSum = (nums) => {
    const result = [];
    const arrSize = nums.length;
    nums.sort((a, b) => a - b); // Sort the array for easier duplicate checking

    for (let i = 0; i < arrSize - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = arrSize - 1;

        while (left < right) {
            const partialSum = nums[i] + nums[left] + nums[right];

            if (partialSum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move past the current left and right to continue searching
                left++;
                right--;
            } else if (partialSum > 0) {
                right--; // Decrease the sum
            } else {
                left++; // Increase the sum
            }
        }
    }

    return result;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
