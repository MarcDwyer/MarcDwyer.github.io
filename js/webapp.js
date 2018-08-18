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
  console.log(this.classList)
  if (this.classList.value.includes('active') && window.innerWidth >= 775) {
    intro.classList.toggle('active');
  }
}
