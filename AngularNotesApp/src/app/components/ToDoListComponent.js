"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Note_1 = require("../models/Note");
var note_service_1 = require("../note.service");
var ToDoListComponent = (function () {
    function ToDoListComponent(noteService) {
        this.noteService = noteService;
    }
    ToDoListComponent.prototype.onAddTask = function (value) {
        //this.task = value;
        this.todos.push({ TodoId: 0, TaskName: value, Complete: false, MouseOver: false, Note_Id: this.note.Id });
        this.addTodoToNote({ TodoId: 0, TaskName: value, Complete: false, MouseOver: false, Note_Id: this.note.Id });
        this.task = "";
    };
    ToDoListComponent.prototype.onDelete = function (task) {
        this.deleteTodo(task.TodoId);
        this.todos.splice(this.todos.indexOf(task), 1);
    };
    ToDoListComponent.prototype.onCheckComplete = function (task) {
        console.log(task.Complete);
        this.updateTodo(task);
    };
    ToDoListComponent.prototype.showDeleteButton = function (task) {
        task.MouseOver = true;
    };
    ToDoListComponent.prototype.HideDeleteButton = function (task) {
        task.MouseOver = false;
    };
    ToDoListComponent.prototype.addTodoToNote = function (todo) {
        var _this = this;
        if (!todo) {
            return;
        }
        console.log("calling service now");
        console.log(todo);
        this.noteService.addTodo(todo)
            .subscribe(function (updatedtodo) { return todo; }, function (error) { return _this.errorMessage = error; });
    };
    ToDoListComponent.prototype.updateTodo = function (todo) {
        var _this = this;
        if (!todo) {
            return;
        }
        console.log("calling service now");
        console.log(todo);
        this.noteService.updateTodo(todo)
            .subscribe(function (updatedtodo) { return todo; }, function (error) { return _this.errorMessage = error; });
    };
    ToDoListComponent.prototype.deleteTodo = function (todoId) {
        var _this = this;
        if (!todoId) {
            return;
        }
        console.log("calling service now");
        console.log(todoId);
        this.noteService.deleteTodo(todoId)
            .subscribe(function (error) { return _this.errorMessage = error; });
    };
    return ToDoListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ToDoListComponent.prototype, "todos", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Note_1.Note)
], ToDoListComponent.prototype, "note", void 0);
ToDoListComponent = __decorate([
    core_1.Component({
        selector: "to-do-list",
        templateUrl: 'app/templates/ToDoListTemplate.html'
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], ToDoListComponent);
exports.ToDoListComponent = ToDoListComponent;
//# sourceMappingURL=ToDoListComponent.js.map