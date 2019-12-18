import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { MaterialModule } from "./material/material.module";
import { RatesComponent } from "./rates/rates.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenu } from "@angular/material";
import { MenuOverviewComponent } from './menu-overview/menu-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RatesComponent,
    MenuOverviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [LoginService],
  entryComponents: [MatMenu],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AppModule {}
