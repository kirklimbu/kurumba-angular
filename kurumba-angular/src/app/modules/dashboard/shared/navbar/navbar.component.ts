import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'kurumba-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: User;

  currentTime: any;

  isNavbarCollapsed = true;
  isAuthenticated = true;

  title = 'Kurumba MA VI'

  constructor(
    private router: Router,
    // private userDetailService: UserDetailService
  ) { }

  ngOnInit(): void {
    // this.fetchUser();
  }

  fetchUser() {

    console.log('logged user detials ' + JSON.parse(localStorage.getItem('loggedUser')));

    this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));

  }

  logout() {

    localStorage.removeItem('loggedUser');
    localStorage.removeItem('activeLink');
    // this.userDetailService.setUser(null);
    this.router.navigate(['/login']);
  }


}
