import {clickAddButton, clickDeleteButton, clickSaveButton} from './events-buttons.js';
import {makeStartScreen} from './start-screen.js';
import BoardPresenter from './board-presenter.js';


const defaultUser = 'user';

const boardPresenter = new BoardPresenter();
const mainContainer = document.querySelector('.container');
const addBtn = document.getElementById('add');
const userBtn = document.querySelector('.profile__avatar');
const userName = document.querySelector('.profile__name');

makeStartScreen(defaultUser);

userBtn.addEventListener('click', () => {
  const currentNotes = mainContainer.querySelectorAll('.note');

  const newUser = prompt('Введите имя пользователя:');
  userName.textContent = newUser;
  for (const item of currentNotes) {
    item.remove();
  }
  makeStartScreen(newUser);
});

addBtn.addEventListener('click', () =>
  clickAddButton(defaultUser, boardPresenter, mainContainer)
);

mainContainer.addEventListener('click', (evt) => {
  const buttonElement = evt.target.parentElement;

  if (buttonElement.classList.contains('delete')) {
    clickDeleteButton(evt, defaultUser);
  }
  if (buttonElement.classList.contains('edit')) {
    clickSaveButton(evt, defaultUser);
    evt.path[2].classList.remove('unsaved');
  }
  if (evt.target.classList.contains('text-area')) {
    evt.target.parentElement.firstElementChild.classList.add('unsaved');
  }
});


