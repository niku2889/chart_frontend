import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-ecommerce-order',
  templateUrl:'./ecommerce-order-component.html',
  styleUrls: ['./ecommerce-order-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EcommerceOrderComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Ecommerce Order').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}