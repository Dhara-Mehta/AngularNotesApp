import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import {NoteListComponent} from './app.notelistcomponent';
import {EditNoteComponent} from './app.editnotecomponent';
import {ColorPickerComponent} from './components/ColorPickerComponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, NoteListComponent, EditNoteComponent, ColorPickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
