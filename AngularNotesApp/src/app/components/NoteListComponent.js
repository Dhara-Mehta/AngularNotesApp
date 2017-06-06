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
var note_service_1 = require("../note.service");
var NoteListComponent = (function () {
    function NoteListComponent(noteService) {
        this.noteService = noteService;
        this.columns = 3;
        this.pencilIcon = "fa fa-pencil fa-fw";
    }
    NoteListComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NoteListComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getNotes().subscribe(function (x) { return _this.notes = x; });
    };
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
    NoteListComponent.prototype.changeColor = function (selectedColour, n) {
        n.Color = selectedColour;
    };
    return NoteListComponent;
}());
NoteListComponent = __decorate([
    core_1.Component({
        selector: 'note-list',
        templateUrl: 'app/templates/NoteListTemplate.html'
    }),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteListComponent);
exports.NoteListComponent = NoteListComponent;
;
//# sourceMappingURL=NoteListComponent.js.map