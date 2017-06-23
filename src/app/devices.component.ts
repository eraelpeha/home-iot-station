import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DeviceDetailComponent } from './device-detail.component';
import { Device } from './device';

import { DeviceService } from './device.service';

@Component({
  selector: 'my-devices',
  templateUrl: './devices.component.html',
  styleUrls: [ './devices.component.css' ]
})

export class DevicesComponent implements OnInit {
  title = 'Home IoT Station';
  devices: Device[];
  selectedDevice: Device;

  constructor(
    private deviceService: DeviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

  getDevices(): void {
    this.deviceService.getDevices().then(devices => this.devices = devices);
  }

  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedDevice.id]);
  }
}