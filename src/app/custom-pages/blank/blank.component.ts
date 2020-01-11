import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

	constructor(private pageTitleService: PageTitleService,
					public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('Blank').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
