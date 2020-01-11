import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-accordions',
  	templateUrl:'./accordions-component.html',
  	styleUrls: ['./accordions-component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AccordionsComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Accordions').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
