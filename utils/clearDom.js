const clearDom = () => {
  document.querySelector('#form-page').innerHTML = '';
  document.querySelector('#entries-page').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
  // document.querySelector('#sort').innerHTML = '';
};

export default clearDom;
