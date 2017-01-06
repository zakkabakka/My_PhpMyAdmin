import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import 'hammerjs';
import { TableDatabaseComponent } from './table-database/table-database.component';
import { Request } from './api/request';

@NgModule({
  declarations: [
    AppComponent,
    TableDatabaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    MaterialModule.forRoot()
  ],
  providers: [
    Request
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
