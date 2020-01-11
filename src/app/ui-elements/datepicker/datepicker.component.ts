import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-datepicker',
   templateUrl:'./datepicker-component.html',
   styleUrls: ['./datepicker-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit{
	
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Datepicker').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   public dateOptions: INgxMyDpOptions = {
      dateFormat: 'dd.mm.yyyy',
   };

   public dateOptions2: INgxMyDpOptions = {
      dateFormat: 'mm.dd.yyyy',
   };

   public dateOptions3: INgxMyDpOptions = {
      dateFormat: 'yyyy.mm.dd',
   };

   public model: Object = { date: { year: 2018, month: 10, day: 9 } };
   public model2: Object = { date: { year: 2018, month: 11, day: 10 } };
   public model3: Object = { date: { year: 2018, month: 12, day: 11 } };


   // optional date changed callback
   onDateChanged(event: IMyDateModel): void {
   // date selected
   }
}
