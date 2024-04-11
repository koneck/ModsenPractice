function LastSymbol(str) {
  let length = str.length;

  length > 0 ? console.log(str.charAt(length - 1)) : console.log("Строка пуста");
}

LastSymbol("qwertyu");
