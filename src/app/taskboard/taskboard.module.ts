import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskboardRoutes } from './taskboard.routing';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(TaskboardRoutes),
		DragulaModule.forRoot(),
		TranslateModule
	],
	declarations: [ 
		TaskboardComponent
	]
})

export class TaskboardModule {}
