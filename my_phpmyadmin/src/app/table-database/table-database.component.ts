import { Component, OnInit } from '@angular/core';
import { Request } from '../api/request-database';
import { ModalComponent } from '../modal/modal.component';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-table-database',
  templateUrl: './table-database.component.html',
  styleUrls: ['./table-database.component.css']
})
export class TableDatabaseComponent implements OnInit {
  dialogRef: MdDialogRef<ModalComponent>;
  addDataBase: boolean = false;
  responce: any = [];

  constructor(private request: Request, public dialog: MdDialog) {
  }

  ngOnInit() {
    this.getDatabase();
  }

  getDatabase(): any {
    this.request.getDataBase()
      .subscribe(
        data => this.responce = data,
        error => alert(error),
        () => console.log('ok')
      );
  }

  createDatabase(value): any {
    this.request.createDataBase(value);
    this.getDatabase();
    this.addDataBase = false;
  }

  deleteDatabase(database): any {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.database = database;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.request.deleteDataBase(database);
        this.getDatabase();
      }
      this.dialogRef = null;
    });
  }
  renameDatabase(database): any {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.database = database;
    this.dialogRef.componentInstance.isRename = true;
    this.dialogRef.afterClosed().subscribe(result => {
      this.request.renameDataBase(database, result);
      this.dialogRef = null;
    });
  }
}
