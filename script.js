'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

////////// --------- cOOCKIE MESSAGE ---------------------------
const header = document.querySelector('.header');
const message = document.createElement('div');

////// --------------------------------------SMOOTH Scroling --------------------
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

////////////////// ---------------------Navigation ----- Scrolling -----------------/////////////////////
const navScroll = document.querySelector('.nav__links');

////////////// ----------OPAREATION tab SECTION -------------->>>>>>>>>>>>>>>>>>>>>>

const tabContainer = document.querySelector('.operations__tab-container');
const oprTab = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

/////// ------------- Navigation Amimation ---------------
const navigation = document.querySelector('.nav');

//////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------//----------------------------------------------//-------------

/////////////// ------------------------------------- MODAL SECTION ----------------->>>>>>>>>>>>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(log => log.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////// ---------------------------------- COOCKIE MESSAGE ------------------------////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
message.classList.add('cookie-message');
message.innerHTML = `We use coockie for improved functionality and analy tics. <button class="btn btn-height btn--close-coockie">Got it!</button>`;
header.before(message);

message.style.backgroundColor = '#5694';
message.style.color = '#000';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 5 + 'px';

const btnHeightWidth = document.querySelector('.btn-height');
btnHeightWidth.style.width = '50px';
btnHeightWidth.style.padding = '5px';
btnHeightWidth.style.fontSize = '1.2rem';
btnHeightWidth.style.height = '30px';

////////////////// ----------------------------------  CLOSE message   --------------------------------->>>>>>>>>>>>>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const closeCoockie = document.querySelector('.btn--close-coockie');
closeCoockie.addEventListener('click', function () {
  message.parentElement.removeChild(message);
});

///////////// -------------------learn more------------- Scroll section ---------------->>>>>>>>>
//////////////////////////////////////////////////////////////////////////////////////////

btnScrollTo.addEventListener('click', function (e) {
  //// ---------------------old schoole rule

  // const s1Corrds = section1.getBoundingClientRect();
  // console.log(s1Corrds);

  // window.scrollTo({
  //   left: s1Corrds.left + window.pageXOffset,
  //   top: s1Corrds.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  ///// ----------------- new school rule -----------
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////------------------------- PAGE NAVIGATION ---------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.querySelectorAll('.nav__link').forEach(ale =>
//   ale.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

///////////////// another solution
navScroll.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
/////////////////////////////////////----------------------------------------------------------//////////////////////
////////////// ----------OPAREATION SECTION -------------->>>>>>>>>>>>>>>>>>>>>>

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  oprTab.forEach(el => el.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //activet tab
  clicked.classList.add('operations__tab--active');

  // activet content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// ------------- Navigation Amimation ---------------
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navigation.addEventListener('mouseover', handleHover.bind(0.5));
navigation.addEventListener('mouseout', handleHover.bind(1));

// navigation.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// navigation.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// navigation.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// navigation.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });

//////////////////////////////////////---------------------------------------///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------sticky navigation: the scroll event -----------------------///

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) {
//     navigation.classList.add('sticky');
//     navigation.style.top = 0;
//     navigation.style.left = 0;
//   } else {
//     navigation.classList.remove('sticky');
//   }
// });
////////---------------
// const obrsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsrOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obrsCallback, obsrOptions);
// observer.observe(section1);

//////////------------------

// const header = document.querySelector('.header');

const navHeight = navigation.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    navigation.classList.add('sticky');
    navigation.style.top = 0;
    navigation.style.left = 0;
    navigation.style.transition = 'all 0.3s';
  } else {
    navigation.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////-----section-- observe of all section
const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////////

////////// --------------- lazy Clear images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////----------------Slider slider button working -----------------/////////////////////

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  // const slider = document.querySelector('.slider');
  const maxSlide = slides.length;
  let curSlide = 0;
  const rightBtn = document.querySelector('.slider__btn--right');
  const leftBtn = document.querySelector('.slider__btn--left');
  const dotsContainer = document.querySelector('.dots');

  ///////// ------ function
  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  // creatDots();

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  // activateDots(0);
  //////////////////
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  // goToSlide(0);

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  const init = function () {
    goToSlide(0);

    creatDots();
    activateDots(0);
  };
  init();
  /////////// add eventLIstener function

  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', preSlide);

  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      nextSlide();
    }

    e.key === 'ArrowLeft' && preSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // console.log('dkjfu');
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDots(slide);
    }
  });
};
slider();
/*




////////////////////////////////////////////////////////////////

////// Going downwards: siblinga
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

console.log(h1.parentNode);

console.log(h1.firstChild);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'purple';

/// Going Upwards: prantes
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--color-tertiary-opacity)';

/////// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);
console.log([...h1.parentElement.children]);



*/
/*



//////////// Selecting Element

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const selectALL = document.querySelectorAll('.section');

// console.log(select);
console.log(selectALL);

console.log(document.getElementById('section--1'));

/////////// --------------------getElementsByTagName

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
const quryAllBtn = document.querySelectorAll('button');
console.log(quryAllBtn);
//////// --------

const getEle = document.getElementsByClassName('btn');
console.log(getEle);

*/
///////////////------------------ Creating AND Inserting  Element

// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   ' We use coockie for improved functionality and analy tics';
// message.innerHTML =
//   ' We use coockie for improved functionality and analy tics.<button class="btn btn--close-cookie"> Got it! </button>';
// header.prepend(message);

/*
const header = document.querySelector('.header');
const message = document.createElement('division');
message.classList.add('cookie-message');
message.innerHTML =
  'We use coockie for improved functionality and analy tics.<button class="btn btn--close-coockie">Got it!</button>';
header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
// header.append(message);
// header.before(message);
// header.after(message);
document
  .querySelector('.btn--close-coockie')
  .addEventListener('click', function () {
    message.remove();
  });

  */

//////////////////////////// ---------------------- STYLE ---------------

/*
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use coockie for improved functionality and analy tics. <button class = "btn btn--close-coockie">Got it!</button>';
header.before(message);

document
  .querySelector('.btn--close-coockie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = ' #2658';
message.style.color = ' #ffff';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

/////////////------------------------------------ ATTRIBUTES --------------
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.class);
console.log(logo.designer);

console.log(logo.getAttribute('designer'));

logo.alt = 'Beautifull minimalist logo';

logo.setAttribute('company', 'Bankist');

console.log(logo.src); //// Absulute URL
console.log(logo.getAttribute('src')); /// RELETIVE URL

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

*/

/*

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the Heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3300);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the Heading :D');
// };


*/

/*







const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // e.stopPropagation();
});
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget);
//     // console.log(e.currentTarget === this);
//     // e.stopPropagation();
//   },
//   true
// );

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
    // console.log(e.currentTarget === this);
    // e.stopPropagation();
  },
  false
);





*/
