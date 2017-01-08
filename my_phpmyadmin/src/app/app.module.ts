import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { TableDatabaseComponent } from './table-database/table-database.component';
import { Request } from './api/request-database';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [
  {path: '', component: TableDatabaseComponent},
  { path: 'database/:name', component: TableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TableDatabaseComponent,
    ModalComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
  ModalComponent
],
  providers: [
    Request
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
