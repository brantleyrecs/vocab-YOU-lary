import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
   

    <nav class="navbar bg-body-tertiary d-flex p-2 p-3 mb-2 bg-info-subtle text-emphasis-info">
      <form class="container-fluid justify-content-between">
        <button id="home-btn" class="btn btn-outline-success me-2" type="button">Home</button>
        <button id="create-entry-btn" class="btn btn-sm btn-outline-secondary" type="button">Create Card</button>
        <div id="logout-btn"></div>
      </form>
    </nav>
  `;

  renderToDom('#navbar', domString);
};

export default navBar;
