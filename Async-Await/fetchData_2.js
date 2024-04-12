async function fetchDataFromServer1(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Произошла ошибка при загрузке данных с сервера 1: ${error.message}`
    );
  }
}

async function fetchDataFromServer2(url, requestData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Произошла ошибка при загрузке данных с сервера 2: ${error.message}`
    );
  }
}

async function loadDataFromServers() {
  try {
    const dataFromServer1 = await fetchDataFromServer1(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const requestDataForServer2 = { userId: dataFromServer1.userId };
    const dataFromServer2 = await fetchDataFromServer2(
      "https://jsonplaceholder.typicode.com/posts",
      requestDataForServer2
    );
    return { dataFromServer1, dataFromServer2 };
  } catch (error) {
    throw new Error(`Произошла ошибка при загрузке данных: ${error.message}`);
  }
}

loadDataFromServers()
  .then((data) => {
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    console.error(error.message);
  });
