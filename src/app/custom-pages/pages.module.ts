import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingV2Component } from './pricingV2/pricingV2.component';
import { BlankComponent } from './blank/blank.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PagesRoutes } from './pages.routing';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    TranslateModule
  ],
  declarations: [ 
    TestimonialsComponent,
    TimelineComponent,
    PricingComponent,
    PricingV2Component,
    BlankComponent,
    ContactListComponent,
    FeedbackComponent,
    FaqComponent,
    AboutComponent,
    SearchComponent
  ]
})

export class PagesDemoModule {}
