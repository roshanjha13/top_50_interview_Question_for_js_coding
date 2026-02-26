// let name = "roshan";

// function reverseStr(name) {
//     let arr = name.split('');
//     let i = 0;
//     let j = arr.length - 1;

//     while (i < j) {
//         [arr[i],arr[j]] = [arr[j],arr[i]];
//         i++;
//         j--;
//     }

//     return arr.join('')
    
// }

// console.log(reverseStr(name));


let name = "roshan";

function reverseStr(name) {
    let reverseStr = '';

    for (let i = name.length-1; i >= 0; i--) {
        reverseStr = reverseStr +name[i]
    }
    
    return reverseStr;
}

console.log(reverseStr(name));
