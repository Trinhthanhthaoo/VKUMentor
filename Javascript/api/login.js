const localStorageKeys = {
  TOKEN: 'token',
  USER: 'user'
};

document.querySelector("#btnLogin").addEventListener("click", function (e) {
  e.preventDefault();
  const localStorageKeys = {
    TOKEN: 'token',
    USER: 'user'
  };
  const login = document.getElementById('txtUsernameLogin').value;
  const password = document.getElementById('txtPasswordLogin').value;
  const errorField = document.getElementById('loginError');

  // Reset error field
  errorField.style.display = 'none';
  errorField.innerHTML = '';

  if (!login || !password) {
    errorField.innerHTML = '<div class="error-message">Vui lòng điền vào tất cả.</div>';
    errorField.style.display = 'block';
    return;
  }

  axios.post('/api/auth/login', {
      Login: login,
      MatKhau: password
  })
  .then((response) => {
    if (response && response.data) {
      // console.log('Login response:', response.data);
      localStorage.setItem(localStorageKeys.TOKEN, response.data.access_token); // Lưu token vào localStorage
      localStorage.setItem('token_type', response.data.token_type);
      window.location.href = './index.html';  // Chuyển hướng sau khi đăng nhập thành công
    }
  })
  .catch((error) => {
      console.error('Login failed:', error); // Xử lý lỗi khi đăng nhập thất bại
      if (error.response) {
        switch (error.response.status) {
          case 401:
            errorField.innerHTML = '<div class="error-message">Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập của bạn.</div>';
            break;
          case 404:
            errorField.innerHTML = '<div class="error-message">Không tìm thấy người dùng. Vui lòng kiểm tra chi tiết đăng nhập của bạn.</div>';
            break;
          default:
            errorField.innerHTML = '<div class="error-message">Đã xảy ra lỗi. Vui lòng thử lại sau.</div>';
        }
      } else {
        errorField.innerHTML = '<div class="error-message">Đã xảy ra lỗi. Vui lòng kiểm tra kết nối của bạn.</div>';
      }
      errorField.style.display = 'block';
  });
  
});

// Tương tự cho phần đăng ký
document.querySelector("#btnRegister").addEventListener("click", function (e) {
  e.preventDefault();

  const login = document.getElementById('txtUsername').value;
  const password = document.getElementById('txtPassword').value;
  const confirmPassword = document.getElementById('txtConfirmPassword').value;
  const errorField = document.getElementById('registerError');

  // Reset error field
  errorField.style.display = 'none';
  errorField.innerHTML = '';

  if (!login || !password || !confirmPassword) {
    errorField.innerHTML = '<div class="error-message">Vui lòng điền vào tất cả.</div>';
    errorField.style.display = 'block';
    return;
  }

  if (password !== confirmPassword) {
    errorField.innerHTML = '<div class="error-message">Mật khẩu không hợp lệ.</div>';
    errorField.style.display = 'block';
    return;
  }

  axios.post('/api/auth/register', {
      Login: login,
      MatKhau: password
  })
  .then((response) => {
      console.log('Registration response:', response.data);
      // alert('Registration successful!');
      window.location.href = './login.html'; // Chuyển hướng sau khi đăng ký thành công
  })
  .catch((error) => {
      console.error('Registration failed:', error); // Xử lý lỗi khi đăng ký thất bại
      if (error.response) {
        switch (error.response.status) {
          case 409:
            errorField.innerHTML = '<div class="error-message">Email hoặc tên người dùng đã tồn tại.</div>';
            break;
          default:
            errorField.innerHTML = '<div class="error-message">Đã xảy ra lỗi. Vui lòng thử lại sau.</div>';
        }
      } else {
        errorField.innerHTML = '<div class="error-message">Đã xảy ra lỗi. Vui lòng kiểm tra kết nối của bạn.</div>';
      }
      errorField.style.display = 'block';
  });
});