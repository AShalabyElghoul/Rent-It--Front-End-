import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HostingComponent } from './hosting/hosting.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    AdminDetailsComponent, HostingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserDetailsComponent,AdminDetailsComponent,  HostingComponent]
})
export class UserModule { }
