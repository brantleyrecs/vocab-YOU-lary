import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a id="home-btn" class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a id="create-entry-btn" class="nav-link active" aria-current="page" href="#">Create Entry</a>
            </li>
          </ul>
          <button id="logout-btn" type="button" class="btn btn-danger">logout</button>
        </div>
      </div>
    </nav>
  `;

  renderToDom('#navbar', domString);
};

export default navBar;
