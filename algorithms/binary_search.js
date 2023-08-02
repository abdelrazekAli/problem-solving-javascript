const binary_search = (arr, target) => {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If target found at mid, then return it
        if (arr[mid] === target) return mid;

        // Search the left half
        else if (arr[mid] < target) start = mid + 1;

        // Search the right half
        else end = mid - 1;
    }

    return "Not found";
};
