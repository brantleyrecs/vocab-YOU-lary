import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-div">
    <div id="navbar"></div>
    <div id="login-page"></div>
    <div id="filters"></div>
    <div id="entries-page"></div>
    <div id="form-page"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
