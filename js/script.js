let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function () {
  let logo = document.querySelector('.logo');
  menu.classList.remove('fa-times');
  header.classList.remove('active');
 
  if (logo === null) {
    return;
  }

  logo.classList.remove('logo');

  let img = logo.querySelector('img');

  if (img) {
    img.classList.remove('img');
  }
}

function toggleContentVisibility(element) {
  element.classList.toggle('active');
}
