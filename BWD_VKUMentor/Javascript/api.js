;(function () {
  return new Promise((resolve) => {
    if (window.axios) {
      return resolve(window.axios);
    }
    var d = document, jqr, ref = d.getElementsByTagName('body')[0];
    jqr = d.createElement('script');
    jqr.async = true;
    jqr.src = 'https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js';
    jqr.onload = function() {
      return resolve(window.axios);
    };
    ref.appendChild(jqr, ref);
  })
})()

/**
 * Define LienHeApi class
 */
class LienHeApi {
  static getLienHe(params = {}) {
    return axios.get('http://localhost:8000/api/lien-he', { params })
  }
}

/**
 * Listen click event on button with class "find" to call API
 */
document.querySelector('button.find').addEventListener('click', function (e) {
  e.preventDefault() // prevent something like form submit
  e.target.disabled = true
  LienHeApi.getLienHe()
    .then((res) => {
      console.log(res.data) // TODO: render data to view
    })
    .finally(() => {
      e.target.disabled = false
    })
})
