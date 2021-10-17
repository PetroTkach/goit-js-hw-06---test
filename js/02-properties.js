const magicBtn = document.querySelector('.js-magic-btn');

// /*
//  * Свойства элемента (hero)
//  * - Изображение
//  * - Текст и textContent
//  * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
//  */

// const imageEl = document.querySelector('.hero__image');
// // console.log('imageEl', imageEl);
// imageEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'Это новый котик';

// const heroTitleEl = document.querySelector('.hero__title');
// // console.log('heroTitleEl', heroTitleEl);
// heroTitleEl.textContent = 'Я сладкий пирожочек!';

// /*
//  * Атрибуты
//  * - get(имя-атрибута)
//  * - set(имя-атрибута)
//  * - remove(имя-атрибута)
//  * - has(имя-атрибута)
//  */

// // console.log(imageEl.getAttribute('src'));
// // console.log(imageEl.src);
// // console.log(imageEl.hasAttribute('src'));

// /*
//  * Data-атрибуты
//  */
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[2].dataset.action);

// --------------------------MY TEST-----------------------------------------\\

// Заміна картинки по кліку //
magicBtn.addEventListener('click', () => {
  const imageHero = document.querySelector('.hero__image');
  console.log('Повертає клас:', imageHero);
  console.log('Повертає ссилку на картинку:', imageHero.src);
  imageHero.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageHero.alt = 'New cat';
});

// Заміна тексту по кліку //

const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Котя';

// /*
//  * Атрибуты
//  * - get(имя-атрибута)
//  * - set(имя-атрибута)
//  * - remove(имя-атрибута)
//  * - has(имя-атрибута)
//  */

const imageHero = document.querySelector('.hero__image');
console.log('Повертає клас:', imageHero);
console.log('Повертає ссилку на картинку:', imageHero.src);
console.log(
  'Повертає ссилку на картинку"getAttribute":',
  imageHero.getAttribute('src'),
);
console.log('Перевірка чи є src:', imageHero.hasAttribute('src'));
// Видалення обєкта src //
// imageHero.removeAttribute('src');

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0]);
console.log(actions[1].dataset);
console.log(actions[2].dataset.action);

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
});
