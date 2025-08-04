function isAnagram(str1, str2) {
    let firstString = str1.split("").sort().join()
    console.log(firstString)
    let secondString = str2.split("").sort().join().toLowerCase();
    return firstString === secondString;
}
console.log(isAnagram("silent", "listen")); 