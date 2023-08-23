const insertion_sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j,
            currentVal = arr[i]

        /* Move elements that are greater than currentVal,
            to one position ahead of their current position */
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }

        arr[j + 1] = currentVal
    }

    return arr
}

console.log(insertion_sort([9, 1, 5, 2]))
