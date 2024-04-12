function asyncOperation(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Результат "${data}"`);
    }, Math.random() * 1000);
  });
}

function sequentialAsyncOperations(dataArray) {
  let sequence = Promise.resolve();
  dataArray.forEach((data) => {
    sequence = sequence.then((previousResult) => {
      console.log(previousResult);
      return asyncOperation(data);
    });
  });
  return sequence;
}

const dataSeries = ["data1", "data2", "data3", "data4"];

sequentialAsyncOperations(dataSeries)
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
