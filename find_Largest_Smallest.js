let arr = [10, 5, 20, 8, 25];

function smallLargest(arr) {

    if (arr.length === 0) return false;

    if (arr.length == 1) return {
        largest : arr[0],
        smallest : arr[0]
    }

    let largest = -Infinity ;
    let smallest = arr[0] ;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i] ;
        }

        if (arr[i] < smallest) {
            smallest = arr[i] ; 
        }
        
    }

    return {
        largest : largest,
        smallest : smallest
    }
    
}

console.log(smallLargest(arr));
