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
var device_1 = require("./device");
var DeviceDetailComponent = (function () {
    function DeviceDetailComponent() {
    }
    return DeviceDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", device_1.Device)
], DeviceDetailComponent.prototype, "device", void 0);
DeviceDetailComponent = __decorate([
    core_1.Component({
        selector: 'device-detail',
        template: "\n        <div *ngIf=\"device\">\n        <h2>Details of {{ device.name }}</h2>\n        <div><label>Id:</label> {{ device.id }}</div>\n        <div><label>Name:</label> <input [(ngModel)]=\"device.name\" placeholder=\"name\" /></div>\n        </div>\n    "
    })
], DeviceDetailComponent);
exports.DeviceDetailComponent = DeviceDetailComponent;
//# sourceMappingURL=device-detail.component.js.map