import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Device } from './device';

@Injectable()
export class DeviceService {

    private devicesUrl = 'api/devices';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getDevices(): Promise<Device[]> {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(response => response.json().data as Device[])
            .catch(this.handleError);
    }

    getDevice(id: number): Promise<Device> {
        const url = `${this.devicesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Device)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

    update(device: Device): Promise<Device> {
        const url = `${this.devicesUrl}/${device.id}`;
        return this.http.put(url, JSON.stringify(device), { headers: this.headers })
            .toPromise()
            .then(() => device)
            .catch(this.handleError);
    }

    create(name: String): Promise<Device> {
        return this.http.post(this.devicesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data as Device)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.devicesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}