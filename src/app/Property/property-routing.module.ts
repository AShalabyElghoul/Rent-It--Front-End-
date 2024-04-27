import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertygalleryComponent } from './propertygallery/propertygallery.component';
import { PropertyDeatilsComponent } from './property-deatils/property-deatils.component';

const routes: Routes = [
  {path:'Properties',component:PropertygalleryComponent},
  {path:'Details/:id',component:PropertyDeatilsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
