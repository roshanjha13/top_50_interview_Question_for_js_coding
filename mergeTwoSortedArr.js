let arr1 =  [1, 3, 5];
let arr2 =  [2, 4, 6];

function mergeTwoSortedArr(arr1,arr2) {
    let res = []

    let i  = 0
    let j = 0

    while (i < arr1.length || j < arr2.length) {
        if (i === arr1.length) {
            res.push(arr2[j]);
            j++;
        } else if (j === arr2.length) {
            res.push(arr1[i]);
            i++;
        } else if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++            
        } else {
            res.push(arr2[j]);
            j++            
        }
    }
    
    return res
    
}

console.log(mergeTwoSortedArr(arr1,arr2));
