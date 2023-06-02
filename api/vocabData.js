const endPoint = 'https://vocab-you-lary-425b0-default-rtdb.firebaseio.com/';

const getCards = () => new Promise((resolve, reject) => {
  fetch(`${endPoint}/Entries.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })

    .catch(reject);
});

export default getCards;
