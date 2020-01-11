import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-timeline',
   templateUrl: './timeline.component.html',
   styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {

   constructor(private pageTitleService : PageTitleService,
               private coreService : CoreService,
               public translate : TranslateService) { }

   ngOnInit() {
      this.translate.get('Timeline').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   //onVideoPlayer method is used to open a video player dialog.
   onVideoPlayer() {
      this.coreService.openVideoPlayerDialog('https://www.youtube.com/watch?v=drQD9oq9tTk');
   }
   
}
