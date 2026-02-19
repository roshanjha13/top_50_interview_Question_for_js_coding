//[1,2,2,9,3,4,8,4,5]-->8
//t.c=o(n),s.c=o(n)
let arr = [1,2,2,9,3,4,8,4,5];


function maxElem(arr) {
    let istMax = -Infinity;
    let secMax = -Infinity;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > istMax) {
            secMax = istMax;
            istMax = arr[i]
        } else if (arr[i] > secMax && arr[i] <= istMax) {
            secMax = arr[i]
        }
    }
    
    return secMax
    
}


console.log(maxElem(arr));