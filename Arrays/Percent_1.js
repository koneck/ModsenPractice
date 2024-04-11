function Percent(numbers) {
  const newNumber = [];

  for (let number of numbers) {
      const newNumbers = number * 1.1;
      newNumber.push(newNumbers);
  }

  return newNumber;
}

const numbers = [10, 20, 30, 40];
const newNumber = Percent(numbers);
console.log(newNumber);
