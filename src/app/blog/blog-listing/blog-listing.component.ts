import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-blog-listing',
  templateUrl:'./blog-listing-component.html',
  styleUrls: ['./blog-listing-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BlogListingComponent implements OnInit {

  posts : object[] = [{
    image : 'assets/img/project-1.jpg',
    title : 'Things that make you love and hate.'
  },{
    image : 'assets/img/project-2.jpg',
    title : 'How can ease your pain.'
  },{
    image : 'assets/img/project-3.jpg',
    title : 'Everything you need to know about.'
  },{
    image : 'assets/img/project-4.jpg',
    title : 'How can increase your profit.'
  },{
    image : 'assets/img/project-5.jpg',
    title : 'Learn all about from this politician.'
  },{
    image : 'assets/img/project-6.jpg',
    title : 'Understand before you regret.'
  }];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('Blog Listing').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

}