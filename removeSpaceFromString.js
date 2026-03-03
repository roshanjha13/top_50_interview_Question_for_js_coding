let str = "  Hello   World  "

function removeSpaces(str) {    
    let rmSpcStr = "";
    
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch !== " ") {
            rmSpcStr += ch;
        }
    }

    return rmSpcStr;
    
}

console.log(removeSpaces(str));