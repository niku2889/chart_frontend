import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  clients : object[] = [{
    image : 'assets/img/user-1.jpg',
    name : 'Anne Doe',
    color : 'primary',
  },{
    image : 'assets/img/user-2.jpg',
    name : 'Maria Kate',
    color : 'success'
  },{
    image : 'assets/img/user-3.jpg',
    name : 'Elisa Janson',
    color : 'warning'
  },{
    image : 'assets/img/user-4.jpg',
    name : 'Janson Doe',
    color : 'info'
  },{
    image : 'assets/img/user-5.jpg',
    name : 'Jhon Smith',
    color : 'danger'
  },{
    image : 'assets/img/user-6.jpg',
    name : 'Rose Kate',
    color : 'green'
  }]


  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('Testimonials').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

}
