function sumSquares(numbers) {
  let squares = numbers.map((num) => num * num);

  let sum = 0;
  squares.map((num) => (sum += num));

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumSquares(numbers));
