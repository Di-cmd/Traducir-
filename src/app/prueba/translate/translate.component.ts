import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TraducirService } from 'src/app/services/traducir.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(
    private  translate:TranslateService,
    private traducir:TraducirService
  ) {
translate.setDefaultLang('es');
translate.use('es');
  }

  ngOnInit(): void {
  
    this.traducir.localeEvent.subscribe(locale=>this.translate.use(locale));
  }

}
