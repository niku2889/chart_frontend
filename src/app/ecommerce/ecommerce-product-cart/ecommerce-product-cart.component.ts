import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-ecommerce-product-cart',
  templateUrl:'./ecommerce-product-cart-component.html',
  styleUrls: ['./ecommerce-product-cart-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EcommerceProductCartComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('Ecommerce Product Cart').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

}