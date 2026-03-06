let str = "I am learning JavaScript programming";

function longestWord(str) {
    let word = "";
    let maxWord = ""

    for (let i = 0; i <= str.length; i++) {
        if (str[i] != " " && i < str.length) {
            word += str[i]
        } else {
            if (word.length > maxWord.length) {
                maxWord = word
            }

            word = ""
        }
        
    }

    return maxWord
}

console.log(longestWord(str));
