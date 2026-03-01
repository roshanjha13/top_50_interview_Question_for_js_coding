let str = "programmingg"

function mostFrequentElemInArr(str) {
    let obj = {}
    let maxCount = 0;
    let maxChar = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        obj[char] = (obj[char] || 0) + 1;
    }

    // for (let i = 0; i < str.length; i++) {
    //     if (obj[str[i]] > maxCount) {
    //         maxCount = obj[str[i]]
    //     }
    // }

    // console.log(maxCount);

    for (const key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            maxChar = key;
        }
        
    }
    
    return { char : maxChar, count: maxCount }

    
}

console.log(mostFrequentElemInArr(str));