import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { GoogleMapComponent}  from './google-map/googlemap.component';
import { VectorMapComponent}  from './vector-map/vectormap.component';
import { LeafletMapComponent}  from './leaflet-map/leafletmap.component';
import { MapsRoutes } from './maps.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
      RouterModule.forChild(MapsRoutes),
      TranslateModule
   ],
   declarations: [ 
      GoogleMapComponent,
      VectorMapComponent,
      LeafletMapComponent,
   ]
})

export class MapsDemoModule {}
