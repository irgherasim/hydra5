import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') ? true : false;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
