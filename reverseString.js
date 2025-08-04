const reverseString = (str) => {
  let reversed_string = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversed_string += str[i];
  }
  return reversed_string;
};
console.log(reverseString("omg"));
