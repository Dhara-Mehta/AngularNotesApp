import {Injectable} from '@angular/core';
import {Note} from './models/Note';
import {NOTES} from './mock-notes';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
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

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
        }
}