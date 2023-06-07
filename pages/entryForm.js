import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `edit-card--${obj.firebaseKey}` : 'submit-card'}">
      <div class="mb-3">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="cardHelp" placeholder="Card Title" value="${obj.title || ''}" required>
      </div>
      <div class="mb-3">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 150px" value="${obj.definition || ''}" required></textarea>
      </div>
      <select id="language" class="form-select" aria-label="Default select example">
        <option selected>Pick A Language</option>
        <option value="html" ${obj.language ? 'checked' : ''}>HTML</option>
        <option value="css" ${obj.language ? 'checked' : ''}>CSS</option>
        <option value="javascript" ${obj.language ? 'checked' : ''}>Javascript</option>
      </select>
      <button id="submit-card" type="submit" class="btn btn-outline-light me-2 submit-btn">Submit</button>
    </form>
  `;

  renderToDom('#form-page', domString);
};

export default addCardForm;
