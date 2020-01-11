import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

	searchPageContent : any [] = [
		{
			image : "assets/img/project-1.jpg",
			heading : "Now Is The Time For You To Know The Truth About",
			date : "1/12/17",
			content : "Consectetur adipisicing elit lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex quis nostrud exercitation ullamco laboris nisi.",
			name : "Karen Coffee"
		},
		{
			image : "assets/img/project-2.jpg",
			heading : "7 Advices That You Must Listen Before Studying",
			date : "2/2/18",
			content : "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipisicing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
			name : "Irene Propst"
		},
		{
			image : "assets/img/project-3.jpg",
			heading : "Five Awesome Things You Can Learn From Studying",
			date : "8/5/18",
			content : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris nisi.",
			name : "Brenda Mendoza"
		},
		{
			image : "assets/img/project-4.jpg",
			heading : "What You Know About And What You Don't Know About",
			date : "11/5/18",
			content : "Labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quis nostrud exercitation ullamco laboris nisi aliquip ex.",
			name : "Linda Oneal"
		},
		{
			image : "assets/img/project-5.jpg",
			heading : "I Will Tell You The Truth About In The Next 60 Seconds",
			date : "10/11/18",
			content : "Consectetur adipisicing elit lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex quis nostrud exercitation ullamco laboris nisi.",
			name : "Robert Ryan"
		}	
	]

	constructor(private pageTitleService : PageTitleService,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('Search').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
