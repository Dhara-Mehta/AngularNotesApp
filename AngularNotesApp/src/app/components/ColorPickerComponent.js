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
var ColorPickerComponent = (function () {
    function ColorPickerComponent() {
        this.colorName = new core_1.EventEmitter();
    }
    ColorPickerComponent.prototype.onColorPick = function (colour) {
        this.colorName.emit(colour);
    };
    return ColorPickerComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ColorPickerComponent.prototype, "colorName", void 0);
ColorPickerComponent = __decorate([
    core_1.Component({
        selector: "color-picker",
        templateUrl: "app/templates/ColorPicker.html"
    })
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;
//# sourceMappingURL=ColorPickerComponent.js.map