function insertionSort(arr) {
    // start loop at index 1
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // store value of elememet to be inserted
        let j = i - 1; // start comparing with last element in 'sorted';

        // move sorted elements to right side if greater than current value
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // shift element one position to right
            j--; // move to previous element
        }
        // after while loop shifted all larger elements to right
        // insert current element
        arr[j + 1] = current;
    }
    return arr;
}

module.exports = insertionSort;