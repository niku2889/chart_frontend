import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-cards',
  	templateUrl:'./cards-component.html',
  	styleUrls: ['./cards-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardsComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

 	ngOnInit() {
      this.translate.get('Cards').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
