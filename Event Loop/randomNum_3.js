function randomNum() {
  return Math.floor(Math.random() * 10) + 1;
}

function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = randomNum();
    console.log(randomNumber);

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve("не ошибка");
      } else {
        reject("ошибка");
      }
    }, randomNumber * 1000);
  });
}

randomPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
