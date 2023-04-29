const redBtn = document.querySelector('a[data-color="red"]');
const yellowBtn = document.querySelector('a[data-color="yellow"]');
const blueBtn = document.querySelector('a[data-color="blue"]');
const menu = document.querySelector('.menu');

redBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('section-color', 'red');
  div.innerText = 'test';
  menu.insertAdjacentElement('afterend', div);
});

yellowBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('section-color', 'yellow');
  div.innerText = 'test';
  menu.insertAdjacentElement('afterend', div);
});

blueBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('section-color', 'blue');
  div.innerText = 'test';
  menu.insertAdjacentElement('afterend', div);
});