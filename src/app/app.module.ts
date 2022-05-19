import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './services/marker.service';
import { PopupService } from './services/popup.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    MaterialModule, 
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
