import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-ecommerce-order-detail',
  templateUrl:'./ecommerce-order-detail-component.html',
  styleUrls: ['./ecommerce-order-detail-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EcommerceOrderDetailComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Ecommerce Order Detail').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}