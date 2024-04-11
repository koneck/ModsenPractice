function sumFirstHalf(numbers) {
  let middleIndex = Math.ceil(numbers.length / 2);

  let firstHalf = numbers.slice(0, middleIndex);

  let sum = 0;
  firstHalf.map((num) => (sum += num));

  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumFirstHalf(numbers));
