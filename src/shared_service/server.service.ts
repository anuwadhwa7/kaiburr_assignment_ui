import { Injectable } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions } from '@angular/http';
import{ Observable }   from 'rxjs';
import { throwError } from 'rxjs';
import{Server}  from '../app/server';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ServerService {

  private baseUrl:string='http://localhost:8080/server';
  private headers = new Headers ({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private server:Server;

  constructor(private _http : Http ) { }

  getItems() {
    console.log("Hello");
    return  this._http.get(this.baseUrl+'/',this.options).pipe(map((response: any) => response.json()))
    .pipe(catchError(this.handleError));
  }

  getItem(id:Number){

    return this._http.get(this.baseUrl+'/'+id,this.options).pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }
  deleteItem(id:Number){

    return this._http.delete(this.baseUrl+'/'+id,this.options);
  }


  addItem(server:Server){

    return this._http.post(this.baseUrl+'/',JSON.stringify(server),  this.options).pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }

  saveOrUpdateItem(server:Server){

    return this._http.put(this.baseUrl,JSON.stringify(server),  this.options).pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }

  handleError(error:Response) {
    return throwError(error||"SERVER ERROR");
  }

  setter(server:Server) {
    this.server=server;
  }
   getter() {
   return this.server;
  }

}
