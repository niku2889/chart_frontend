import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-pagination',
  	templateUrl:'./pagination-component.html',
  	styleUrls: ['./pagination-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit{
	
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Pagination').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
