let str = "programming"

function countStringFreq(str) {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        obj[char] = (obj[char]  || 0) + 1
    }

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
    
    
}

console.log(countStringFreq(str));