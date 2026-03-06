let str = "hello world"
let oldChar = 'l'
let newChar = 'x'

function replaceWord(str,oldChar,newChar) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == oldChar) {
            res += newChar
        } else {
            res += str[i]
        }
    }

    return res;
}

console.log(replaceWord(str,oldChar,newChar));