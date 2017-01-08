/**
 * Created by Houssam on 07/01/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Request {

  constructor(private http:Http) {}

  getTable(){
    return this.http.get('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/showDB.php')
      .map(res => res.json());
  }
  createTable(value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "value="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/createDb.php', order, {
      headers: headers
    })
  }
  deleteTable(value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let body = "database="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/deleteDB.php', body, {
      headers: headers
    })
  }
  renameTable(database, value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = "oldDatabase="+database+"&newDatabase="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/renameDB.php', body, {
      headers: headers
    }).subscribe(res => {
      console.log('post result %o', res);
    });
  }
}
