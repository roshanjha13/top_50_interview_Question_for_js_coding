let str = "hello"
let char = "l"

function findIndex(str,char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            return i
        }
    }

    return -1;
}

console.log(findIndex(str,char));
