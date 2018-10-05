
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
  const event = 'React-Redux Forum Site'
  if (e.type === 'mouseout') {
    const span = document.querySelector('.current')
    document.body.removeChild(span);
  } else {
  
  const ele = document.createElement('div');
  ele.classList.add('current');
  ele.innerHTML = `<span>Working On: ${event}.</span>`
  document.body.appendChild(ele);
  const horizon = e.pageX + 15;
  const vert = e.pageY + -50;
  ele.style.position = 'absolute';
  ele.style.left = `${horizon}px`;
  ele.style.top = `${vert}px`;
  }
}


function typed() {
  new Typed(document.querySelector('.terminal'), {
    strings: ['$ npm install marc-port-about^1000\n <br>`installing components...` ^1000\n <br>`Fetching from source...` <br><br>Name: Marc Dwyer <br> Specialty: Front End Development <br> Current Projects: 2 <br> Recently Finished: Stephen Griders React-Redux Udemy Course <br> Currently Working On: React-Redux Forum Site'],
    typeSpeed: 30,
  })
}
typed();