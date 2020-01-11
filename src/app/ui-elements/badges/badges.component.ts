import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-badges',
  	templateUrl:'./badges-component.html',
  	styleUrls: ['./badges-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BadgesComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Badges').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
