import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsService } from './accounts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { HousesComponent } from './houses/houses.component';
import { HousesService } from './houses.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, HousesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AccountsService, HousesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
