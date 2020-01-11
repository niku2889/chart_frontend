import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  encapsulation: ViewEncapsulation.None  
})

export class PricingComponent implements OnInit {

	constructor(private pageTitleService: PageTitleService,
	       		public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('Pricing').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
