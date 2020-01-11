import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   'selector': 'ms-blog-edit',
   templateUrl:'./blog-edit-component.html',
   styleUrls: ['./blog-edit-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class BlogEditComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Blog Edit').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}