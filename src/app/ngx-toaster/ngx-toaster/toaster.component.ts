import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

const quotes = [
  {
    title: 'Title',
    message: 'Message'
  },
  {
    title: '😃',
    message: 'Supports Emoji'
  },
  {
    title: null,
    message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
  },
  {
    title: null,
    message: 'Titles are not always needed'
  },
  {
    title: 'Title only 👊',
    message: null,
  },
  {
    title: '',
    message: `Supports Angular ${VERSION.full}`,
  },
];

const types = ['success', 'error', 'info', 'warning'];

@Component({
  selector: 'ms-resizable',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToasterComponent implements OnInit {

  options  : ToastrConfig;
  private lastInserted  : number[] = [];

  title   = '';
  message = '';
  type    = types[0];
  version = VERSION;

  constructor(private pageTitleService: PageTitleService, 
              public toastrService: ToastrService,
              public translate : TranslateService) {
        
    this.options = this.toastrService.toastrConfig;
    this.toastrService.success('Welcome to toaster page!', 'Toastr fun!');
   }

  ngOnInit() {
    this.translate.get('Ngx Toaster').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

  //open toast method is used to open a toast.
  openToast() {
    let m = this.message;
    let t = this.title;
    if (!this.title.length && !this.message.length) {
      const randomMessage = quotes[Math.floor(Math.random()*quotes.length)];
      m = randomMessage.message;
      t = randomMessage.title;
    }
    const opt = JSON.parse(JSON.stringify(this.options));
    const inserted = this.toastrService[this.type](m, t, opt);
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }

  //clearToasts method is used to clear the toast.
  clearToasts() {
    this.toastrService.clear();
  }

  //clearLastToast method is used to clear the last toast.
  clearLastToast() {
    this.toastrService.clear(this.lastInserted.pop());
  }
}
