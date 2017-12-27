// Coded by Raman Choudhary @ramancodians
(function(){
  var urlList = []
  var $links = document.querySelectorAll('import');

  $links
  .forEach((x) => {
    fetch(
      x.getAttribute('href'),
      { method: 'GET' }
    )
    .then(res => res.text())
    .then(res => {
      x.innerHTML = res;
    })
    .catch(error => {
      throw Error(error)
    })
  });
})(window)
