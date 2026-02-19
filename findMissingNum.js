// arr = [1, 2, 4, 5, 6]
// n = 6

function missingNum(arr,n) {
    let total = (n*(n+1))/2
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]        
    }
    
    let ans = total - sum

    return ans
    
}

console.log(missingNum([1, 2, 4, 5, 6] ,6));
