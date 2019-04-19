/*FUNCTION FOR TOGGLE SIDEBAR*/

function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visibility', visible)
    document.querySelector('.main').classList.toggle('toggle-main', visible)
  }

  document.querySelector('.hamburger-ico').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });

  /*FUNCTIONS FOR LOGIN POPUP*/

  document.querySelector('.log-in').addEventListener('click', (e) => {
    e.preventDefault();
    let popupWrapper = document.querySelector('.popup-wrapper-login');

    popupWrapper.style.display = "none";
  });

  /*FUNCTION ACTIVE POPUP LOGIN*/ 
  document.querySelector('.exit').addEventListener('click', (e) => {
    let popupWrapper = document.querySelector('.popup-wrapper-login');
    
    popupWrapper.style.display = "flex";      
  });

  /*FUNCTION FOR ACTIVE MESSAGE POPUP*/
  document.querySelector('.person-name').addEventListener('click', (e) => {
    let popupWrapperChat = document.querySelector('.popup-wrapper-chat-manager');

    popupWrapperChat.style.display = "flex"; 
  });

  /*FUNCTION FOR CLOSE MESSAGE POPUP*/

  document.querySelector('.close-chat-ico').addEventListener('click', (e) => {
    let popupWrapperChat = document.querySelector('.popup-wrapper-chat-manager');

    popupWrapperChat.style.display = "none"; 
  });

  /*FUNCTION FOR SEND MESSAGE*/

  document.querySelector('.send-button').addEventListener('click', (e) => {
    e.preventDefault();

    let messageText = document.querySelector('.message-text');
    let chatContainer = document.querySelector('.chat-container');

    chatContainer.innerHTML += `
    <div class="wrapper-message">
        <div class="message-each">
            <p class="text">${messageText.value}</p>
            <div class="element"></div> 
      </div>                   
    </div>    
    `;

    messageText.value = '';

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