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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Note_1 = require("../models/Note");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var note_service_1 = require("../note.service");
var EditNoteComponent = (function () {
    function EditNoteComponent(modalService, noteService) {
        this.modalService = modalService;
        this.noteService = noteService;
    }
    EditNoteComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditNoteComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EditNoteComponent.prototype.increaseTextareasize = function (notetextarea) {
        notetextarea.rows += 2;
    };
    EditNoteComponent.prototype.addNote = function (note) {
        var _this = this;
        if (!note) {
            return;
        }
        if (note.Id > 0) {
            this.updateNote(note);
        }
        else {
            console.log("calling service now");
            console.log(note);
            this.noteService.createNote(note)
                .subscribe(function (note) { return _this.newNoteId = 3; }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditNoteComponent.prototype.updateNote = function (note) {
        var _this = this;
        if (!note) {
            return;
        }
        console.log("calling service now");
        console.log(note);
        this.noteService.updateNote(note)
            .subscribe(function (note) { return _this.note; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Note_1.Note)
    ], EditNoteComponent.prototype, "note", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EditNoteComponent.prototype, "imgIcon", void 0);
    EditNoteComponent = __decorate([
        core_1.Component({
            selector: 'modal-edit-note',
            templateUrl: 'app/templates/EditNote.html'
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, note_service_1.NoteService])
    ], EditNoteComponent);
    return EditNoteComponent;
}());
exports.EditNoteComponent = EditNoteComponent;
//# sourceMappingURL=EditNoteComponent.js.map