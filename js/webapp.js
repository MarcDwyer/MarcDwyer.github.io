const menu = document.querySelector('.naver');
const intro = document.querySelector('.intro');
const fa = document.querySelector('i');


menu.addEventListener('click', togglme);

function togglme() {
intro.classList.toggle('active');
fa.classList.toggle('white');

}
