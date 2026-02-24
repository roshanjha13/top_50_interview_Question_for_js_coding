let arr = [1, 2, 3, 4, 5]

function reverseArr(arr) {
    if (arr.length == 0) return null
    if (arr.length == 1) return arr

    let i =  0;
    let j = arr.length-1

    while (i<=j) {
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }    

    console.log(arr);
    
}

console.log(reverseArr(arr));
