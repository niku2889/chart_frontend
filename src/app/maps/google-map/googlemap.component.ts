import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-google-map',
   templateUrl:'./googlemap-component.html',
   styleUrls: ['./googlemap-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class GoogleMapComponent implements OnInit {

	lat: number = 40.730610;
  	lng: number = -73.935242;

	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

	ngOnInit() {
      this.translate.get('Google Map').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}
