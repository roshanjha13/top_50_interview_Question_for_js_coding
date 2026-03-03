let str = "programming"

function removeDuplicateStr(str) {
    let rmDupStr = "";
    
    let set = new Set();

    for (let i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            rmDupStr += str[i]
            set.add(str[i])
        }
    }

    return rmDupStr
    
    
}

console.log(removeDuplicateStr(str))