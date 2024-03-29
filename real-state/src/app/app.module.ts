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
import { NotAccessComponent } from './not-access/not-access.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './services/file-upload.service';
import { AgGridModule } from 'ag-grid-angular';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
const dbConfig: DBConfig = {
  name: 'MyHousesDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'houses',
      storeConfig: { keyPath: 'registrationNumber', autoIncrement: false },
      storeSchema: [
        { name: 'style', keypath: 'style', options: { unique: false } },
        { name: 'size', keypath: 'size', options: { unique: false } },
        { name: 'yearBuilt', keypath: 'yearBuilt', options: { unique: false } },
        { name: 'status', keypath: 'status', options: { unique: false } },
        { name: 'address', keypath: 'address', options: { unique: false } },
        { name: 'updated', keypath: 'updated', options: { unique: false } },
        { name: 'editor', keypath: 'editor', options: { unique: false } },
        { name: 'image', keypath: 'image', options: { unique: false } },
      ],
    },
  ],
};
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
    NotAccessComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([]),
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [
    AuthService,
    AccountsService,
    HousesService,
    DateService,
    AuthGuard,
    AdminGuard,
    FileUploadService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
