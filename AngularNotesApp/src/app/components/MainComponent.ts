import { Component } from '@angular/core';
import {Note} from '../models/Note';
import {NoteListComponent} from './NoteListComponent';
import {EditNoteComponent} from './EditNoteComponent';
import {ToDoListComponent} from './ToDoListComponent';



@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/apptemplate.html'
})
export class MainComponent  { 
  note: Note = {
  id: 0,
  title: "",
  content:"",
  todo: null,
  isTodo: false,
  type: "note",
  date: null,
  hide: false,
  color: ""
  };  
  
  todo: Note = {
  id: 0,
  title: "",
  content:null,
  todo: [{TodoId: 0, TaskName: "", Complete: false}],
  isTodo: true,
  type: "note",
  date: null,
  hide: false,
  color: ""
  }

  content: string;

  pencilIcon: string = "fa fa-pencil fa-fw";

  listIcon: string = "fa fa-list-ul";

  

  // onNewNote(){
  //   this.content = this.note.content;
  // }



}