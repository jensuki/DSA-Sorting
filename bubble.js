function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false; // no swaps yet
        for (let j = 0; j < arr.length - i - 1; j++) {
            // inner loop compares adjacent elements
            if (arr[j] > arr[j + 1]) {
                // swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // swap occurred
            }
        }
        if (!swapped) break; // exit early if no swaps were made in current pass
    }
    return arr;
}

module.exports = bubbleSort;