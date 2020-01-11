import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-gallery-v2',
  templateUrl:'./gallery-v2-component.html',
  styleUrls: ['./gallery-v2-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class GalleryTwoComponent implements OnInit {

	images : object[] = [{
		image : 'assets/img/gallery1.jpg',
		title : 'Buildings',
		post : '04/03/2017'
	},{
		image : 'assets/img/gallery2.jpg',
		title : 'Social',
		post : '04/05/2017'
	},{
		image : 'assets/img/gallery3.jpg',
		title : 'Note Good',
		post : '04/07/2017'
	},
	{
		image : 'assets/img/gallery4.jpg',
		title : 'Direction',
		post : '04/13/2017'
	},
	{
		image : 'assets/img/gallery5.jpg',
		title : 'Focus',
		post : '04/25/2017'
	},
	{
		image : 'assets/img/gallery6.jpg',
		title : 'Virtual',
		post : '04/26/2017'
	}]

	constructor(private pageTitleService: PageTitleService,
	            public translate: TranslateService) {
	}

	ngOnInit() {
		this.translate.get('Gallery V2').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}
	
}