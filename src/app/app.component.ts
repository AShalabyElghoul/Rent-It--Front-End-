import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private auth : AuthenticationService){}
  ngOnInit(): void {
   if(localStorage.getItem("token")){
   this.auth.isLoggedIn$.next(true);
   }
  }
  title = 'rentit';
}
