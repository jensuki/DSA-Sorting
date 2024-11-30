function merge(left, right) {
    const output = []; // store merged and sorted values
    let i = 0; // left array pointer
    let j = 0; // right array pointer

    // while we're in bounds of both array indexes
    while (i < left.length && j < right.length) {
        // compare left and right elements -> add smaller to output array
        if (left[i] < right[j]) {
            output.push(left[i]);
            i++; // move left pointer
        } else {
            output.push(right[j]);
            j++; // move right pointer
        }
    }
    // add remaining from left if any
    while (i < left.length) {
        output.push(left[i]);
        i++;
    }
    // add remaining from right if any
    while (j < right.length) {
        output.push(right[j]);
        j++;
    }
    return output;
}

function mergeSort(arr) {
    // base case: arrays with 0 or 1 elements = already sorted
    if (arr.length <= 1) return arr;

    // else we need to split 'arr' into halves
    const midpoint = Math.floor(arr.length / 2); // midpoint index
    // recursively call mergesort on 'left' and 'right'
    const left = mergeSort(arr.slice(0, midpoint));
    const right = mergeSort(arr.slice(midpoint));

    // finally merge left and right together
    return merge(left, right);


}

module.exports = { merge, mergeSort };