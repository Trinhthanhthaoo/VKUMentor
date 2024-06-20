// document.addEventListener('DOMContentLoaded', () => {
//     const fileUploadInput = document.getElementById('file-upload');
//     const uploadButton = document.getElementById('upload-btn');
//     const documentList = document.getElementById('document-list');

//     uploadButton.addEventListener('click', () => {
//         const files = fileUploadInput.files;
//         for (const file of files) {
//             const listItem = document.createElement('li');
//             listItem.textContent = file.name;
//             documentList.appendChild(listItem);
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.gallery-container');
  
  items.forEach((item, index) => {
    const element = document.createElement('div');
    element.classList.add('gallery-item');
    element.setAttribute('data-title', `Dynamic ${item}`);
    element.innerHTML = `<div class="text-box">Lorem ipsum text for ${item}.</div>
                         <img src="#" alt="Placeholder" style="display: none;">`; // Hidden image placeholder
    container.appendChild(element);
  });

  // Randomize borders for each gallery item
  document.querySelectorAll('.gallery-container').forEach(item => {
    const borderStyles = ['dotted', 'dashed', 'solid', 'double'];
    const colors = ['#ff7e5f', '#feb47b', '#00b4db', '#0083b0'];
    const randomBorderStyle = borderStyles[Math.floor(Math.random() * borderStyles.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    item.style.border = `4px ${randomBorderStyle} ${randomColor}`;
  });
});
