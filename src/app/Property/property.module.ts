import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertygalleryComponent } from './propertygallery/propertygallery.component';


@NgModule({
  declarations: [
    PropertygalleryComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
