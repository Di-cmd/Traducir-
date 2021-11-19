import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { TranslateComponent } from './translate/translate.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// Fin: Se importa las librerias para ngx Translate:


// export function cargarTraductorJson(http: HttpClient){
//   return new TranslateHttpLoader(http,"../../assets/i18n/")
// };


export function cargarTraductorJson(http: HttpClient){
  return new TranslateHttpLoader(http,"../assets/i18n/",".json")
};


@NgModule({
  declarations: [
    TranslateComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: (cargarTraductorJson),
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    
  ]

})


export class PruebaModule { }
