"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.note = {
            id: 0,
            title: "",
            content: "",
            todo: null,
            isTodo: false,
            type: "note",
            date: null,
            hide: false,
            color: ""
        };
        this.todo = {
            id: 0,
            title: "",
            content: null,
            todo: [{ TodoId: 0, TaskName: "", Complete: false }],
            isTodo: true,
            type: "note",
            date: null,
            hide: false,
            color: ""
        };
        this.pencilIcon = "fa fa-pencil fa-fw";
        this.listIcon = "fa fa-list-ul";
        // onNewNote(){
        //   this.content = this.note.content;
        // }
    }
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/apptemplate.html'
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=MainComponent.js.map