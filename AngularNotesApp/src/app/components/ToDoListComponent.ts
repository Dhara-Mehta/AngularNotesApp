import {Component, Input} from '@angular/core';
import { ToDo } from '../models/ToDo';
import { Note } from '../models/Note';
import {NOTES} from '../mock-notes';


@Component({
    selector: "to-do-list",
    templateUrl: 'app/templates/ToDoListTemplate.html'
})
export class ToDoListComponent{
@Input()
    todos: ToDo[];

  task: string;

  onAddTask(value: string){
    //this.task = value;
    this.todos.push({TodoId: 0, TaskName: value, Complete: false});
    this.task = "";
  }

  onDelete(task: ToDo){
    this.todos.splice(this.todos.indexOf(task), 1);
  }

}