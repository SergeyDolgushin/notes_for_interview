import ShowNoteView from './note-view.js';
import {render} from './utils.js';


export default class BoardPresenter {

  init = (boardContainer, tasks) => {
    
    this.boardContainer = boardContainer;
    this.tasksModel = tasks;

    for (let i = 0; i < this.tasksModel.length; i++) {
      render(new ShowNoteView(this.tasksModel[i]), this.boardContainer);
    }
  };
}
