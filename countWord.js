let str = 'I am   learning Node js'

let ans = str.split(" ")

let len = 0

for (let i = 0; i < ans.length; i++) {
    if (ans[i]) {
        len++
    }
    
}

console.log(len);
