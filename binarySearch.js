let arr = [2,6,8,10] ;
let n = 15 ;

function binarySearch(arr,n) {
    if (arr.length == 0) return arr
    let i = 0;
    let j = arr.length -1

    while (i <= j) {
        mid = Math.floor((i+j)/2);
        if (arr[mid] === n) {
            return mid
        } else if (arr[mid] > n) {
            i = mid + 1
        } else {
            j =  mid - 1
        }
    }

    return false;
}

console.log(binarySearch(arr,n))