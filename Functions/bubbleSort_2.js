function bubbleSort(arr) {
  const len = arr.length;
  let swapped;

  do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
  } while (swapped);

  return arr;
}

const unsortedArray = [5, 3, 8, 1, 4];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); 
