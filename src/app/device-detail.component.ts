import { Component, Input } from '@angular/core';
import { Device } from './device';

@Component({
    selector: 'device-detail',
    template: `
        <div *ngIf="device">
        <h2>Details of {{ device.name }}</h2>
        <div><label>Id:</label> {{ device.id }}</div>
        <div><label>Name:</label> <input [(ngModel)]="device.name" placeholder="name" /></div>
        </div>
    `
})

export class DeviceDetailComponent {
    @Input() device: Device;
}