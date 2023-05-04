const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#444';
  } else {
    header.style.backgroundColor = '#333';
  }
});
