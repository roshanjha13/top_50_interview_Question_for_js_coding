let str1 = "listen";
let str2 = "silenn";

function anagram(str1,str2) {
    if (str1.length != str2.length) return null;
    let freq1 = {}

    let freq2 = {}

    for (const el of str1) {
        freq1[el] = (freq1[el] || 0) +1 
    }

    for (const el of str2) {
        freq2[el] = (freq2[el] || 0) +1 
    }    

    const keys1 = Object.keys(freq1);
    
    for (const key of keys1) {
        if (freq1[key] !== freq2[key]) {
            return false
        }
    }

    return true



}

console.log(anagram(str1,str2));