import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class LoginService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("isUserLoggedIn")) {
      return true;
    }
    this.router.navigate(["login"]);
  }
}
