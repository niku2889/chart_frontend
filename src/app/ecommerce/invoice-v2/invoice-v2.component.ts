import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-invoice-v2',
  templateUrl: './invoice-v2.component.html',
  styleUrls: ['./invoice-v2.component.scss']
})

export class InvoiceV2Component implements OnInit {
	
	checkboxes : any ;

	invoiceV2 : any = [
		{
			serialNumber : "Order #53431",
			name : "Joseph Pinney",
			image : "assets/img/user-1.jpg",
			email : "JosephAPinney@rhyta.com",
			status : "Paid",
			statusBgColor : "success",
			amount : "99.08",
			date: "26 Dec 2018" 
 		},
 		{
			serialNumber : "Order #53432",
			name : "Jane Walker",
			image : "assets/img/user-2.jpg",
			email : "JaneDWalker@rhyta.com",
			status : "Pending",
			statusBgColor : "danger",
			amount : "59.08",
			date: "27 Oct 2018" 
 		},
 		{
			serialNumber : "Order #53433",
			name : "Carl McClellny",
			image : "assets/img/user-4.jpg",
			email : "CarlMcClellan@rhyta.com",
			status : "Paid",
			statusBgColor : "success",
			amount : "39.08",
			date: "26 Dec 2018" 
 		},
 		{
			serialNumber : "Order #53434",
			name : "Gordon Schrom",
			image : "assets/img/user-3.jpg",
			email : "GordonESchrom@jourrapide.com",
			status : "Pending",
			statusBgColor : "danger",
			amount : "79.08",
			date: "2 Dec 2018" 
 		},
 		{
			serialNumber : "Order #53435",
			name : "Bradly Tucker",
			image : "assets/img/user-5.jpg",
			email : "BradlyTucker@rhyta.com",
			status : "Paid",
			statusBgColor : "success",
			amount : "36.54",
			date: "26 May 2018" 
 		},
 		{
			serialNumber : "Order #53436",
			name : "Ruby Young",
			image : "assets/img/user-6.jpg",
			email : "RubyJYoung@jourrapide.com",
			status : "Pending",
			statusBgColor : "danger",
			amount : "56.08",
			date: "6 June 2018" 
 		},
 		{
			serialNumber : "Order #53437",
			name : "Allen Hall",
			image : "assets/img/user-7.jpg",
			email : "AllenHall@rhyta.com",
			status : "Paid",
			statusBgColor : "success",
			amount : "90.02",
			date: "09 May 2018" 
 		},
 		{
			serialNumber : "Order #53438",
			name : "Nancy Paz",
			image : "assets/img/user-8.jpg",
			email : "NancyPaz@rhyta.com",
			status : "Pending",
			statusBgColor : "danger",
			amount : "79.08",
			date: "16 Dec 2018" 
 		},
 		{
			serialNumber : "Order #53439",
			name : "Sheryl Brown",
			image : "assets/img/user-9.jpg",
			email : "SherylBrown@rhyta.com",
			status : "Paid",
			statusBgColor : "success",
			amount : "50.08",
			date: "12 Dec 2018" 
 		},
 		{
			serialNumber : "Order #534310",
			name : "Lauren Hang",
			image : "assets/img/user-10.jpg",
			email : "LaurenHang@rhyta.com",
			status : "Pending",
			statusBgColor : "danger",
			amount : "32.08",
			date: "10 Jan 2018" 
 		}
	]
	
	constructor(private pageTitleService: PageTitleService,
					public translate: TranslateService) {
    }

	ngOnInit() {
		this.translate.get('Invoice List').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

	/**
	  * selectall method is used to Checked/Unchecked all other checkboxes when one master is checked/Unchecked.
	  */
	selectall(source) {
		this.checkboxes = document.getElementsByName('checkboxes');
		for(var i=0, n=this.checkboxes.length;i<n;i++) {
			this.checkboxes[i].checked = source.target.checked;
		}
	}

}
