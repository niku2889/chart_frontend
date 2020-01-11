import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  'selector': 'ms-blog-grid',
  templateUrl:'./blog-grid-component.html',
  styleUrls: ['./blog-grid-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BlogGridComponent implements OnInit {

  blogs : object[] = [{
    image : 'assets/img/project-1.jpg',
    title : 'Things that make you love and hate.'
  },{
    image : 'assets/img/project-2.jpg',
    title : 'The biggest contribution of to humanity.'
  },{
    image : 'assets/img/project-3.jpg',
    title : 'Master the skills of and be successful.'
  },{
    image : 'assets/img/project-4.jpg',
    title : 'How is going to change your business strategies.'
  },{
    image : 'assets/img/project-5.jpg',
    title : 'How can increase your profit.'
  },{
    image : 'assets/img/project-6.jpg',
    title : 'Learn all about from this politician.'
  },{
    image : 'assets/img/project-7.jpg',
    title : 'How will be in the future.'
  },{
    image : 'assets/img/project-8.jpg',
    title : 'The biggest contribution of to humanity.'
  }];
  
  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.get('Blog Grid').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

}