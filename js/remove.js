document.querySelector('.links-container').addEventListener('click', (e) => {    
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        
        //console.log(e.path[2].remove());
    }
});
