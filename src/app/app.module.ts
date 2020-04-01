import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListserverComponent } from './listserver/listserver.component';
import { ServerformComponent } from './serverform/serverform.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ServerService } from '../shared_service/server.service';

const appRoutes :Routes = [
  {path : '',component:ListserverComponent},
  {path : 'add',component:ServerformComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListserverComponent,
    ServerformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
