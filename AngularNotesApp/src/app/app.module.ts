import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { MainComponent }  from './components/MainComponent';
import {NoteListComponent} from './components/NoteListComponent';
import {EditNoteComponent} from './components/EditNoteComponent';
import {ColorPickerComponent} from './components/ColorPickerComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, NgbModule.forRoot() ],
  declarations: [ MainComponent, NoteListComponent, EditNoteComponent, ColorPickerComponent ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
