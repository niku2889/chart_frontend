import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizableComponent implements OnInit {

  public style : Object = {};

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Resizable').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   //validate method will be called before each resize event.
   public validate(event: ResizeEvent): boolean {
      const MIN_DIMENSIONS_PX: number = 50;
      if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
         return false;
      }
      return true;
   }

   //onResizeEnd Method is Called after the mouse is released after a resize event.
   public onResizeEnd(event: ResizeEvent): void {
      this.style = {
         position: 'fixed',
         left: `${event.rectangle.left}px`,
         top: `${event.rectangle.top}px`,
         width: `${event.rectangle.width}px`,
         height: `${event.rectangle.height}px`
      };
   }

}
