import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-ecommerce-product',
  templateUrl:'./ecommerce-product-component.html',
  styleUrls: ['./ecommerce-product-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EcommerceProductComponent implements OnInit {

  products : object[] = [{
    id: '#100001',
    title : 'Dumbells',
    price : 224.00,
    stock : 1530,
    image : 'assets/img/D-product-1.jpg'
  },{
    id: '#100002',
    title : 'Racquets',
    price : 240.00,
    stock : 1242,
    image : 'assets/img/D-product-2.jpg'
  },{
    id: '#100003',
    title : 'T-Shirts',
    price : 250.00,
    stock : 1342,
    image : 'assets/img/D-product-3.jpg'
  },{
    id: '#100004',
    title : 'Mats',
    price : 200.00,
    stock : 500,
    image : 'assets/img/D-product-4.jpg'
  },{
    id: '#100005',
    title : 'Metal Bowl',
    price : 150.00,
    stock : 450,
    image : 'assets/img/D-product-5.jpg'
  },{
    id: '#100006',
    title : 'Boxing Glove',
    price : 400.00,
    stock : 400,
    image : 'assets/img/D-product-6.jpg'
  },{
    id: '#100007',
    title : 'Protein',
    price : 224.00,
    stock : 1000,
    image : 'assets/img/D-product-7.jpg'
  },{
    id: '#100008',
    title : 'Dumbells',
    price : 224.00,
    stock : 800,
    image : 'assets/img/D-product-8.jpg'
  }]
  
  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('Ecommerce Product').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }
}