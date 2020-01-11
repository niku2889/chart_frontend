import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { GlyphiconsComponent}  from './glyphicons/glyphicons.component';
import { FontAwesomeComponent}  from './font-awesome/font-awesome.component';
import { MaterialIconComponent}  from './material-icons/material-icons.component';
import { LineaComponent}  from './linea/linea.component';
import { SimpleLineIconsComponent}  from './simple-line-icons/simple-line-icons.component';

import { IconsRoutes } from './icons.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(IconsRoutes),
      TranslateModule
   ],
   declarations: [ 
      GlyphiconsComponent,
      FontAwesomeComponent,
      MaterialIconComponent,
      LineaComponent,
      SimpleLineIconsComponent
   ]
})

export class IconsModule {}
