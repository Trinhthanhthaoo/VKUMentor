// ;(function () {
//   return new Promise((resolve) => {
//     if (window.axios) {
//       return resolve(window.axios);
//     }
//     var d = document, jqr, ref = d.getElementsByTagName('body')[0];
//     jqr = d.createElement('script');
//     jqr.async = true;
//     jqr.src = 'https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js';
//     jqr.onload = function() {
//       return resolve(window.axios);
//     };
//     ref.appendChild(jqr, ref);
//   })
// })()

/**
 * Define LienHeApi class
 */
class LienHeApi {
  static getLienHe(params = {}) {
    return axios.get("http://localhost:8000/api/lien-he", { params });
  }
}

class TaiLieuCongDongApi {
  static getAll(params = {}) {
    // Use params to send query parameters to the API endpoint
    return axios.get("http://127.0.0.1:8000/api/tailieucongdong", { params });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".find"); // Button element
  const inputName = document.querySelector(".EnterName"); // Input field for name
  const selectKhoa = document.querySelector(".Khoa"); // Select field for Khoa
  const selectNganh = document.querySelector(".Ngành"); // Select field for Ngành
  const selectMon = document.querySelector(".Môn"); // Select field for Môn

  const testFillCard = document.querySelector(".card-container"); // Container to display cards

  searchButton.addEventListener("click", () => {
    // Get input values
    const keyword = inputName.value;
    const khoa = selectKhoa.value;
    const nganh = selectNganh.value;
    const mon = selectMon.value;

    // Prepare parameters to be sent to the API
    const params = {};
    if (keyword) params.keyword = keyword;
    if (khoa && khoa !== "Khoa") params.khoa = khoa;
    if (nganh && nganh !== "Ngành") params.nganh = nganh;
    if (mon && mon !== "Môn") params.mon = mon;

    // Make API call with the parameters
    TaiLieuCongDongApi.getAll(params).then((res) => {
      let data = res.data.data; // Get data from response

      let html = "";

      for (let item of data) {
        let arrDate = item["NgayTao"].split("T");

        html += `<div class="card">
                    <img src="/assets/img/${item.HinhAnh}" alt="Delicious Food">
                    <div class="card-content">
                        <h2>${item.TieuDe}</h2>
                        <p>${item.NoiDung}</p>
                        <div style="display: flex; align-items: center; flex-direction: row-reverse; justify-content: space-between; margin-top: 5px;">
                          <a href="#">KinhNguyen <i class="fa-solid fa-user"></i></a>
                          <span>${arrDate[0]}</span>
                        </div>
                    </div>
                </div>`;
      }

      testFillCard.innerHTML = html; // Update the HTML of the container with the new cards
    });
  });
});


/**
 * Listen click event on button with class "find" to call API
 */
document.querySelector("button.find").addEventListener("click", function (e) {
  e.preventDefault(); // prevent something like form submit
  e.target.disabled = true;
  LienHeApi.getLienHe()
    .then((res) => {
      console.log(res.data); // TODO: render data to view
    })
    .finally(() => {
      e.target.disabled = false;
    });
});

// NguoiDungapi class to handle login
class NguoiDungapi {
  static login(params) {
    return axios.post("http://127.0.0.1:8000/api/NguoiDung/login", params);
  }
}


// Event listener for the login form submission
// document.querySelector(".sign-in-form").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent default form submission

//   // Get username and password from form inputs
//   const username = document.querySelector('.sign-in-form input[name="username"]').value;
//   const password = document.querySelector('.sign-in-form input[name="password"]').value;

//   console.log("username: ", username, " - password: ", password);

//   // Disable the button to prevent multiple clicks
//   // const loginButton = document.querySelector('.sign-in-form input[type="submit"]');
//   // loginButton.disabled = true;

//   // Send login request
//   // NguoiDungapi.login({ TenDangNhap: username, MatKhau: password })
//   //   .then((res) => {
//   //     if (res.status === 200 && res.data) {
//   //       console.log(res.data); // Log response data to console
//   //       alert("Đăng nhập thành công!");
//   //       // Redirect to index.html upon successful login
//   //       window.location.replace("/");
//   //     } else {
//   //       alert("Đăng nhập thất bại!");
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //     alert("Có lỗi xảy ra khi đăng nhập!");
//   //   })
//   //   .finally(() => {
//   //     // Enable the button after request completes
//   //     loginButton.disabled = false;
//   //   });
// });



//Menteeapi

class MenteeApi {
  static getAll() {
    return axios.get("http://127.0.0.1:8000/api/mentee");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  MenteeApi.getAll().then((res) => {
    let data = res.data.data;

    console.log(data);

    const testFillCard = document.querySelector(".box");
    console.log("testFillCard: ", testFillCard);

    
   let html = "";

for (let item of data) {
  let arrDate = item["NgayTao"].split("T");

  html += `
    <section>
      <img src="/assets/img/HDN.png" alt="Person Pointing" />
      <div class="box">
        <h1>Huỳnh Đức Nhật</h1>
        <p>Sinh viên khóa 23, 23IT2</p>

        <div class="content">
          <span>
            Tôi là Huỳnh Đức Nhật
          </span>
          <span>
            ${item.NoiDung}
          </span>
        </div>
        <div class="GPA">${item.DiemGPA}</div>
        <button class="button">Đăng ký học --></button>
      </div>
    </section>
  `;
}

testFillCard.innerHTML = html;

  });
});
