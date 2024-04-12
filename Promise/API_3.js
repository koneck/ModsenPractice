function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Ошибка HTTP: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          });
  });
}

function fetchMultipleAPIs(urls) {
  const promises = urls.map(url => fetchDataFromAPI(url));
  return Promise.all(promises);
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/comments?postId=1'
];

fetchMultipleAPIs(apiUrls)
  .then(results => {
      console.log("Объединенные результаты:", results);
  })
  .catch(error => {
      console.error("API:", error);
  });
