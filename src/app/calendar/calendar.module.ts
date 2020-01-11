import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarRoutes } from './calendar.routing';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
		RouterModule.forChild(CalendarRoutes)
	],
	declarations: [ 
		CalendarComponent
	]
})

export class CalendarDemoModule {}
