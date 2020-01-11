import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
declare var jQuery: any;
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-vector-map',
    templateUrl:'./vectormap-component.html',
    styleUrls: ['./vectormap-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class VectorMapComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

   ngOnInit() {
      jQuery('#vmap').vectorMap({ map: 'world_en' });
      this.translate.get('Vector Map').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}
