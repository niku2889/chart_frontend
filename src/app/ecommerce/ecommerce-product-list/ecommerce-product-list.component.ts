import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
declare var $ : any;

@Component({
  'selector': 'ms-ecommerce-product-list',
  templateUrl:'./ecommerce-product-list-component.html',
  styleUrls: ['./ecommerce-product-list-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EcommerceProductListComponent implements OnInit {

   constructor(private pageTitleService : PageTitleService,
               public translate : TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Ecommerce Product List').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      $('.table').footable();
   }

}