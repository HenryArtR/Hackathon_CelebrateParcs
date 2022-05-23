import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetAllComponent } from './get-all/get-all.component';
import { HoodComponent } from './hood/hood.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    WelcomePageComponent,
    GetAllComponent,
    HoodComponent,
    PostalcodeComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
