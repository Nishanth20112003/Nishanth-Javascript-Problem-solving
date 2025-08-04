function isPalindrom(string) {
  function reverseString(str) {
    let reversedString = "";
    for (i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  const cleanedString = string.toLowerCase();
  return cleanedString === reverseString(cleanedString);
}
console.log(isPalindrom("radar"));
