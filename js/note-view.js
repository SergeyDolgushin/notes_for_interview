import {createElement} from './utils.js';

const createNewView = (text) => `<div class="note">
<div class="tools"> <div class = 'caption'>${text.name}</div>
<button class="edit"><i class="fas fa-save"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<textarea class = "text-area" id = "${text.id}" rows="5" cols="20">${text.text}</textarea>
</div>
`;

export default class ShowNoteView {

  constructor(parameters) {
    this.parameters = parameters;
  }

  getTemplate() {

    return createNewView(this.parameters);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
}
