import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  ngOnInit() {
    localStorage.clear();
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    const val = this.form.value;
    localStorage.clear();
    if (val.email) {
      this.authService.login(val.email, val.password).subscribe(isLogged => {
        if (isLogged) {
          this.router.navigateByUrl("/home");
          localStorage.setItem("isUserLoggedIn", "true");
        } else {
          localStorage.clear();
        }
      });
    }
  }
}
