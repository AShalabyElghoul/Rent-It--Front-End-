import { Component, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { AuthenticationService } from '../services/authentication.service';
import { VisibilityService } from '../services/visability.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isVisible = false;

  handleLogout(e: MouseEvent) {
    e.preventDefault();
    this.auth.isLoggedIn$.next(false);
    this.isVisible = false;
    this.toggleNavbar();
    // this.visibilityService.hide();
    localStorage.clear();
    this.router.navigate(['login']);
    
  }
  navBarisLoggedIn = false;
  faUser = faUser
  fabell = faBell;
  constructor(
    private auth: AuthenticationService,
    private visibilityService: VisibilityService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.visibilityService.isVisible$.subscribe(isVisible => {
      this.isVisible = isVisible
    this.auth.isLoggedIn$.subscribe((isLoggedIn) => {
      this.navBarisLoggedIn = isLoggedIn;
    });
  })

  }
  toggleNavbar() {
    this.visibilityService.toggleVisibility();
  }
}

