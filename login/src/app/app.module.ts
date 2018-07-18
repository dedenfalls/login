import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { AuthService } from './auth.service';
import { LoggedinComponent } from './loggedin/loggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
 
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
