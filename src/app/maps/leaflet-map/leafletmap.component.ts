import { Component, OnInit, ElementRef,ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-map';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ms-leaflet-maps',
	templateUrl:'./leafletmap-component.html',
	styleUrls: ['./leafletmap-component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class LeafletMapComponent implements OnInit {

	ngOnInit() {
		this.translate.get('Leaflet Map').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

	constructor(private _elementRef:ElementRef,
					private pageTitleService: PageTitleService,
					public translate: TranslateService) { }

	ngAfterViewInit() {
		let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

		L.Icon.Default.imagePath = 'assets/img/';
		var map = L.map(el).setView([51.505, -0.09], 13);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([51.5, -0.09]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup();
	}

}
