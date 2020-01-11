import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ResizableComponent }  from './resizable/resizable.component';
import { ResizableRoutes } from './resizable.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ResizableModule,
      RouterModule.forChild(ResizableRoutes),
      TranslateModule
   ],
   declarations: [ 
      ResizableComponent
   ]
})

export class ResizableDemoModule {}
