import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-buttons',
   templateUrl:'./tabs-component.html',
   styleUrls: ['./tabs-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class TabsComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Tabs').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
