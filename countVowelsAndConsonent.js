let str = "hello";

function countVowelAndConsonent(str) {
    let vowel = ['a','e','i','o','u'];
    let vowelCount = 0;
    let vowelStr = "";

    let consonentCount = 0;
    let consonentStr = "";


    let smallCaseStr = str.toLowerCase();

    for (let i = 0; i < smallCaseStr.length; i++) {
        let ch = smallCaseStr[i];
        if (ch === " ") continue;

        if (ch >= 'a' && ch <= 'z') {
            if(vowel.includes(ch)){
                vowelStr +=ch
                vowelCount++;
            } else {
                consonentStr +=ch
                consonentCount++;
            }
        }
    }

    return {
        vowelStr,
        vowelCount,
        consonentStr,
        consonentCount
    };
    
    
}

console.log(countVowelAndConsonent(str))