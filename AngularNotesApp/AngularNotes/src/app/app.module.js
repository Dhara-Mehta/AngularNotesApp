"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var MainComponent_1 = require("./components/MainComponent");
var NoteListComponent_1 = require("./components/NoteListComponent");
var EditNoteComponent_1 = require("./components/EditNoteComponent");
var ColorPickerComponent_1 = require("./components/ColorPickerComponent");
var note_service_1 = require("./note.service");
var ToDoListComponent_1 = require("./components/ToDoListComponent");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng_bootstrap_1.NgbModule, ng_bootstrap_1.NgbModule.forRoot(), http_1.HttpModule, http_1.JsonpModule],
            declarations: [MainComponent_1.MainComponent, NoteListComponent_1.NoteListComponent, EditNoteComponent_1.EditNoteComponent, ColorPickerComponent_1.ColorPickerComponent, ToDoListComponent_1.ToDoListComponent],
            providers: [note_service_1.NoteService],
            bootstrap: [MainComponent_1.MainComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map