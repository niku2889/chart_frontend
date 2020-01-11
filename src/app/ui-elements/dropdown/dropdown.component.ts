import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-dropdown',
  	templateUrl:'./dropdown-component.html',
  	styleUrls: ['./dropdown-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit{
	
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Dropdown').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
