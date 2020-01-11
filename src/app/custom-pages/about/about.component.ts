import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

	aboutProject : any = [
		{
			numberOf : "53",
			heading : "Award Winnings",
			content : "Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
		},
		{
			numberOf : "1280",
			heading : "Total Projects",
			content : "Many variations of passages of Lorem Ipsum available, but the majority have suffered."
		},
		{
			numberOf : "522",
			heading : "Gov. Projects",
			content : "Our strength lies in our ability to design innovative architecture and restructuring conventional."
		},
		{
			numberOf : "800",
			heading : "Satisfied Clients",
			content : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
		}
	]

	recentWork : any = [
		{
			image : "assets/img/project-1.jpg",
			learn : "Learn About",
			heading : "Everything You Need To Know About.",
			content : "Planning does not get better by chance it get's better  on the ability to adapt and implement those changes."
		},
		{
			image : "assets/img/project-2.jpg",
			learn : "Learn About",
			heading : "The Biggest Contribution Of To Humanity.",
			content : "hough not the first thing you notice,yet a roof has much to say about a home's style.Roof shapes and material."
		},
		{
			image : "assets/img/project-3.jpg",
			learn : "Learn About",
			heading : "This Story Behind Will Haunt You Forever!",
			content : "Just sit right back and you’ll hear a tale a tale of a fateful trip that started from this tropic port aboard this tiny ship."
		}
	]

	description_1 : any = [
		{
			image : "assets/img/businesscard.png",
			heading : "Best design available for your business",
			headline : "Ut labore et lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!",
			content : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur, Ut enim ad minim veniam adipisicing elit.",
			signatureImage : "assets/img/signature1.png"
		}
	]

	description_2 : any = [
		{
			image : "assets/img/phone-float.png",
			heading : "learning is not difficult at all! you just need a great teacher!",
			headline : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante!",
			content : "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam lorem ipsum dolor sit amet.",
			signatureImage : "assets/img/signature2.png"
		}
	]

	description_3 : any = [
		{
			image : "assets/img/gallery7.jpg",
			heading : "Here's what industry insiders say about",
			headline : "labore et dolore magna lorem ipsum dolor sit amet, consectetur adipisicing elit!",
			content : "Tempor incididunt lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut magna aliqua. Ut enim ad minim veniam labore et dolore.",
			signatureImage : "assets/img/signature3.png"
		}
	]
	
	constructor(private pageTitleService: PageTitleService,
				public router : Router,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('About').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
