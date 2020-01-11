import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
declare var $ : any;
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-tooltip',
   templateUrl:'./tooltip-component.html',
   styleUrls: ['./tooltip-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class TooltipComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Tooltip').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();
	}
}
