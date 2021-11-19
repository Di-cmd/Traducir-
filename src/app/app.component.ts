import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

//Importo el servicio traducir (Puente)
import { TraducirService } from './services/traducir.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transtale-module';

  langs: string[] = [];

  constructor(
    public  translate:TranslateService,
    private traducir:TraducirService
  ){

  }


  ngOnInit(): void {

    // // Este permite optener la data de otro componente
    // this.traducir.disparador.subscribe(data =>{
    //   console.log("recibiendo la data",data)
    //   //this.translate.use(data);
    // })
  }


  changeLocale(locale:string){
    this.traducir.changeLocale(locale);
  }

}
