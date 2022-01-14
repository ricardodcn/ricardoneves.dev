import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: InicialComponent },
    ])
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
