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
  Id: 0,
  Title: "",
  Content:"",
  ToDoItems: null,
  IsTodo: false,
  NoteType: "note",
  CreateDate: new Date(),
  Hide: false,
  Color: ""
  };  
  
  todo: Note = {
  Id: 0,
  Title: "",
  Content:null,
  ToDoItems: [{TodoId: 0, TaskName: "", Complete: false, MouseOver: false}],
  IsTodo: true,
  NoteType: "note",
  CreateDate: new Date(),
  Hide: false,
  Color: ""
  }

  content: string;

  pencilIcon: string = "fa fa-pencil fa-fw";

  listIcon: string = "fa fa-list-ul";

  

  // onNewNote(){
  //   this.content = this.note.content;
  // }



}