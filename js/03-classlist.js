const magicBtn = document.querySelector('.js-magic-btn');
// /*
//  * Интерфейс classList
//  * - add(класс)
//  * - remove(класс)
//  * - toggle(класс)
//  * - replace(старыйКласс, новыйКЛасс)
//  * - contains(класс)
//  */

// const currentPageUrl = '/contact';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');

// --------------------------MY TEST-----------------------------------------\\

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// // Добавити клас
// navEl.classList.add('super-cool');

// // Видалити клас
// navEl.classList.remove('site-nav');

// // add i remove 2 в 1
// magicBtn.addEventListener('click', () => {
//   navEl.classList.toggle('qwerty');
// });

// // Заміна класу
// navEl.classList.replace('super-cool', 'qwerty');

// // Перевірка наявності класу
// console.log(navEl.classList.contains('qweqwe'));

const currentPageUrl = '/portfolio';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
