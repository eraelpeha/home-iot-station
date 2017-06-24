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
    
  add(name: String): void {
    name = name.trim();
    if (!name) { return; }
    this.deviceService.create(name)
      .then(device => {
        this.devices.push(device);
        this.selectedDevice = null;
      });
  }

  delete(device: Device): void {
    this.deviceService.delete(device.id)
      .then(() => {
        this.devices = this.devices.filter(d => d !== device);
        if (this.selectedDevice === device) { this.selectedDevice = null; }
      });
  }
}