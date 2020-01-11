import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DragulaModule } from 'ng2-dragula';
import { SortablejsModule, SortablejsOptions} from "ngx-sortablejs";

import { DragulaDemoComponent}  from './dragula/dragula.component';
import { SortableDemoComponent}  from './sortablejs/sortable.component';
import { DragDropRoutes } from './dragndrop.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      DragulaModule.forRoot(),
      SortablejsModule,
      RouterModule.forChild(DragDropRoutes),
      TranslateModule
   ],
   declarations: [ 
      DragulaDemoComponent,
      SortableDemoComponent,
   ]
})

export class DragDropDemoModule {}
