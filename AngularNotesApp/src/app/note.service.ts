import {Injectable} from '@angular/core';
import {Note} from './models/Note';
import {NOTES} from './mock-notes';

@Injectable()
export class NoteService
{
    getNotes() : Promise<Note[]> {
        return Promise.resolve(NOTES);
    }
}