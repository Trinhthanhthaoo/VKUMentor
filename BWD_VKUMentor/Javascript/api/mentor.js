class LienHeApi {
    static getLienHe(params = {}) {
      return axios.get("http://localhost:8000/api/lien-he", { params });
    }
  }


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

  class MentorApi {
    static getMentor(params = {}) {
      return axios.get("http://127.0.0.1:8000/api/mentor", { params });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem phần tử có tồn tại trong DOM không
    const sliderElement = document.querySelector(".img-Mentor");
    if (!sliderElement) {
      console.error("Không tìm thấy phần tử với lớp 'img-Mentor'");
      return;
    }

    MentorApi.getMentor()
      .then((res) => {
        console.log(res.data); // TODO: render data to view
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  });