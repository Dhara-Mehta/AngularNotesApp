import {Component, Input} from '@angular/core';
import { ToDo } from '../models/ToDo';
import { Note } from '../models/Note';
import {NOTES} from '../mock-notes';
import {NoteService} from '../note.service';

@Component({
    selector: "to-do-list",
    templateUrl: 'app/templates/ToDoListTemplate.html'
})
export class ToDoListComponent{
@Input()
    todos: ToDo[];
@Input()
note: Note;
  task: string;

    constructor(private noteService: NoteService) { }

  onAddTask(value: string){
      //this.task = value;
      this.todos.push({ TodoId: 0, TaskName: value, Complete: false, MouseOver: false, Note_Id: this.note.Id });
     
      this.addTodoToNote({ TodoId: 0, TaskName: value, Complete: false, MouseOver: false, Note_Id: this.note.Id});
      this.task = "";
  }

  onDelete(task: ToDo) {
      this.deleteTodo(task.TodoId);
    this.todos.splice(this.todos.indexOf(task), 1);
  }

  onCheckComplete(task: ToDo) {
      console.log(task.Complete);
      this.updateTodo(task);
  }

  showDeleteButton(task: ToDo) {    
    task.MouseOver = true;
  }

  HideDeleteButton(task: ToDo){
    task.MouseOver = false;
  }

  errorMessage: string;
  addTodoToNote(todo: ToDo) {
      if (!todo) { return; }
      console.log("calling service now");
      console.log(todo);
      this.noteService.addTodo(todo)
          .subscribe(
          updatedtodo => todo,
          error => this.errorMessage = error);
  }

  updateTodo(todo: ToDo) {
      if (!todo) { return; }
      console.log("calling service now");
      console.log(todo);
      this.noteService.updateTodo(todo)
          .subscribe(
          updatedtodo => todo,
          error => this.errorMessage = error);
  }

  deleteTodo(todoId: number) {
      if (!todoId) { return; }
      console.log("calling service now");
      console.log(todoId);
      this.noteService.deleteTodo(todoId)
          .subscribe(          
          error => this.errorMessage = error);
  }
}