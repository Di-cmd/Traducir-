import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TraducirService {


  localeEvent=new Subject<string>();


  constructor(private translate:TranslateService) { }

 
changeLocale(locale:string){
this.translate.use(locale);
this.localeEvent.next(locale);

}
 

}
