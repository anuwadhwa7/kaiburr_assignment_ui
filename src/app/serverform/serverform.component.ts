import { Component, OnInit } from '@angular/core';
import{Server}  from '../server';
import{Router}  from '@angular/router';
import{ServerService}  from '../../shared_service/server.service';

@Component({
  selector: 'app-serverform',
  templateUrl: './serverform.component.html',
  styleUrls: ['./serverform.component.css']
})
export class ServerformComponent implements OnInit {

  public server:Server;

  constructor(private _serverService:ServerService,private _rotuer:Router) { }

  ngOnInit() {
   this.server=this._serverService.getter();
  }

  processForm(){
    if(this.server.id==undefined){
       this._serverService.addItem(this.server).subscribe((server)=>{
         console.log(server);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._serverService.saveOrUpdateItem(this.server).subscribe((server)=>{
         console.log(server);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
