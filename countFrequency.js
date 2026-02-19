let arr = [1,2,2,3,1,4];

//t.c = o(n),s.c= o(n)

function freqCounter(arr) {
    if(arr.length == 0) return false
    let freq = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (freq.has(arr[i])) {
            freq.set(arr[i],freq.get(arr[i]) + 1)
        } else { 
            freq.set(arr[i],1)
        }
    }

    return freq
}

console.log(freqCounter(arr));
