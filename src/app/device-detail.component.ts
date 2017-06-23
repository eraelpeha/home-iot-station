import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Device } from './device';
import { DeviceService } from './device.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'device-detail',
    templateUrl: './device-detail.component.html'
})

export class DeviceDetailComponent implements OnInit {

    @Input() device: Device;

    constructor(
        private deviceService: DeviceService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.deviceService.getDevice(+params['id']))
            .subscribe(device => this.device = device);
    }

    goBack(): void {
        this.location.back();
    }
}