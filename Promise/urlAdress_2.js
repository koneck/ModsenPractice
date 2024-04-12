function fetchURL(url) {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Ошибка HTTP: ${response.status}`);
              }
              return response.text();
          })
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          });
  });
}

function fetchParallel(urls) {
  const promises = urls.map(url => fetchURL(url));
  return Promise.all(promises);
}
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1/comments',
  'https://jsonplaceholder.typicode.com/comments?postId=1',
  'https://jsonplaceholder.typicode.com/posts/1'
];

fetchParallel(urls)
  .then(results => {
      console.log("Содержимое URL-адреса:", results);
  })
  .catch(error => {
      console.error("ошибка", error);
  });
