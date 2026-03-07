let str = 'aaabb'

function strCompression(str) {
    let obj = {} ; 
    let res = '' ;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        obj[ch] = (obj[ch] || 0) + 1

    }

    for (const key in obj) {
        res += key + obj[key]
    }

    return res
    
}

console.log((strCompression(str)))