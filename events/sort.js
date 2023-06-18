import renderToDom from '../utils/renderToDom';

const sortButton = () => {
  const domString = `
    <div id="sort" class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort
  </button>
  <ul class="dropdown-menu">
    <li><a id="most-recent" class="dropdown-item" href="#">Most Recent Add</a></li>
    <li><a id="title" class="dropdown-item" href="#">Alphabetical</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    `;
  renderToDom('#sorting', domString);
};

export default sortButton;
