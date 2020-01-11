import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { DragulaService } from 'ng2-dragula';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ms-dragula',
	templateUrl:'./dragula-component.html',
	styleUrls: ['./dragula-component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DragulaDemoComponent implements OnInit {
	
	group1: Object[] = [{
		name: 'Bernice Riley',
      des: 'Sr. Developer'
	},{
		name: 'Rob Throne',
      des: 'Developer'
	},{
		name: 'Lia Levele',
      des: 'Php Developer'
	},{
		name: 'Kara Cross',
      des: 'Front End Developer'
	},{
		name: 'Tim Ross',
      des: 'Designer'
	},{
		name: 'Heath Brook',
      des: 'iOS Developer'
	}];

	group2: any[] = [{
		name: 'Kenny White',
      des: 'Sr. Developer'
	},{
		name: 'Hugh James',
      des: 'Php Developer'
	},{
		name: 'Peter Bloss',
      des: 'Php Developer'
	},{
		name: 'Criss Laim',
      des: 'Sr. Developer'
	},{
		name: 'Dekola Jhonson',
      des: 'Designer'
	},{
		name: 'Heather Bill',
      des: 'Front End Developer'
	}];
	
	constructor(private pageTitleService: PageTitleService,
				private dragulaService: DragulaService,
				public translate: TranslateService) {}

	ngOnInit() {
		this.translate.get('Dragula').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}



