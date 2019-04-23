document.getElementById('scrol-bar-y-1').addEventListener('input', (e) => {
    let containerToScroll = document.querySelector('.checkboxes');
    let scroll = document.getElementById('scrol-bar-y-1');
   
    scrollBar(containerToScroll, scroll);
  
  });


  document.querySelector('#range-bar').addEventListener('input', (e) => {
    let currentProgress = document.querySelector('.current-progress');
    let rangeBar = document.querySelector('.range-bar');
    let labelRangBar = document.querySelector('.label-range-bar');
    let labelWrapper = document.querySelector('.label-wrapper');
  
    currentProgress.style.width = rangeBar.value + "%";
    labelRangBar.style.left = rangeBar.value + "%";
    labelWrapper.style.marginRight = parseInt(rangeBar.value) + "px";
    labelRangBar.innerHTML = Math.round(rangeBar.value / 0.59523) + " hours";
  });
    

    
  