function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('show', visible)
    document.querySelector('.main').classList.toggle('max-width', visible)
  }

  document.querySelector('.hamburger-ico').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });