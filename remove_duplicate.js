//[1,2,2,,3,4,4,5]-->[1,2,3,4,5]

function removeDuplicate(arr) {
    let set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i])
        }        
    }

    return [...set];
    
}

// let ans = removeDuplicate([1,2,2,3,4,4,5])

console.log(removeDuplicate([1,2,2,3,4,4,5]))
