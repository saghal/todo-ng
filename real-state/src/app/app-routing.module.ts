import { EditHouseComponent } from './houses/edit-house/edit-house.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './houses/house/house.component';
import { HousesComponent } from './houses/houses.component';
import { NewHouseComponent } from './houses/new-house/new-house.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { NotAccessComponent } from './not-access/not-access.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HousesComponent },
  {
    path: 'houses/edit/:id',
    canActivate: [AuthGuard, AdminGuard],
    component: EditHouseComponent,
  },
  {
    path: 'houses/new',
    canActivate: [AuthGuard, AdminGuard],
    component: NewHouseComponent,
  },
  {
    path: 'houses/:id',
    canActivate: [AuthGuard, AdminGuard],
    component: HouseComponent,
  },
  { path: 'notFounded', component: NotFoundComponent },
  { path: 'notAccess', component: NotAccessComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: '**', redirectTo: '/notFounded' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
