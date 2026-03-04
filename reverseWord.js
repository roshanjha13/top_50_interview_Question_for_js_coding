let str = "Hello bhai kaise ho";

// function reverseWord(str) {
//     let res = str.split(' ');
//     let i = 0;
//     let j = res.length-1

//     while (i < j) {
//         [res[i],res[j]] = [res[j],res[i]];
//         i++;
//         j--;
//     }

//     return res.join(" ")
    
    
// }

function reverseWord(str) {
    let result = "";
    let word = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            word = str[i] + word;
        } else {
            result += word + " ";
            word = "";
        }
        
    }

    if (word.length > 0) {
        result += word;
    }

    return result.trim();
    
    
}

console.log(reverseWord(str));