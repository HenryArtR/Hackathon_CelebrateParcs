import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MapsComponent } from './maps/maps.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CardsComponent,
    MapsComponent
  ],
  exports: [
    CardsComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule    
  ],
})
export class ComponentsModule { }
