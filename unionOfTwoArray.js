// let arr1 =  [1, 2, 3];
// let arr2  = [2, 3, 4];

// function unionOfTwoArr(arr1,arr2) {
//     //my approach
//     // let res = [];
//     // let set = new Set();

//     // let i  = 0
//     // let j = 0

//     // while (i < arr1.length || j < arr2.length) {
//     //     res.push(arr1[i]);
//     //     res.push(arr2[j]);
//     //     i++;
//     //     j++
//     // }

//     // for (let i = 0; i < res.length; i++) {
//     //     if (!set.has(res[i])) {
//     //         set.add(res[i])
//     //     }
//     // }

//     // return [...set];   

// }

// console.log(unionOfTwoArr(arr1,arr2));


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function unionOfTwoSortedArr(arr1, arr2) {
    let i = 0, j = 0;
    let res = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
            j++;
        } else { // equal
            if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
            i++;
            j++;
        }
    }

    // Append remaining elements
    while (i < arr1.length) {
        if (res[res.length - 1] !== arr1[i]) res.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        if (res[res.length - 1] !== arr2[j]) res.push(arr2[j]);
        j++;
    }

    return res;
}

console.log(unionOfTwoSortedArr(arr1, arr2));