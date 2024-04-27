import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeadingComponent } from './heading/heading.component';
import { AgentComponent } from './agent/agent.component';
import { FrequentlyComponent } from './frequently/frequently.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyDeatilsComponent } from './Property/property-deatils/property-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeadingComponent,
    AgentComponent,
    FrequentlyComponent,
    RegestrationComponent,
    NotfoundComponent,
    LoginComponent,
    PropertyDeatilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    UserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
