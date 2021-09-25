import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsService } from './accounts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AccountsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
