import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Request } from '../api/request-database';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  database: string;
  isRename: boolean = false;
  isEditStruct: boolean = false;
  structureName: string;
  databaseName: string;
  tableName:string;
  colonne: any;
  constructor(private request: Request, public dialogRef: MdDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

  editStructure() {
    this.request.editStructureRequest(this.databaseName, this.tableName, this.structureName, this.colonne);
    this.dialogRef.close();
  }
}
