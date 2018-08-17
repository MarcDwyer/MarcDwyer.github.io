const menu = document.querySelector('.naver');
const intro = document.querySelector('.intro');
menu.addEventListener('click', togglme);

function togglme() {
intro.classList.toggle('active');

}
