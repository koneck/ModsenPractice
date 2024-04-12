async function fetchDataFromServer(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      throw new Error(`Произошла ошибка: ${error.message}`);
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchDataFromServer(apiUrl)
  .then(data => {
      console.log("Полученные данные:", data);
  })
  .catch(error => {
      console.error(error.message);
  });
