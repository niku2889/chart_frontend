import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../core/directive/directives.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard-v1/dashboard.component';
import { DashboardOneComponent } from './dashboard-v2/dashboard2.component';
import { DashboardRoutes } from './dashboard.routing';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
};
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
export function highchartsModules() {
   // apply Highcharts Modules to this array
   return [stock, more];
}
@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      NgxChartsModule,
      DirectivesModule,
      PerfectScrollbarModule,
      TranslateModule,
      ChartsModule,
      ChartModule,
      RouterModule.forChild(DashboardRoutes)
   ],
   declarations: [
      DashboardComponent,
      DashboardOneComponent,
   ],
   providers: [
      {
         provide: HIGHCHARTS_MODULES,
         useFactory: highchartsModules
      }
   ]
})

export class DashboardModule { }
