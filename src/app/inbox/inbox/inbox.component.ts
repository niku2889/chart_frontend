import {
  Component, OnInit, ViewChildren, QueryList, ElementRef,
  Renderer
} from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Inbox').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}
