import { Injectable } from '@angular/core';

import { Device } from './device';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {
    getDevices(): Promise<Device[]> {
        return Promise.resolve(DEVICES);
    }

    getDevice(id: number): Promise<Device> {
        return this.getDevices()
            .then(devices => devices.find(device => device.id === id));
    }
}