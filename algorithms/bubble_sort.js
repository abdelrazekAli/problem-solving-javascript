const bubble_sort = (arr) => {
    let count = 0,
        swap = true;

    while (swap) {
        swap = false;
        for (i = 0; i < arr.length - count; i++) {
            j = i + 1;
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swap = true;
            }
        }
        count++;
    }
    return arr;
};

console.log(bubble_sort([0, 5, 4, 7, 3, 0]))
