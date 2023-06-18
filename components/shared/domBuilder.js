import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-div">
    <div id="navbar"></div>
    <div id="login-page"></div>
    <div id="filters"></div>
    <div id="sorting"></div>
    <div id="entries-page" class="d-flex justify-content-evenly flex-wrap"></div>
    <div class="position-relative">
      <div id="form-page" class="w-50 p-3"></div>
    </div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
