import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    CardsComponent,
    MapsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
