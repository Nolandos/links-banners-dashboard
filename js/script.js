/*FUNCTION FOR TOGGLE SIDEBAR*/

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visibility', visible)
    document.querySelector('.main').classList.toggle('toggle-main', visible)
  }

  document.querySelector('.hamburger-ico').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
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