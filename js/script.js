function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visibility', visible)
    document.querySelector('.main').classList.toggle('toggle-main', visible)
  }

  document.querySelector('.hamburger-ico').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });