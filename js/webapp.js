const menu = document.querySelector('.naver');
const intro = document.querySelector('.intro');
const fa = document.querySelector('i');


menu.addEventListener('click', toggleme);

function toggleme() {

intro.classList.toggle('active');
fa.classList.toggle('white');
}

intro.addEventListener('transitionend', endcanvas);

function endcanvas(e) {
  if (e.propertyName == 'background-color' && window.innerWidth >= 775) {
    intro.classList.toggle('active');
    fa.classList.toggle('white');
  }
}


window.addEventListener('keyup', unicorn);
let empty = [];
const secret = 'hireme';
function unicorn(e) {
  empty.push(e.key);
  empty.splice(-secret.length - 1, empty.length - secret.length);
  if (empty.join('').includes(secret)) {
    cornify_add();
  }
}


let last = window.pageYOffset;

window.onscroll = function () {
  if (window.innerWidth <= 780) {
    const current = window.pageYOffset;
    if (last >= current) {
      menu.style.top = "0";
    } else {
      menu.style.top = "-50px";
    }
    last = current;
  }
}
