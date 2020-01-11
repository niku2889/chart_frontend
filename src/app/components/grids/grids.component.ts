import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-grids',
   templateUrl:'./grids-component.html',
   styleUrls: ['./grids-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class GridsComponent implements OnInit{
	
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Grids').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
