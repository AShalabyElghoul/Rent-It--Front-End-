import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import { FrequentlyComponent } from './frequently/frequently.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HostingComponent } from './user/hosting/hosting.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"agent",component:AgentComponent},
  {path:"frequently",component:FrequentlyComponent},
  {path:"regestration",component:RegestrationComponent},
  {path:"User",loadChildren:()=>(import('./user/user.module').then((m)=>m.UserModule))},
  {path:"Property",loadChildren:()=>(import('./Property/property.module').then((m)=>m.PropertyModule))},
  {path: "login" , component:LoginComponent},
  {path:"**",component:NotfoundComponent},
  // {path:"Hosting",component:HostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
