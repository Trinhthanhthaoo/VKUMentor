const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  const txtUsername = document.getElementById("txtUsername");
  const txtPassword = document.getElementById("txtPassword");

  if (txtUsername.value.trim() === "" || txtPassword.value.trim() === "") {
    alert("Bạn chưa nhập tài khoản hoặc mật khẩu")
    return
  }

  axios
    .post("http://127.0.0.1:8000/api/NguoiDung/login", {
      "TenDangNhap": txtUsername.value,
      "MatKhau": txtPassword.value,
    })
    .then((response) => {
      if (response && response.data) {
        
        if (response.data) {
            localStorage.setItem("isLogin", true)
            window.location.href = "/"
        }

      }
    })
    .catch((error) => {
      console.log(error);
    });
});
