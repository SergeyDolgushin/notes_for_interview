import {readJSON, saveJSON, makeNewRecord} from './utils.js';


const clickAddButton = (defaultUser, boardPresenter, mainContainer) => {
  const data = readJSON(defaultUser);
  const newData = makeNewRecord(data);
  boardPresenter.init(mainContainer, Array.of(newData));
  data.push(newData);
  saveJSON(defaultUser, data);
};

const clickDeleteButton = (evt, defaultUser) => {
  const tempArray = [];
  let userData = readJSON(defaultUser);
  const noteView = evt.path[3].querySelector('.text-area');
  for (const item of userData) {
    if (item.id !== Number(noteView.id)) {
      tempArray.push(item);
    }
  }
  userData = tempArray;
  evt.path[3].remove();
  saveJSON(defaultUser, userData);
};

const clickSaveButton = (evt, defaultUser) => {
  const noteView = evt.path[3].querySelector('.text-area');
  const userData = readJSON(defaultUser);
  for (const item of userData) {
    if (item.id === Number(noteView.id)) {
      item.text = noteView.value;
      saveJSON(defaultUser, userData);
    }
  }
};

export {clickAddButton, clickDeleteButton, clickSaveButton};
