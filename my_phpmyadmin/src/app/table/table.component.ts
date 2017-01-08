import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Request } from '../api/request-database';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dialogRef: MdDialogRef<ModalComponent>;
  addDataBase: boolean = false;
  responce: any = [];
  dataBaseName: any;
  idCol: number = 0;
  colonne: any = [{
    id: 0,
    nom: null,
    type: null,
    taille: null,
    index: null,
    isNull: false,
    isAI: false
  }];
  private subscription: Subscription;

  constructor(private request: Request, public dialog: MdDialog, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.dataBaseName = param['name'];
      });
    this.getTable();
  }

  getTable(): any {
    this.request.getTableRequest(this.dataBaseName)
      .subscribe(
        data => this.responce = data,
        error => alert(error),
      );
  }

  createTable(value): any {
    console.log(this.colonne);
    this.request.createTableRequest(this.dataBaseName, value, this.colonne);
    this.getTable();
    this.addDataBase = false;
    this.colonne = [{
      id: 0,
      nom: null,
      type: null,
      taille: null,
      index: null,
      isNull: false,
      isAI: false
    }];
  }

  addColonne() {
    this.idCol++;
    this.colonne.push({
      id: this.idCol,
      nom: null,
      type: null,
      taille: null,
      index: null,
      isNull: false,
      isAI: false
    })
  }
  deleteColonne(id: number): void {
    this.colonne.splice(id, 1);
  }

  deleteTable(table): any {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.database = table;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.request.deleteTableRequest(this.dataBaseName, table);
        this.getTable();
      }
      this.dialogRef = null;
    });
  }

  renameTable(table): any {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.database = table;
    this.dialogRef.componentInstance.isRename = true;
    this.dialogRef.afterClosed().subscribe(result => {
      this.request.renameTableRequest(this.dataBaseName, table, result);
      this.getTable();
      console.log(result);
      this.dialogRef = null;
    });
  }
}
