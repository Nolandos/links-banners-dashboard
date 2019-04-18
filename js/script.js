/*FUNCTION FOR TOGGLE SIDEBAR*/

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visibility', visible)
    document.querySelector('.main').classList.toggle('toggle-main', visible)
  }

  document.querySelector('.hamburger-ico').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  /*FUNCTION FOR LOGIN POPUP*/

  document.querySelector('.log-in').addEventListener('click', (e) => {
    e.preventDefault();
    let popupWrapper = document.querySelector('.popup-wrapper');

    popupWrapper.style.display = "none";
  });

  document.querySelector('.exit').addEventListener('click', (e) => {
    let popupWrapper = document.querySelector('.popup-wrapper');
    
    popupWrapper.style.display = "flex";      
  });  

  $(document).ready(function() { 
    //Strona ladowana jako pierwsza:
    $('.main').load('pages/general.html');
  
    //Ladowanie pozostalych podstron:
    $('ul.menu-side-bar li a').click(function() {
       var podstrona = $(this).attr('href');
       $('.main').html('Ładuję...');
       $('.main').load('pages/'+podstrona);
       return false;
    });
 });


 function progress() {
  let currentProgress = document.querySelector('.current-progress');
  let rangeBar = document.querySelector('.range-bar');
  let labelRangBar = document.querySelector('.label-range-bar');
  let labelWrapper = document.querySelector('.label-wrapper');

  currentProgress.style.width = rangeBar.value + "%";
  labelRangBar.style.left = rangeBar.value + "%";
  labelWrapper.style.marginRight = parseInt(rangeBar.value) + "px";
  labelRangBar.innerHTML = Math.round(rangeBar.value / 0.59523) + " hours";
}

  
function scrollBar() {
  let checkboxes = document.querySelector('.checkboxes'); 
  checkboxes.scrollTo(0, document.querySelector('.scrol-bar-y').value * 2.5);
}