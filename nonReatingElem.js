let arr = [1,1,2,3,2,3,5];

function nonRepeatingElem(arr){
    let map = new Map();

    // Step 1: Count frequency
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    // Step 2: Find first non-repeating
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i]) === 1) {
            return arr[i];
        }
    }

    return null; // agar koi non-repeating na mile
}

console.log(nonRepeatingElem(arr));