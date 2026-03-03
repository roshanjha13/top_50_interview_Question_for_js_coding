let arr = [1, [2, 3], [4, [5, 6]], 7]

function flaten(arr) {
    let res = []
    for (const el of arr) {
        if (Array.isArray(el)) {
            res.push(...flaten(el))
        } else {
            res.push(el)
        }
    }

    return res

}

console.log(flaten(arr));
