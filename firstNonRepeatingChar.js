function handldeNonRepeatingChar(string) {
    let count = {};

    for (char of string) {
        if (count[char]) {
            count[char]++
        } else {
            count[char] = 1;
        }
    }

    for (char of string) {
        if (count[char] == 1) {
            return char;
        }
    }
    
    return null

}

console.log(handldeNonRepeatingChar("nishanth"))