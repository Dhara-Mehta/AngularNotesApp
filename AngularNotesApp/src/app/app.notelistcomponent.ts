import {Component} from '@angular/core';
import {Note} from './models/Note';


const NOTES : Note[] = [
  {id: 1, title: "Note 1", content: "First Note Content", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 2, title: "Note 2", content: "Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n ", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 3, title: "Note 3", content: "Third Note Content", type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 4, title: "Note 4", content: `Fourth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 5, title: "Note 5", content: `Fifth Note Content Third Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-success"},
  {id: 5, title: "Note 5", content: `Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-warning"},
  {id: 5, title: "Note 5", content: `Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line`, 
  type: "Note", date: new Date(), hide: true, color:"list-group-item-info" }
];


@Component({
    selector: 'note-list',
    templateUrl: 'app/templates/notelisttemplate.html'
})
export class NoteListComponent{

  notes = NOTES;
  clickMessage: string;
  columns: number = 3;
  //hide: boolean = true;

  onClickNote(noteId: number) {
    this.clickMessage = noteId.toString();
  } 

  showButtons(note: Note) {
      note.hide = false;
     // this.clickMessage = "show note" + note.id.toString();
  }

  hideButtons(note: Note){
      note.hide = true;
     // this.clickMessage = note.id.toString();
  }

  onClickEdit(n: Note){
    this.clickMessage = "Clicked Edit for " + n.title;
  }

};



