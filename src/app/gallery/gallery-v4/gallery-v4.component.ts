import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'app-gallery-v4',
   templateUrl: './gallery-v4.component.html',
   styleUrls: ['./gallery-v4.component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class GalleryV4Component implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Gallery V4').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
