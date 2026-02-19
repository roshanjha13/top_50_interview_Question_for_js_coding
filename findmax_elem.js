//[1,2,2,,3,4,8,4,5]-->8


let arr = [1,2,2,3,4,8,4,5]
//t.c=o(n),s.c=o(1)
function maxElem(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];            
        }
    }
    
    return max;    
}


console.log(maxElem(arr));
