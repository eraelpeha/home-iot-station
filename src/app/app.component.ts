import { Component } from '@angular/core';

export class Device {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{device.name}}</h2>
    <div><label>id: </label>{{device.id}}</div>
    <div><label>name: </label><input [(ngModel)]="device.name" placeholder="name" /></div>
    `
})

export class AppComponent  {
  title = 'Home IoT Station';
  device: Device = {
    id: 1,
    name: 'Testdevice'
  }
}
