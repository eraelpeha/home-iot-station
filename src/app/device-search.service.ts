import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Device } from './device';


@Injectable()
export class DeviceSearchService {

    constructor(private http: Http) {}

    search(term: String): Observable<Device[]> {
        return this.http.get(`api/devices/?name=${term}`)
            .map(response => response.json().data as Device[]);
    }
}