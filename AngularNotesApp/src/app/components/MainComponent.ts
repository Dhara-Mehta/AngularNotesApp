import { Component } from '@angular/core';
import {Note} from '../models/Note';
import {NoteListComponent} from './NoteListComponent';
import {EditNoteComponent} from './EditNoteComponent';



@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/apptemplate.html'
})
export class MainComponent  { 
  note: Note;  

  content: string;

  onNewNote(){
    this.content = this.note.content;
  }



}