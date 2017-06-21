import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DevicesComponent } from './devices.component';
import { DeviceDetailComponent } from './device-detail.component';

import { DeviceService } from './device.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'devices',
        component: DevicesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailComponent,
    DashboardComponent
  ],
  providers: [
    DeviceService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
