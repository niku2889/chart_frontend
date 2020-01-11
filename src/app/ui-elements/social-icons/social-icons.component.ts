import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-social-icons',
   templateUrl:'./social-icons-component.html',
   styleUrls: ['./social-icons-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class SocialIconsComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Social Icons').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
