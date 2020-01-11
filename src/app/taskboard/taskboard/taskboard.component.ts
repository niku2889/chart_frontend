import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-taskboard',
   templateUrl: './taskboard.component.html',
   styleUrls: ['./taskboard.component.scss'],
   encapsulation : ViewEncapsulation.None
})

export class TaskboardComponent implements OnInit {

   title : string;
   message : string;
   selected = "Team A";

   allTaskboard : any = [
      {
         title : "Responsive",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "1"
      },
      {
         title : "Assessment",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "1"
      }
   ]

   todoTaskboard : any = [
      {
         title : "Navigation",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "2"
      },
      {
         title : "Responsive",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "2"
      }
   ]

   doingTaskboard :  any = [
      {
         title : "QA Testing",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "3"
      },
      {
         title : "Navigation",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "3"
      }
   ]

   doneTaskboard : any = [
      {
         title : "Assessment",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "4"
      },
      {
         title : "QA Testing",
         member : "Team",
         taskboard_image : [ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
         message : "Lorem ipsum is simply a dummy text",
         id : "4"
      }
   ]

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Task Board').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   /**
     * onCreate Method is used to create new Task Board.
     */
   onCreate() {
      if(this.message && this.title && this.selected != "") {
         let create = {
            taskboard_image:[ "assets/img/user-1.jpg","assets/img/user-2.jpg","assets/img/user-3.jpg","assets/img/user-4.jpg","assets/img/user-5.jpg"],
            title: this.title,
            message : this.message,
            member : this.selected,
            id : new Date().getTime()
         }
         this.allTaskboard.push(create);
         this.title = "";
         this.message = "";
      }
   }

   /**
     * viewMore method is used to automatically create view more or view less button to show/hide content.
     */
   viewMore(id) {
      if(document.getElementById('taskBoard'+id).className == 'more-content d-none'){
         document.getElementById('taskBoard'+id).className = 'more-content d-block';
         document.getElementById("view-more"+id).innerHTML = "View Less";
      }
      else{
         document.getElementById('taskBoard'+id).className = 'more-content d-none';
         document.getElementById("view-more"+id).innerHTML = "View More";
      }
   }

}