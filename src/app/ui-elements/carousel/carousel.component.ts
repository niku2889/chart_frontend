import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-carousel',
   templateUrl:'./carousel-component.html',
   styleUrls: ['./carousel-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit{
	
	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Carousel').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
	}
}
