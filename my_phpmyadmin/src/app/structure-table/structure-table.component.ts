import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Request } from '../api/request-database';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MdDialogRef, MdDialog } from '@angular/material';

@Component({
  selector: 'app-structure-table',
  templateUrl: './structure-table.component.html',
  styleUrls: ['./structure-table.component.css']
})
export class StructureTableComponent implements OnInit {
  dialogRef: MdDialogRef<ModalComponent>;
  addDataBase: boolean = false;
  responce: any = [];
  dataBaseName: any;
  tableName: any;
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

  constructor(private request: Request, public dialog: MdDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.dataBaseName = param['name'];
        this.tableName = param['table'];
      });
    this.getStructure();
  }

  getStructure(): any {
    this.request.getStructureRequest(this.dataBaseName, this.tableName)
      .subscribe(
        data => this.responce = data,
        error => alert(error)
      );
  }
  createStructure(): any {
    console.log(this.colonne);
    this.request.createStructureRequest(this.dataBaseName, this.tableName, this.colonne);
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
    this.getStructure();
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
  deleteStructure(structure): any {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.database = structure;
    this.dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.request.deleteStructureRequest(this.dataBaseName, this.tableName, structure);
        this.getStructure();
      }
      this.dialogRef = null;
    });
  }

  editStructure(structure): any {
    let numb = structure.Type.match(/\d/g);
    let type = structure.Type.substring(0, structure.Type.indexOf('('));
    let editCol = {
      id: 0,
      nom: structure.Field,
      type: type.toUpperCase(),
      taille: numb.join(""),
      index: null,
      isNull: false,
      isAI: false
    };
    (structure.Key == 'PRI') ? editCol.index = 'PRIMARY KEY' : editCol.index = null;
    (structure.Null == 'NO') ? editCol.isNull = false : editCol.isNull = true;
    (structure.Extra == 'auto_increment') ? editCol.isAI = true : editCol.isAI = false;
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.databaseName = this.dataBaseName;
    this.dialogRef.componentInstance.tableName = this.tableName;
    this.dialogRef.componentInstance.structureName = structure.Field;
    this.dialogRef.componentInstance.colonne = editCol;
    this.dialogRef.componentInstance.isEditStruct = true;
    this.dialogRef.afterClosed().subscribe(result => {
      this.getStructure();
      this.dialogRef = null;
    });
  }
}
