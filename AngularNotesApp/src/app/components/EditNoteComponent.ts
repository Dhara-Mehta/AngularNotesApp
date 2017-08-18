import {Component, Input} from '@angular/core';
import {Note} from '../models/Note'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NoteService} from '../note.service';

@Component({
  selector: 'modal-edit-note',
  templateUrl: 'app/templates/EditNote.html'
})
export class EditNoteComponent {
  @Input()
  note: Note;

  @Input()
  imgIcon: string;
  
  closeResult: string;

  constructor(private modalService: NgbModal, private noteService: NoteService) {}

  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  increaseTextareasize(notetextarea: any){
    notetextarea.rows += 2;
  }

 errorMessage: string;
 newNoteId: number;
  addNote(note: Note) {
	if (!note) {return;}
	if (note.Id > 0)
	{
		this.updateNote(note);
	}
	else
	{
		console.log("calling service now");
		console.log(note);
		this.noteService.createNote(note)
		.subscribe(
			note => this.newNoteId = 3,
			error => this.errorMessage = error);
	}
  }

  updateNote(note: Note) {
	if (!note) {return;}
	console.log("calling service now");
	console.log(note);
	this.noteService.updateNote(note)
	.subscribe(
		note => this.note,
		error => this.errorMessage = error);
  }


}
