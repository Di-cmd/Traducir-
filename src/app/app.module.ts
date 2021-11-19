import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { PruebaModule } from './prueba/prueba.module';
// Fin: Se importa las librerias para ngx Translate:


export function cargarTraductorJson(http: HttpClient){
  return new TranslateHttpLoader(http,"../assets/i18n/",".json")
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: (cargarTraductorJson),
        deps: [HttpClient]
      },
    })
  

  ],
  exports:[

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
