const selection_sort = (arr) => {
    for (i = 0; i < arr.length; i++) {
        minIdx = i
        // Get smallest number
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        // Swap
        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
    }
    return arr
}

console.log(selection_sort([0, 5, -4, 7, -3, 0]))
