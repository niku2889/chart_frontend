import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   'selector': 'ms-invoice',
   templateUrl:'./invoice-component.html',
   styleUrls: ['./invoice-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class InvoiceComponent implements OnInit {

   invoiceTable : any []= [
      {
         serialNumber : "1",
         itemName : "Laptop",
         itemBrand : "Brand Model VGN-TXN27N/B 11.1 Notebook PC",
         quantity : "2",
         unitPrice : "1799"
      },
      {
         serialNumber : "2",
         itemName : "Warranty",
         itemBrand : "Two Year Extended Warranty - Parts and Labor",
         quantity : "3",
         unitPrice : "633"
      },
      {
         serialNumber : "3",
         itemName : "LED",
         itemBrand : "80cm (32) HD Ready LED TV",
         quantity : "3",
         unitPrice : "1200"
      }
   ]

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Invoice').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}