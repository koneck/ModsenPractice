async function dataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("время истекло");
    } else {
      throw new Error(`ошибка: ${error.message}`);
    }
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const timeout = 3000;

dataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log("данные:", data);
  })
  .catch((error) => {
    console.error(error.message);
  });
