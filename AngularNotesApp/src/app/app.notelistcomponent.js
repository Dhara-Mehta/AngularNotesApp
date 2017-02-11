"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NOTES = [
    { id: 1, title: "Note 1", content: "First Note Content", type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 2, title: "Note 2", content: "Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n Second Note Content\n ", type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 3, title: "Note 3", content: "Third Note Content", type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 4, title: "Note 4", content: "Fourth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 5, title: "Note 5", content: "Fifth Note Content Third Line \nThird Line \nThird Line \nThird Line \nThird Line",
        type: "Note", date: new Date(), hide: true, color: "list-group-item-success" },
    { id: 5, title: "Note 5", content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        type: "Note", date: new Date(), hide: true, color: "list-group-item-warning" },
    { id: 5, title: "Note 5", content: "Fifth Note Content \n Fourth Note Content \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line \nThird Line",
        type: "Note", date: new Date(), hide: true, color: "list-group-item-info" }
];
var NoteListComponent = (function () {
    function NoteListComponent() {
        this.notes = NOTES;
        this.columns = 3;
    }
    //hide: boolean = true;
    NoteListComponent.prototype.onClickNote = function (noteId) {
        this.clickMessage = noteId.toString();
    };
    NoteListComponent.prototype.showButtons = function (note) {
        note.hide = false;
        // this.clickMessage = "show note" + note.id.toString();
    };
    NoteListComponent.prototype.hideButtons = function (note) {
        note.hide = true;
        // this.clickMessage = note.id.toString();
    };
    NoteListComponent.prototype.onClickEdit = function (n) {
        this.clickMessage = "Clicked Edit for " + n.title;
    };
    return NoteListComponent;
}());
NoteListComponent = __decorate([
    core_1.Component({
        selector: 'note-list',
        templateUrl: 'app/templates/notelisttemplate.html'
    })
], NoteListComponent);
exports.NoteListComponent = NoteListComponent;
;
//# sourceMappingURL=app.notelistcomponent.js.map