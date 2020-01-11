import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-progress-bar',
  	templateUrl:'./progress-bar-component.html',
  	styleUrls: ['./progress-bar-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnInit{
	
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Progress Bar').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
