import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-blog-detail',
   templateUrl:'./blog-detail-component.html',
   styleUrls: ['./blog-detail-component.scss'],
   encapsulation: ViewEncapsulation.None
   })

export class BlogDetailComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Blog Detail').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}