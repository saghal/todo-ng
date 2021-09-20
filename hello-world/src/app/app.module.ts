import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormComponentComponent } from './new-form-component/new-form-component.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewFormComponentComponent,
    ChangePasswordFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
