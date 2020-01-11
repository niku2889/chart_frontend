import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { EcommerceProductComponent } from './ecommerce-product/ecommerce-product.component';
import { EcommerceProductDetailComponent } from './ecommerce-product-detail/ecommerce-product-detail.component';
import { EcommerceProductListComponent } from './ecommerce-product-list/ecommerce-product-list.component';
import { EcommerceProductCartComponent } from './ecommerce-product-cart/ecommerce-product-cart.component';
import { EcommerceOrderComponent } from './ecommerce-order/ecommerce-order.component';
import { EcommerceOrderDetailComponent } from './ecommerce-order-detail/ecommerce-order-detail.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceV2Component } from './invoice-v2/invoice-v2.component';
import { EcommerceRoutes } from './ecommerce.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(EcommerceRoutes),
      TranslateModule
   ],
   declarations: [ 
      EcommerceProductComponent,
      EcommerceProductDetailComponent,
      EcommerceProductListComponent,
      EcommerceProductCartComponent,
      EcommerceOrderComponent,
      EcommerceOrderDetailComponent,
      InvoiceComponent,
      InvoiceV2Component
   ]
})

export class EcommerceDemoModule {}
