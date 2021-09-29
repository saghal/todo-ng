import { EditHouseComponent } from './houses/edit-house/edit-house.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './houses/house/house.component';
import { HousesComponent } from './houses/houses.component';
import { NewHouseComponent } from './houses/new-house/new-house.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HousesComponent },
  { path: 'houses/edit/:id', component: EditHouseComponent },
  { path: 'houses/new', component: NewHouseComponent },
  { path: 'houses/:id', component: HouseComponent },
  { path: 'notFounded', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
