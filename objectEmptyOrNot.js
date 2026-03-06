let obj = { }

function isEmptyObj(obj) {
    let ans = Object.entries(obj).length

    if (ans > 0) {
        return false
    }

    return true

}

console.log(
isEmptyObj(obj))