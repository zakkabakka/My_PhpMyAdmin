import { Component, OnInit } from '@angular/core';
import { Request } from '../api/request';

@Component({
  selector: 'app-table-database',
  templateUrl: './table-database.component.html',
  styleUrls: ['./table-database.component.css']
})
export class TableDatabaseComponent implements OnInit {
  addDataBase: boolean = false;
  responce: any = [];

  constructor(private request: Request) { }

  ngOnInit() {
    this.getDatabase()
  }
  getDatabase(): any {
    this.request.getDataBase()
      .subscribe(
        data => this.responce = data,
        error => alert(error),
        () => console.log("Finished", this.responce)
      );
  }
  createDatabase(value): any {
    this.request.createDataBase(value);
    location.reload();
  }
  deleteDatabase(database): any {
    this.request.deleteDataBase(database);
    location.reload();
  }
}
