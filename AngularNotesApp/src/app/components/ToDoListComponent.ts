import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToDo } from '../models/ToDo';
import { TODOS } from '../mock-todo';


@Component({
    selector: "to-do-list",
    templateUrl: 'app/templates/ToDoListTemplate.html'
})
export class ToDoListComponent{

    todos: ToDo = TODOS[0];

    closeResult: string;
    constructor(private modalService: NgbModal) {}

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
}