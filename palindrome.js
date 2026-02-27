let str = "madam";

function  palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let i = 0 ;
    let j = str.length -1;
    while (i<j) {
        if (str[i]==str[j]) {
            i++;
            j--
        } else {
            return false
        }
    }

    return true
}

console.log(palindrome(str));