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
var router_1 = require("@angular/router");
var device_service_1 = require("./device.service");
var DevicesComponent = (function () {
    function DevicesComponent(deviceService, router) {
        this.deviceService = deviceService;
        this.router = router;
        this.title = 'Home IoT Station';
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DevicesComponent.prototype.onSelect = function (device) {
        this.selectedDevice = device;
    };
    DevicesComponent.prototype.getDevices = function () {
        var _this = this;
        this.deviceService.getDevices().then(function (devices) { return _this.devices = devices; });
    };
    DevicesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['detail', this.selectedDevice.id]);
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    core_1.Component({
        selector: 'my-devices',
        templateUrl: './devices.component.html',
        styleUrls: ['./devices.component.css']
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService,
        router_1.Router])
], DevicesComponent);
exports.DevicesComponent = DevicesComponent;
//# sourceMappingURL=devices.component.js.map