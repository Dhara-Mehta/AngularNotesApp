import {Component} from '@angular/core';
import {Note} from '../models/Note';
import {ColorPickerComponent} from './ColorPickerComponent';
import {NoteService} from '../note.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'note-list',
    templateUrl: 'app/templates/NoteListTemplate.html'
})
export class NoteListComponent implements OnInit{

  constructor(private noteService: NoteService){}

  notes: Note[];
  clickMessage: string;
  columns: number = 3;
  pencilIcon: string = "fa fa-pencil fa-fw"

  ngOnInit(): void{
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(x => this.notes = x);
  }

  onClickNote(noteId: number) {
    this.clickMessage = noteId.toString();
  } 

  showButtons(note: Note) {
      note.Hide = false;
     // this.clickMessage = "show note" + note.id.toString();
  }

  hideButtons(note: Note){
      note.Hide = true;
     // this.clickMessage = note.id.toString();
  }

  onClickEdit(n: Note){
    this.clickMessage = "Clicked Edit for " + n.Title;
  }

  changeColor(selectedColour: string, n: Note){
    n.Color = selectedColour;

	//call update note
	this.updateNote(n);
  }
 errorMessage: string;

  updateNote(note: Note) {
	if (!note) {return;}
	console.log("calling service now");
	console.log(note);
	this.noteService.updateNote(note)
	.subscribe(
		updatednote => note,
		error => this.errorMessage = error);
  }

};



