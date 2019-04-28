/*FUNCTION LOAD FIRST PAGE*/

var request = new XMLHttpRequest();

request.open('GET', 'pages/general.html', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = request.responseText;

      
      let newElem = document.createElement('script');
      newElem.src = `js/general.js`;
      newElem.id = `current-script`;
      document.body.appendChild(newElem);

    document.querySelector('.main').innerHTML = resp;
  }
};

request.send();

/*FUNCTION FOR LOAD NEXT SUBPAGE*/
document.querySelector('#menu').addEventListener('click', (e) => {
  e.preventDefault();
  let subpage = e.target.getAttribute('href');

  var request = new XMLHttpRequest();

  request.open('GET', `pages/${subpage}`, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var resp = request.responseText;
      let currentScript = document.querySelector('#current-script');
                           

      var newElem = document.createElement('script');
      newElem.src = `js/${subpage.replace('.html', '')}.js`;
      newElem.id = `current-script`;

     if (checkFile(newElem.src) === true) {
        currentScript.remove();
        document.body.appendChild(newElem);
     }      
      document.querySelector('.main').innerHTML = resp;
    }
  };
  
  request.send();
});

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
    let list = chatContainer.getElementsByClassName('mess');      
     
    if(messageText.value === '') {
      messageText.classList.add('error-input');
    } else {

      messageText.classList.remove('error-input');

        chatContainer.innerHTML += `
          <div class="wrapper-message mess">
            <div class="message-each">
              <p class="text">${messageText.value}</p>
              <div class="element"></div> 
            </div>                   
          </div>    
        `;

        chatContainer.scrollBy(0, list.length * 50);

        messageText.value = '';
    }

  });

  /*FUNCTION FOR CLOSE ADD BANNERS POPUP*/

  document.querySelector('.close-add-banners-ico').addEventListener('click', (e) => {
    let popupWrapperBanners = document.querySelector('.popup-add-banners-wrapper');

    popupWrapperBanners.style.display = "none";

  });

  /*FUNCTIONS FOR ADD BANNERS SCROLLS*/
  document.getElementById('scrol-bar-y-2').addEventListener('input', (e) => {
    let containerToScroll = document.querySelector('#select-banners');
    let scroll = document.getElementById('scrol-bar-y-2');
   
    scrollBar(containerToScroll, scroll);
  
  });

  document.getElementById('scrol-bar-y-3').addEventListener('input', (e) => {
    let containerToScroll = document.querySelector('#select-websites');
    let scroll = document.getElementById('scrol-bar-y-3');
   
    scrollBar(containerToScroll, scroll);
  
  });

  /*FUNCTIONS FOR ACTIVE COPY BUTTON*/

  document.querySelector('#generated-link').addEventListener('input', (e) => {
    let copyBtn = document.querySelector('#copy-btn');

    copyBtn.removeAttribute('disabled');

    if(document.querySelector('#generated-link').value === '') {
      copyBtn.disabled = true;
    }

  });

/*FUNCTIONS FOR COPY LINK*/
  document.querySelector('#copy-btn').addEventListener('click', (e) => {
    let input = document.querySelector('#generated-link');
    input.select();

    document.execCommand('copy');
    
    alert('Skopiowano link !');
  });

/*FUNCTIONS FOR SELECT LANGUAGE COMPONENT */

document.querySelector('#language-select').addEventListener('click', (e) => {
  let languageList = document.querySelector('#language-list');
  
  if(languageList.style.display === "block") {
    languageList.style.display = "none";
  } else {
    languageList.style.display = "block";
  }
});

document.querySelector('#language-list').addEventListener('click', (e) => {
  let currentChoice = document.querySelector('#language-select');
  let languageList = document.querySelector('#language-list');

  if(e.target.classList.contains('choice')) {
    currentChoice.innerHTML = e.target.innerHTML;
    languageList.style.display = "none";     
  }
  
  if(e.target.classList.contains('flag-ico')) {
    currentChoice.innerHTML = e.target.parentElement.innerHTML;
    languageList.style.display = "none";
  }
   
});

/*FUNCTIONS OFF POPUP WRRAPPER */

    //FOR ADD BANNERS
document.querySelector('.popup-add-banners-wrapper').addEventListener('click', (e) => {
  
  let popupWrapperBanners = document.querySelector('.popup-add-banners-wrapper');
  
  popupWrapperBanners.style.display = "none";  
});

document.querySelector('.add-banners').addEventListener('click', (e) => {
  e.stopPropagation();
});

    //FOR CHAT 
document.querySelector('.popup-wrapper-chat-manager').addEventListener('click', (e) => {  
  
  let popupWrapperChat = document.querySelector('.popup-wrapper-chat-manager');
  
  popupWrapperChat.style.display = "none"; 
});

document.querySelector('.chat-manager').addEventListener('click', (e) => {
  e.stopPropagation();
});


/*FUNCTIONS*/

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

function removeRecord(target) {
  if(target.classList.contains('delete')) {
    target.parentElement.parentElement.remove();
  }
}

function scrollBar(container, scroll) {
  container.scrollTo(0, scroll.value * 2.5);
}

function checkFile(arg) {
  let result;
  let request = new XMLHttpRequest();

  request.open('GET', arg , false);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        result = true;                  
    } else {
      result = false;
    }
  }
  request.send();
  return result;
}