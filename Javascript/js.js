// header 

const  toggleBtn = document.querySelector('.toggle_btn')
const  toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick= function(){
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtnIcon.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// slider  


var slideIndex = 1;
showDivs(slideIndex);

var slideIndex = 0;

var myVar;

carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function myFunction() {
  myVar = setTimeout(carousel, 10000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
  
  myStopFunction();
  myFunction();
}

function carousel() {
  var dots = document.getElementsByClassName("demo");
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block";
 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  dots[slideIndex-1].className += " w3-white";
  
  myStopFunction();
  myFunction();
  
  
}

let lightImg = document.querySelector(".light-img");
let viewBtn = document.querySelectorAll(".view-btn");

viewBtn.forEach(el => {
  el.addEventListener("click", () => {
    document.body.classList.add("effect");
    let imgSrc = el.getAttribute("data-src");
    lightImg.src = imgSrc;
  });
});

window.addEventListener("click", event => {
  if(event.target.className == "box-wrapper" || event.target.className == "close-btn") {
    document.body.classList.remove("effect");
  }
})
const arrow_right=document.querySelector("#arrow-right")
const arrow_left=document.querySelector("#arrow-left")
const slider=document.querySelector(".slider")

const width_slider= slider.scrollWidth
const interval = 350




function slide(event){

    
    const current_property_left_slider= parseInt(getComputedStyle(slider).left)


    let new_pos_left_slider


    if(event.currentTarget === arrow_right){


        if(Math.abs(current_property_left_slider) + interval + slider.clientWidth >= slider.scrollWidth){

            new_pos_left_slider= `-${slider.scrollWidth - slider.clientWidth}px`

        }


        else{

            new_pos_left_slider= `${current_property_left_slider - interval}px`

        }

        slider.style.left= new_pos_left_slider

        
    }



    if(event.currentTarget === arrow_left){

        new_pos_left_slider = current_property_left_slider + interval

        if(new_pos_left_slider > 0){
            
            slider.style.left="0px"
        }

        else{

            slider.style.left= `${new_pos_left_slider}px`

        }
    }

}




arrow_left.addEventListener("click", slide)
arrow_right.addEventListener("click", slide)

// fomr dk 


// Get the modal
var modal = document.getElementById("mentorModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".DangKyMentor button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.forEach(button => {
  button.onclick = function() {
    modal.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// back up 
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    backTopBtn.classList.add("active");
  } else {
    backTopBtn.classList.remove("active");
  }
  
});


var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

;(function () {
  if (!fileInput || !uploadButton) {
    return;
  }

  fileInput.addEventListener("click", () => {
    fileInput.value = '';
    console.log(fileInput.value);
  });

  fileInput.addEventListener("change", e => {
    console.log(" > " + fileInput.value)
    uploadIcon.innerHTML = 'check_circle';
    dragDropText.innerHTML = 'File Dropped Successfully!';
    document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
    uploadButton.innerHTML = `Upload`;
    fileName.innerHTML = fileInput.files[0].name;
    fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
  });

  uploadButton.addEventListener("click", () => {
    let isFileUploaded = fileInput.value;
    if(isFileUploaded != '') {
      if (fileFlag == 0) {
          fileFlag = 1;
          var width = 0;
          var id = setInterval(frame, 50);
          function frame() {
              if (width >= 390) {
                clearInterval(id);
            uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
              } else {
                width += 5;
                progressBar.style.width = width + "px";
              }
          }
        }
    } else {
      cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
    }
  });

  cancelAlertButton.addEventListener("click", () => {
    cannotUploadMessage.style.cssText = "display: none;";
  });

  if(isAdvancedUpload) {
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
      draggableFileArea.addEventListener(evt, e => {
        e.preventDefault();
        e.stopPropagation();
      })
    );

    ["dragover", "dragenter"].forEach( evt => {
      draggableFileArea.addEventListener(evt, e => {
        e.preventDefault();
        e.stopPropagation();
        uploadIcon.innerHTML = 'file_download';
        dragDropText.innerHTML = 'Drop your file here!';
      });
    });

    draggableFileArea.addEventListener("drop", e => {
      uploadIcon.innerHTML = 'check_circle';
      dragDropText.innerHTML = 'File Dropped Successfully!';
      document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
      uploadButton.innerHTML = `Upload`;
      
      let files = e.dataTransfer.files;
      fileInput.files = files;
      console.log(files[0].name + " " + files[0].size);
      console.log(document.querySelector(".default-file-input").value);
      fileName.innerHTML = files[0].name;
      fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
      uploadedFile.style.cssText = "display: flex;";
      progressBar.style.width = 0;
      fileFlag = 0;
    });
  }

  removeFileButton.addEventListener("click", () => {
    uploadedFile.style.cssText = "display: none;";
    fileInput.value = '';
    uploadIcon.innerHTML = 'file_upload';
    dragDropText.innerHTML = 'Drag & drop any file here';
    document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
    uploadButton.innerHTML = `Upload`;
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
      document.getElementById('action_btn').style.display = 'none';
      document.getElementById('userIcon').style.display = 'block';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const token = localStorage.getItem('token');  // Lưu token vào localStorage sau khi đăng nhập
  console.log({token})
  const actionBtn = document.getElementById('action_btn');
  const actionBtn2 = document.getElementById('action_btn2');
  if (!token) {
      return;  // Nếu không có token, không làm gì cả
  }

  axios.get('/api/auth/user')
  .then(({ data: user }) => {
          if (user && (user.TenDangNhap || user.Email)) {
          if (actionBtn) {
            actionBtn.style.display = 'none';
          }
          
          if (actionBtn2) {
            actionBtn2.style.display = 'none';
          }
          const userNameElement = document.getElementById('user_name');
          const userNameElement1 = document.getElementById('user_name1');
          userNameElement.textContent = user.TenDangNhap || user.Email;  // Sử dụng tên đăng nhập hoặc email
          userNameElement.style.display = 'inline-block';
          userNameElement1.textContent = user.TenDangNhap || user.Email;  // Sử dụng tên đăng nhập hoặc email
          userNameElement1.style.display = 'inline-block';
      }
  })
  .catch(error => console.log('Error:', error));
});

// Đăng xuất
document.addEventListener("DOMContentLoaded", function() {
  const token = localStorage.getItem('token');
  console.log({token})
  const logout = document.getElementById('logout1');
  if (!token) {
      return;
  }

  axios.get('/api/auth/user')
  .then(({ data: user }) => {
      if (user) {
          document.getElementById('action_btn').style.display = 'none';
          const userNameElement = document.getElementById('user_name');
          userNameElement.textContent = user.TenDangNhap || user.Email;
          userNameElement.style.display = 'inline-block';
          document.getElementById('logout').style.display = 'block';

          // Thêm sự kiện cho các nút
          document.getElementById('logout').addEventListener('click', function(event) {
            event.preventDefault();
              localStorage.removeItem('token');  
              localStorage.removeItem('user');   
              window.location.href = './index.html';  
          });
          document.getElementById('logout1').addEventListener('click', function(event) {
            event.preventDefault();
              localStorage.removeItem('token'); 
              localStorage.removeItem('user');  
              window.location.href = './index.html'; 
          });
      }
  })
  .catch(error => console.log('Error:', error));
});
