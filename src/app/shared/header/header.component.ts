import { Component, OnInit } from '@angular/core';

//Importo el translate
import { TranslateService } from '@ngx-translate/core';


//Importo el servicio traducir (Puente)
import { TraducirService } from 'src/app/services/traducir.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public langs: string[] = [];


  constructor(
    public  translate:TranslateService,
    private traductir:TraducirService
  ) {

    // permite ver los lenguajes y seleccionarlos y mostrarlos en pantalla
    this.translate.addLangs(["es", "en","por"]);
    this.translate.setDefaultLang('es'),
    this.langs = this.translate.getLangs();

    translate.get(this.langs).subscribe(res=>{
      console.log(res);

      this.translate.use('es')
      
    });

   }

  ngOnInit(): void {
  }


      //Permite cambiar el idioma
      camnbiarLang(langs: string){
        this.traductir.changeLocale(langs);
        this.translate.use(langs);
        console.log(langs);
        // this.traductir.disparador.emit({lang});
      
      }


}
