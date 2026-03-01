let str = "programmingg"

function countStringFreq(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
    
}

console.log(countStringFreq(str));