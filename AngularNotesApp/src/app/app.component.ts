import { Component } from '@angular/core';
import {Note} from './models/Note';
import {NoteListComponent} from './app.notelistcomponent';




@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/apptemplate.html'
})
export class AppComponent  { 
  note: Note = {
    id : 1,
    title: "My First Note", 
    content: "This is my first note.",
    type: "Note",
    date: new Date(),
    hide: true
  };  

content: string;

  onNewNote(){
    this.content = this.note.content;
  }
}