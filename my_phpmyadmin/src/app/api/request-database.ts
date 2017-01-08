/**
 * Created by Houssam on 06/01/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Request {
  allTables: any;
  body: any;
  constructor(private http:Http) {}
  private options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

  /**
   * DATABASE
   * @returns {Observable<R>}
   */
  getDataBase(){
    return this.http.get('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/showDB.php')
      .map(res => res.json());
  }
  createDataBase(value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "value="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/createDb.php', order, {
      headers: headers
    }).subscribe();
  }
  deleteDataBase(value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let body = "database="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/deleteDB.php', body, {
      headers: headers
    }).subscribe();
  }
  renameDataBase(database, value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.getTableRequest(database).subscribe(res => {
      this.allTables = res;
      this.body = "oldDatabase="+database+"&newDatabase="+value+"&tables="+JSON.stringify(this.allTables);

      return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/renameDB.php', this.body, {
        headers: headers
      }).subscribe(() => location.reload());
    });
  }
  /**
   * Table
   * @returns {Observable<R>}
   */
  getTableRequest(database: any){
    let params: URLSearchParams = new URLSearchParams();
    params.set("database", database);
    this.options.search = params;

    return this.http.get('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/table/showTable.php', this.options)
      .map(res => res.json());
  }
  createTableRequest(database,value,colonne){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "value="+value+"&database="+database+"&colonne="+JSON.stringify(colonne);

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/table/createTable.php', order, {
      headers: headers
    }).subscribe();
  }
  deleteTableRequest(database, table){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let body = "database="+database+"&table="+table;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/table/deleteTable.php', body, {
      headers: headers
    }).subscribe();
  }
  renameTableRequest(database, table, newTable){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = "database="+database+"&oldTable="+table+"&newTable="+newTable;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/table/renameTable.php', body, {
      headers: headers
    }).subscribe();
  }
  /**
   * Structure
   * @returns {Observable<R>}
   */
  getStructureRequest(database: any, actualTable){
    let params: URLSearchParams = new URLSearchParams();
    params.set("database", database);
    params.set("table", actualTable);
    this.options.search = params;

    return this.http.get('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/Structure/showST.php', this.options)
      .map(res => res.json());
  }
  createStructureRequest(database,table,colonne){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "table="+table+"&database="+database+"&colonne="+JSON.stringify(colonne);

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/Structure/createST.php', order, {
      headers: headers
    }).subscribe();
  }
  deleteStructureRequest(database, table, structure){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let body = "database="+database+"&table="+table+"&structure="+structure;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/Structure/deleteST.php', body, {
      headers: headers
    }).subscribe();
  }
  editStructureRequest(database,table,structure,colonne){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "table="+table+"&database="+database+"&structure="+structure+"&colonne="+JSON.stringify(colonne);

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/Structure/editST.php', order, {
      headers: headers
    }).subscribe();
  }
}
