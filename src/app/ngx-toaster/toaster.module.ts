import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ToasterComponent }  from './ngx-toaster/toaster.component';
import { ToasterRoutes } from './toaster.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ToastrModule.forRoot(),
      RouterModule.forChild(ToasterRoutes),
      TranslateModule
   ],
   declarations: [ 
      ToasterComponent
   ]
})

export class ToasterDemoModule {}
