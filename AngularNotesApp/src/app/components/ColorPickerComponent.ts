import {Component, Output, EventEmitter} from '@angular/core';
import {Note} from '../models/Note';

@Component({
    selector: "color-picker",
    templateUrl: "app/templates/ColorPicker.html"
})
export class ColorPickerComponent{
@Output() colorName = new EventEmitter<string>(); 

onColorPick(colour: any){
  this.colorName.emit(colour);
}

}