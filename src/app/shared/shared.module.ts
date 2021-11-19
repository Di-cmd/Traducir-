import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';





import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormularioComponent } from './formulario/formulario.component';

import { PruebaModule } from '../prueba/prueba.module';
import { AppModule } from '../app.module';
// Fin: Se importa las librerias para ngx Translate:

// esta configuracion se cambia dependiendo del modulo
export function cargarTraductorJson(http: HttpClient){
  return new TranslateHttpLoader(http,"../assets/i18n/")
};



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (cargarTraductorJson),
        deps: [HttpClient]
      },
      isolate:true
    }),
      
      PruebaModule
  ],
  exports:[TranslateModule],
})
export class SharedModule {




 }
