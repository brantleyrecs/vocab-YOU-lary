import renderToDom from '../utils/renderToDom';

const filterBtn = () => {
  const domString = `
    <button id="html" type="button" class="btn btn-outline-light">HTML</button>
    <button id="css" type="button" class="btn btn-outline-light">CSS</button>
    <button id="javascript" type="button" class="btn btn-outline-light">JavaScript</button>
  `;
  renderToDom('#filters', domString);
};

// const filter = (language) => new Promise((resolve, reject) => {
//   fetch(`${endPoint}/Entries.json?orderBy="language"&equalTo="${language}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((Response) => Response.json())
//     .then((data) => {
//       if (data) {
//         resolve(Object.values(data));
//       } else {
//         resolve([]);
//       }
//     })

//     .catch(reject);
// });

export default filterBtn;
