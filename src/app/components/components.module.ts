import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ListComponent } from './list/list.component';
import { GridsComponent } from './grids/grids.component';
import { ComponentRoutes } from './components.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ComponentRoutes),
    TranslateModule
  ],
  declarations: [ 
    ListComponent,
    GridsComponent
  ]
})

export class ComponentDemoModule {}
