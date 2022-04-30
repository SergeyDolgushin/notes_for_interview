const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

const render = (component, container, place = RenderPosition.BEFOREEND) => {
  const element = component.getElement();

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

const readJSON = (defaultUser) => JSON.parse(localStorage.getItem(defaultUser));

const saveJSON = (defaultUser, data) => localStorage.setItem(defaultUser, JSON.stringify(data));

const makeNewRecord = (data) => {
  const newID = data[data.length - 1].id + 1;
  const newName = `Заметка ${newID}`;
  const currentTime = new Date();
  return {
    'id': newID,
    'name': newName,
    'text': '',
    'time': currentTime,
  };

};

export {RenderPosition, createElement, render, readJSON, saveJSON, makeNewRecord};
