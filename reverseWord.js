let str = "Hello bhai kaise ho";

function reverseWord(str) {
    let res = str.split(' ');
    let i = 0;
    let j = res.length-1

    while (i < j) {
        [res[i],res[j]] = [res[j],res[i]];
        i++;
        j--;
    }

    return res.join(" ")
    
    
}

console.log(reverseWord(str));