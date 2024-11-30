function selectionSort(arr) {
    // outer loop: loop through each index (except last element)
    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIndexValue = i; // assume smallest element is at current index

        // inner loop: find the smallest element in the remaining 'unsorted'
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndexValue]) { // if compared eleemnt is less than current index value
                smallestIndexValue = j; // update index position if smaller element is found

            }
        }
        // swap smallest element found with current index element
        if (smallestIndexValue != i) {
            [arr[i], arr[smallestIndexValue]], [arr[smallestIndexValue], arr[i]];
        }

    }
    return arr;
}

module.exports = selectionSort;