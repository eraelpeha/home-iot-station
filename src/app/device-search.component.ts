import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DeviceSearchService } from './device-search.service';
import { Device } from './device';


@Component({
    selector: 'device-search',
    templateUrl: './device-search.component.html',
    styleUrls: [ './device-search.component.css' ],
    providers: [ DeviceSearchService ]
})

export class DeviceSearchComponent implements OnInit {
    devices: Observable<Device[]>;
    private searchTerms = new Subject<String>();

    constructor(
        private deviceSearchService: DeviceSearchService,
        private router: Router
    ) {}

    search(term: String): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.devices = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.deviceSearchService.search(term) : Observable.of<Device[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Device[]>([]);
            });
    }

    gotoDetail(device: Device): void {
        let link = ['/detail', device.id];
        this.router.navigate(link);
    }
}