import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FeedbackComponent implements OnInit {

	feedbackList : any [] = [
		{
			heading: "Lorem Ipsum is simply dummy text",
			detail: "Why You Should Not Go To",
			feedbackBy : "Gourav",
			numberOfComments : 1,
			commentLikes : 3,
			likeByUser : false
		},
		{
			heading : "Cras in risus eu mi mollis egestas.",
			detail : "In ut ex eget metus elementum tristique.",
			feedbackBy : "Gourav",
			numberOfComments : 1,
			commentLikes : 4,
			likeByUser : false
		},
		{
			heading : "Etiam fringilla dui et lacinia tempus.",
			detail : "In ut ex eget metus elementum tristique.",
			feedbackBy : "Gourav",
			numberOfComments : 1,
			commentLikes : 2,
			likeByUser : false
		}
	]

	roadMapList : any = [
		{
			status : "Completed",
			title1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			title2 : "Curabitur non est malesuada nisl molestie pharetra a id elit.",
			date : "January 2019" 
		},
		{
			status : "Completed",
			title1 : "Mauris et mi bibendum ante fermentum iaculis in at mi.",
			title2 : "Sed vel metus eget erat rutrum lobortis eu at lacus.",
			date : "January 2019" 
		},
		{
			status : "Completed",
			title1 : "Aenean euismod erat nec enim fringilla finibus.",
			title2 : "Morbi tristique augue vitae finibus maximus.",
			date : "January 2019" 
		}
	]

	searchList : any = [
		{
			title : "Lorem Ipsum is simply dummy text",
			detail : "Vestibulum ultrices augue vitae nisl faucibus, fringilla volutpat nisi fermentum.",
			numberOfComments : 1,
			commentBy : "Gourav",
			status : "Completed",
			likeByUser : false,
			commentLikes : 2
		},
		{
			title : "Donec cursus tellus quis euismod posuere.",
			detail : "Praesent ut ipsum vestibulum, vehicula nunc et, accumsan risus.",
			numberOfComments : 1,
			commentBy : "Gourav",
			status : "Completed",
			likeByUser : false,
			commentLikes :3
		},
		{
			title : "Integer tempor purus non velit imperdiet posuere.",
			detail : "Vivamus posuere nisi nec libero dapibus, ut congue metus laoreet.",
			numberOfComments : 1,
			commentBy : "Gourav",
			status : "Completed",
			likeByUser : false,
			commentLikes :2
		},
		{
			title : "Aenean in enim sit amet diam sodales euismod.",
			detail : "Vivamus viverra felis nec velit consequat, pharetra rutrum enim aliquet.",
			numberOfComments : 1,
			commentBy : "Gourav",
			status : "Completed",
			likeByUser : false,
			numberofLikes : 3
		}

	]

	constructor(private pageTitleService : PageTitleService,
				private coreService : CoreService,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('Feedback').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}	

	// addFeedback method is used to open a add feedback dialog.
	addFeedback() {
		this.coreService.addFeedbackDialog().
			then(res => { this.getAddFeedbackPopupResponse (res)})
			.catch(error => console.log(error));
	}

	/**
	  * getAddFeedbackPopupResponse method is used to get a new Feedback dialog response.
	  * if response will be get then add new feedback into feedback list.
	  */
   	getAddFeedbackPopupResponse(response: any){
		if(response){
			let addUser = {
				heading : response.heading,
				detail : response.detail,
				feedbackBy : "Girija",
				numberOfComments : 1,
				commentLikes : 1
			}
			this.feedbackList.push(addUser);     
	 	}	
    }

    //addComment method is used to open a add comment dialaog.
    addComment() {
    	this.coreService.addCommentDialog();
    }

    //likeByCurrentUser method is used to like/dislike the feedback by the current user.
    likeByCurrentUser(feedbackData){
    	if(feedbackData.likeByUser == false){
    		feedbackData.commentLikes = feedbackData.commentLikes + 1;
    		feedbackData.likeByUser = true;
    	}else{
    		feedbackData.commentLikes = feedbackData.commentLikes - 1;
    		feedbackData.likeByUser = false;
    	}
    }

}
