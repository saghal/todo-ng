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
import { NewHouseComponent } from './houses/new-house/new-house.component';
import { EditHouseComponent } from './houses/edit-house/edit-house.component';
import { DateService } from './services/date.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HousesComponent,
    HouseComponent,
    NewHouseComponent,
    EditHouseComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AccountsService, HousesService, DateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
