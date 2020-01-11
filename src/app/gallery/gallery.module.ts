import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { GalleryOneComponent } from './gallery-v1/gallery-v1.component';
import { GalleryTwoComponent } from './gallery-v2/gallery-v2.component';
import { GalleryThreeComponent } from './gallery-v3/gallery-v3.component';
import { GalleryRoutes } from './gallery.routing';
import { GalleryV4Component } from './gallery-v4/gallery-v4.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      RouterModule.forChild(GalleryRoutes)
   ],
   declarations: [ 
      GalleryOneComponent,
      GalleryTwoComponent,
      GalleryThreeComponent,
      GalleryV4Component,
   ]
})

export class GalleryDemoModule {}
