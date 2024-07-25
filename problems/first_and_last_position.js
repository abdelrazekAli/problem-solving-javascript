/*
    - Find First and Last Position of Element in Sorted Array

    - Given a sorted array in non-decreasing order,
      find the starting and ending position of a given target value.

    - If target is not found in the array, return [-1, -1].

    - Example 1:
        Input: arr = [5,7,7,8,8,10], target = 8
        Output: [3,4]
*/

// We can solve this problem using binary search

// Find first index
findFirst = (arr, target) => {
    if (arr[0] === target) return 0;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target && arr[mid - 1] < target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

// Find last index
const findLast = (arr, target) => {
    if (arr[arr.length - 1] === target) return arr.length - 1;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target && arr[mid + 1] > target) return mid;
        else if (arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
};

// Find first and last
const findFirstAndEnd = (arr, target) => {
    if (arr.length === 0 || arr[0] > target) return [-1, -1];

    const first = findFirst(arr, target);
    const end = findLast(arr, target);

    return [first, end];
};
