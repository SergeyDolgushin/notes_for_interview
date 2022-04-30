import {readJSON, saveJSON} from './utils.js';
import BoardPresenter from './board-presenter.js';

const boardPresenter = new BoardPresenter();
const mainContainer = document.querySelector('.container');

const makeStartScreen = (defaultUser) => {

  let userData = [
    {
      'id': 1,
      'name': 'Заметка 1',
      'text': 'hello world',
      'time': new Date(),
    },
  ];
  const data = readJSON(defaultUser);

  if (data === null) {
    saveJSON(defaultUser, userData);
  }
  else if (data.length === 0) {
    saveJSON(defaultUser, userData);
  }
  else {
    userData = data;
    saveJSON(defaultUser, data);
  }

  boardPresenter.init(mainContainer, Array.of(userData)[0]);
};

export {makeStartScreen};
