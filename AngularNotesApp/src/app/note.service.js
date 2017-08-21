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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var NoteService = (function () {
    function NoteService(http) {
        this.http = http;
        // getNotes() : Promise<Note[]> {
        //     return Promise.resolve(NOTES);
        // }
        this.notesURL = "http://localhost:53282/Note/GetNotes";
    }
    NoteService.prototype.getNotes = function () {
        return this.http.get(this.notesURL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NoteService.prototype.createNote = function (note) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log("from service");
        console.log(note);
        return this.http.post("http://localhost:53282/Note/PostNote", note)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NoteService.prototype.updateNote = function (note) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log("from service");
        console.log(note);
        console.log("http://localhost:53282/Note/PutNote/" + note.Id);
        return this.http.put("http://localhost:53282/Note/PutNote/" + note.Id, note, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NoteService.prototype.addTodo = function (Todo) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log("from service");
        console.log(Todo);
        console.log("http://localhost:53282/ToDo/PostToDo/" + Todo);
        return this.http.post("http://localhost:53282/ToDo/PostToDo/", Todo)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NoteService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    NoteService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            //errMsg = error.toString();
            console.error(errMsg);
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return NoteService;
}());
NoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map