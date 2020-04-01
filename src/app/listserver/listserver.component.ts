import { Component, OnInit } from '@angular/core';
import{ServerService}  from '../../shared_service/server.service';
import{Server}  from '../server';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-listserver',
  templateUrl: './listserver.component.html',
  styleUrls: ['./listserver.component.css']
})
export class ListserverComponent implements OnInit {
  public servers:Server[];

  constructor(private _serverService:ServerService, private _router:Router) { 
    console.log("Hellp")
  }

  ngOnInit() {
    console.log("Hello");
    this._serverService.getItems().subscribe((servers)=>{
      console.log(servers);
      this.servers=servers;
    },(error)=>{
      console.log(error);
    })
  }
  deleteItem(server){
    this._serverService.deleteItem(server.id).subscribe((data)=>{
        this.servers.splice(this.servers.indexOf(server),1);
    },(error)=>{
      console.log(error);
    });
  }

  saveOrUpdateItem(server){
     this._serverService.setter(server);
     this._router.navigate(['/add']);
   }

   newItem(){
      let server = new Server();
    this._serverService.setter(server);
     this._router.navigate(['/add']);
   }
}
