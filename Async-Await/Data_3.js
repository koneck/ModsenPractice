async function fetchDataFromServer(url) {
  const response = await fetch(url);
  if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  return response.json();
}

async function fetchParallel(urls) {
  try {
      const promises = urls.map(url => fetchDataFromServer(url));
      return await Promise.all(promises);
  } catch (error) {
      throw new Error(`Произошла ошибка : ${error.message}`);
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

fetchParallel(urls)
  .then(results => {
      console.log("Данные серверов:", results);
  })
  .catch(error => {
      console.error(error.message);
  });
