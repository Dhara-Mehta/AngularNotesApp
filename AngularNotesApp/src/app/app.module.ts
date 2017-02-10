import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import {NoteListComponent} from './app.notelistcomponent';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, NoteListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
