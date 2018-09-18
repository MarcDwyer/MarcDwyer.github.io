const menu = document.querySelector('.naver');
const intro = document.querySelector('.intro');
const fa = document.querySelector('i');
const content = document.querySelector('.content');


menu.addEventListener('click', toggleme);

function toggleme() {

intro.classList.toggle('active');
fa.classList.toggle('white');
}

intro.addEventListener('transitionend', endcanvas);

function endcanvas(e) {
  if (e.propertyName == 'background-color' && window.innerWidth >= 775) {
    intro.classList.remove('active');
    menu.classList.toggle('white');
  }
}



const pic = document.querySelector('.image');

pic.addEventListener('mouseover', current);
pic.addEventListener('mouseout', current);

function current(e) {  
  const event = 'React-Redux'
  if (e.type === 'mouseout') {
    const span = document.querySelector('.current')
    document.body.removeChild(span);
  } else {
  
  const ele = document.createElement('div');
  ele.classList.add('current');
  ele.innerHTML = `<span>Currently Learning: ${event}.</span>`
  document.body.appendChild(ele);
  const horizon = e.pageX + 15;
  const vert = e.pageY + -50;
  ele.style.position = 'absolute';
  ele.style.left = `${horizon}px`;
  ele.style.top = `${vert}px`;
  }
}