import { Routes } from '@angular/router';

import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingV2Component } from './pricingV2/pricingV2.component';
import { BlankComponent } from './blank/blank.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

export const PagesRoutes: Routes = [{
   path: '',
   redirectTo: 'timeline',
   pathMatch: 'full',
   },{
   path: '',
   children: [{
      path: 'testimonials',
      component: TestimonialsComponent
   }, {
      path: 'timeline',
      component: TimelineComponent
   }, {
      path: 'pricing',
      component: PricingComponent
   }, {
      path: 'pricingV2',
      component: PricingV2Component
   }, {
      path: 'blank',
      component: BlankComponent
   }, {
      path: 'contact-list',
      component: ContactListComponent
   }, {
      path: 'feedback',
      component: FeedbackComponent
   },{
      path: 'faq',
      component: FaqComponent 
   },{
      path: 'about',
      component: AboutComponent 
   },{
      path: 'search',
      component: SearchComponent 
   }
   ]
}];