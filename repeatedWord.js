let str = "I am learning Node js and I am enjoying Node js"

function repeatedWord(str) {
    str = str.toLowerCase()
    let arr = str.split(" ");
    let obj = {}
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {            
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;

            if (obj[arr[i]] === 2) {
                res.push(arr[i])
            }
        }
        
    }

    return res.join(" ");   
}

console.log(
 repeatedWord(str))