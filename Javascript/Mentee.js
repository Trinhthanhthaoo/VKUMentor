$(document).ready(() => {
    // Mã của bạn sẽ viết ở đây
    
    // Ví dụ: thay đổi màu nền của .wrapper khi tài liệu sẵn sàng
    $('.wrapper').css('background-color', '#f0f0f0');
  
    // Thêm một sự kiện hover cho .name để thay đổi màu chữ
    $('.name').hover(
      () => {
        $('.name').css('color', '#ff0000');
      },
      () => {
        $('.name').css('color', '#fff');
      }
    );
  });
  