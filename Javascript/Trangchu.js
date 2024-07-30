document.querySelectorAll('.slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        const infoId = slide.getAttribute('data-info');
        const infoDiv = document.getElementById(infoId);
        if (infoDiv) {
            document.querySelector('.hover-info-container').style.display = 'block';
            infoDiv.style.display = 'block';
        }
    });

    slide.addEventListener('mouseleave', () => {
        const infoId = slide.getAttribute('data-info');
        const infoDiv = document.getElementById(infoId);
        if (infoDiv) {
            document.querySelector('.hover-info-container').style.display = 'none';
            infoDiv.style.display = 'none';
        }
    });
});
