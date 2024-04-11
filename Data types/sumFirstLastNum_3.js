function sumFirstLastNum(number) {
  const numStr = String(number);

  const firstNum = parseInt(numStr.charAt(0));

  const lastNum = parseInt(numStr.charAt(numStr.length - 1));

  const sum = firstNum + lastNum;

  console.log(sum);
}

sumFirstLastNum(12345);
