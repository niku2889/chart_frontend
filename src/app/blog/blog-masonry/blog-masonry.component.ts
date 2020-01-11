import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-blog-masonry',
  templateUrl:'./blog-masonry-component.html',
  styleUrls: ['./blog-masonry-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BlogMasonryComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Blog Masonry').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}