import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DevicesComponent } from './devices.component';
import { DeviceDetailComponent } from './device-detail.component';
import { DeviceSearchComponent } from './device-search.component';

import { DeviceService } from './device.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailComponent,
    DashboardComponent,
    DeviceSearchComponent
  ],
  providers: [
    DeviceService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
