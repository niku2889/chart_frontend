import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-buttons',
   templateUrl:'./buttons-component.html',
   styleUrls: ['./buttons-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Buttons').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
