import { Routes } from '@angular/router';

import { GalleryOneComponent } from './gallery-v1/gallery-v1.component';
import { GalleryTwoComponent } from './gallery-v2/gallery-v2.component';
import { GalleryThreeComponent } from './gallery-v3/gallery-v3.component';
import { GalleryV4Component } from './gallery-v4/gallery-v4.component';


export const GalleryRoutes: Routes = [{
  path: '',
  redirectTo: 'galleryV1',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'galleryV1',
    component: GalleryOneComponent
  }, {
    path: 'galleryV2',
    component: GalleryTwoComponent
  }, {
    path: 'galleryV3',
    component: GalleryThreeComponent
  },{
    path: 'galleryV4',
    component: GalleryV4Component
  }]
}];
