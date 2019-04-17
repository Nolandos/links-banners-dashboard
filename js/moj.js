let abcs = document.querySelector('.range-bar');
let b = document.querySelector('.myBar');
let c = document.querySelector('.label-range-bar');
let d = document.querySelector('.label-wrapper');


function progress() {
    b.style.width = abcs.value + "%";
    c.style.left = abcs.value + "%";
    d.style.marginRight = parseInt(abcs.value) + "px";
    c.innerHTML = Math.round(abcs.value / 0.59523) + " hours";
}

    
function scrollBar() {
    let z = document.querySelector('.checkboxes'); 
    z.scrollTo(0, document.querySelector('.scrol-bar-y').value * 2.5);
}