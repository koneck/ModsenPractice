function firstNonRepeatingSymbol(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

let str = "aaaaaaaaafcccccc";
console.log(firstNonRepeatingSymbol(str));
