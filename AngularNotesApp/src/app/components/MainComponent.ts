import { Component } from '@angular/core';
import {Note} from '../models/Note';
import {NoteListComponent} from './NoteListComponent';
import {EditNoteComponent} from './EditNoteComponent';



@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/apptemplate.html'
})
export class MainComponent  { 
  note: Note = {
    id : 1,
    title: "My First Note", 
    content: "This is my first note.",
    type: "Note",
    date: new Date(),
    hide: true,
    color: "white"
  };  

content: string;

  onNewNote(){
    this.content = this.note.content;
  }



}