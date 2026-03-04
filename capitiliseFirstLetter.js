let str = "Hello bhai kaise ho";

function capitilizeFirstLetter(str) {
    let res = str.split(' ');
    
    
    let ans = res.map(x=>x[0].toUpperCase()+x.slice(1));

    return ans.join(' ');
    
    
}

console.log(
 capitilizeFirstLetter(str)

);