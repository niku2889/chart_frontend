import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-alert',
   templateUrl:'./alert-component.html',
   styleUrls: ['./alert-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Alert').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
