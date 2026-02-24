let arr = [1,1,2,3,2,3,5]

function xyz(arr){
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i],map.get(arr[i])+1)
        } else {
            map.set(arr[i],1)
        }
        
    }

        
}

console.log(xyz(arr));
