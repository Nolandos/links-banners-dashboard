document.querySelector('.banners').addEventListener('click', (e) => {
    
    if(e.target.classList.contains('add-banners-btn')) {
        document.querySelector('.popup-add-banners-wrapper').style.display = "flex";
      }  
});