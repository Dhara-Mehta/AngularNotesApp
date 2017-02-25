import {Component} from '@angular/core';
import {Note} from '../models/Note';
import {ColorPickerComponent} from './ColorPickerComponent';
import {NoteService} from '../note.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'note-list',
    templateUrl: 'app/templates/notelisttemplate.html',
    providers: [NoteService]
})
export class NoteListComponent implements OnInit{

  constructor(private noteService: NoteService){}

  notes: Note[];
  clickMessage: string;
  columns: number = 3;
  //hide: boolean = true;

  ngOnInit(): void{
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().then(x => this.notes = x);
  }

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

  changeColor(selectedColour: string, n: Note){
    n.color = selectedColour;
  }

};



