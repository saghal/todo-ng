import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsService } from './services/accounts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HousesComponent } from './houses/houses.component';
import { HousesService } from './services/houses.service';
import { HouseComponent } from './houses/house/house.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HousesComponent, HouseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AccountsService, HousesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
