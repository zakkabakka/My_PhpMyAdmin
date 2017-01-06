/**
 * Created by Houssam on 06/01/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Request {

  constructor(private http:Http) {}

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
    }).subscribe(res => {
      console.log('post result %o', res);
    });
  }
  deleteDataBase(value){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    let order = "database="+value;

    return this.http.post('http://localhost:8888/My_PhpMyAdmin/my_phpmyadmin/src/back/deleteDB.php', order, {
      headers: headers
    }).subscribe(res => {
      console.log('post result %o', res);
    });
  }
}
