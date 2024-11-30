/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start]; // choose the first element as the pivot
    let pivotIndex = start; // initialize pivot index at start; tracks position

    // loop through rest of array
    for (let i = start + 1; i <= end; i++) {
        // if current element is < pivot value
        if (arr[i] < pivotValue) {
            pivotIndex++; // increment pivot index
            // swap current element with element at pivot index
            [arr[i], arr[pivotIndex]], [arr[pivotIndex], arr[i]];
        }
    }
    // finally swap pivot with element at pivot index
    [arr[start], arr[pivotIndex]], [arr[pivotIndex], arr[start]];

    //return pivot index after partitioning
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case: proceed to split only if current subarray has at least 2 elements
    if (left < right) {
        // partition the array and get pivot index
        let pivotIndex = pivot(arr, left, right);

        // recursively sort left part of array
        quickSort(arr, left, pivotIndex - 1);

        // recursively sort right part of array
        quickSort(arr, pivotIndex + 1, right);

    }
    return arr;
}

module.exports = quickSort;