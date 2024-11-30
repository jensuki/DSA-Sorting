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
    // base case: left subarray has more than 2 elements and needs to be partitioned
    if (left < right) {
        // split it
    }
}

module.exports = quickSort;