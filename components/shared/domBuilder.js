import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="main-div">
    <div id="login-page"></div>
    <div id="entries-page"></div>
    <div id="form-page"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
