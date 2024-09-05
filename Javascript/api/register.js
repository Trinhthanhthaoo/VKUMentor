const btnSignUp = document.getElementById("btnSignUp");

btnSignUp.addEventListener("click", () => {
  const txtUsername = document.getElementById("txtSignupUsername").value;
  const txtEmail = document.getElementById("txtSignupEmail").value;
  const txtPassword = document.getElementById("txtSignupPassword").value;

  // Basic validation
  if (!txtUsername || !txtEmail || !txtPassword) {
    alert("Please fill in all fields.");
    return;
  }

  axios
    .post("http://127.0.0.1:8000/api/NguoiDung/register", {
      TenDangNhap: txtUsername,
      Email: txtEmail,
      MatKhau: txtPassword,
    })
    .then((response) => {
      if (response && response.data) {
        if (response.data) {
          localStorage.setItem("isLogin", true);
          window.location.href = "/";
        }
      }
    })
    .catch((error) => {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    });
});
