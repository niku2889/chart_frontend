import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-pricing',
   templateUrl: './pricingV2.component.html',
   styleUrls: ['./pricingV2.component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class PricingV2Component implements OnInit {

   checked : boolean = true;

   pricingV2 : any = [
      {
         ribbonName : "Popular",
         heading : "Starter",
         label : "Basic Level Plan",
         monthlyPrice : "150",
         yearlyPrice : "1800",
         id : "starter",
         features : [
            {
               icon : "fa-check",
               content : "100+ Graph &amp; Charts",
               color : "text-success"
            },
            {
               icon : "fa-check",
               content : "100+ Components",
               color : "text-success"
            },
            {
               icon : "fa-times",
               content : "10+ Themes color",
               color : "text-danger"
            },
            {
               icon : "fa-times",
               content : "100+ Features",
               color : "text-danger"
            },
            {
               icon : "fa-check",
               content : "100+ Icons",
               color : "text-success"
            }
         ]
      },
      {
         ribbonName : "Popular",
         heading : "Gold",
         label : "Advance Level Plan",
         status : "popular shadow-box",
         monthlyPrice : "250",
         yearlyPrice : "3000",
         id : "gold",
         features : [
            {
               icon : "fa-check",
               content : "100+ Graph &amp; Charts",
               color : "text-success"
            },
            {
               icon : "fa-check",
               content : "100+ Components",
               color : "text-success"
            },
            {
               icon : "fa-times",
               content : "10+ Themes color",
               color : "text-danger"
            },
            {
               icon : "fa-times",
               content : "100+ Features",
               color : "text-danger"
            },
            {
               icon : "fa-check",
               content : "100+ Icons",
               color : "text-success"
            }
         ]
      },
      {
         ribbonName : "Popular",
         heading : "Business",
         label : "Expert Level Plan",
         monthlyPrice : "150",
         yearlyPrice : "1800",
         id : "business",
         features : [
            {
               icon : "fa-check",
               content : "100+ Graph &amp; Charts",
               color : "text-success"
            },
            {
               icon : "fa-check",
               content : "100+ Components",
               color : "text-success"
            },
            {
               icon : "fa-times",
               content : "10+ Themes color",
               color : "text-danger"
            },
            {
               icon : "fa-times",
               content : "100+ Features",
               color : "text-danger"
            },
            {
               icon : "fa-check",
               content : "100+ Icons",
               color : "text-success"
            }
         ]
      }
   ]

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Pricing V2').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   //switchEvent method is audit checkbox checked or unchecked.-
   switchEvent(event){
      this.checked = event.target.checked;
   }
}
