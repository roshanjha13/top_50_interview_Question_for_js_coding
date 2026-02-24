let arr = [1, 2, 3, 2, 4, 2] ;
let n = 2 ;

// function removeSpecificElem(arr,n) {
//     let ans = arr.filter(x=>x !=n)

//     console.log(ans);
    
// }

// console.log(removeSpecificElem(arr,n));

function removeSpecificElem(arr,n) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != n) {
            arr[j] = arr[i]
            j++
        }        
    }

    arr.length = j;
    return arr
    
}

console.log(removeSpecificElem(arr,n));
