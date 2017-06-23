import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DevicesComponent } from './devices.component';
import { DeviceDetailComponent } from './device-detail.component';

import { DeviceService } from './device.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
