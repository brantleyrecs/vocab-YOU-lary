import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { filterBtn } from '../events/filters';

const emptyCards = () => {
  const domString = '<h1>No vocab-YOU-lary Cards</h1>';
  renderToDom('#entries-page', domString);
};

const viewCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" id="edit-card-btn--${item.firebaseKey}" class="card-link">Edit</a>
          <a href="#" id="delete-card--${item.firebaseKey}" class="card-link">Delete</a>
        </div>
      </div>
    `;
  });

  filterBtn();
  renderToDom('#entries-page', domString);
};

export { emptyCards, viewCards };
