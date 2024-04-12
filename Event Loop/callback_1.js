function delayCallback(callback) {
  setTimeout(callback, 2000);
}

function callback() {
  console.log("задержка в 2 секунды");
}

delayCallback(callback);
