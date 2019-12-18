import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';
@NgModule({
  imports: [
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
  ],
  providers: [AuthService, LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { 
  constructor(private router: Router){}

}

