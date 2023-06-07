import renderToDom from '../utils/renderToDom';

const filterBtn = () => {
  const domString = `
    <div class="d-flex justify-content-evenly filter-btns">
      <button id="html" type="button" class="btn btn-outline-light">HTML</button>
      <button id="javascript" type="button" class="btn btn-outline-light">JavaScript</button>
      <button id="css" type="button" class="btn btn-outline-light">CSS</button>
    </div>
  `;
  renderToDom('#filters', domString);
};

export default filterBtn;
