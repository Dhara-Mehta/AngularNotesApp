import {Injectable} from '@angular/core';
import {Note} from './models/Note';
import {NOTES} from './mock-notes';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NoteService
{
    // getNotes() : Promise<Note[]> {
    //     return Promise.resolve(NOTES);
    // }

    private notesURL= "http://localhost:53282/Note/GetNotes";

    constructor (private http: Http) {}

    getNotes(): Observable<Note[]> {
        return this.http.get(this.notesURL)
                  .map(this.extractData)
                  .catch(this.handleError);
    }

	createNote(note: Note): Observable<number> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		console.log("from service");
		console.log(note);
		return this.http.post("http://localhost:53282/Note/PostNote", note)
						.map(this.extractData)
						.catch(this.handleError);
    }

    updateNote(note: Note): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("from service");
        console.log(note);
		console.log("http://localhost:53282/Note/PutNote/" + note.Id);
        return this.http.put("http://localhost:53282/Note/PutNote/" + note.Id,  note , options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
		console.log(body);
        return body || { };
    }
    
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            //errMsg = error.toString();
			console.error(errMsg);
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
        }
}