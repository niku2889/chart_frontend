import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation : ViewEncapsulation.None
})

export class FaqComponent implements OnInit {

	showFaqStatus 		: boolean = false;
	showFaqQuesStatus   : boolean = true;

	pillsWelcomeContent : any = [
		{
			heading : "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.",
			content : "Sed do eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Adipisicing ipsum dolor sit amet, consectetur sed do eiusmod elitlorem.",
			content : "Sit amet, consectetur adipisicing elit lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Amet Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.",
			content : "Reprehenderit Incididunt ut lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse in."
		},
		{
			heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
			content : "Reprehenderit Incididunt ut lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse in."
		},
		{
			heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
			content : "Sit amet, consectetur adipisicing elit lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
			content : "Reprehenderit Incididunt ut lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse in."
		},
		{
			heading : "Dolor sit amet ipsum consectetur adipisicing elit sed do eiusmod lorem.",
			content : "Sed do eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet, consectetur adipisicing elit,et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
			content : "Sit amet, consectetur adipisicing elit lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
			content : "Reprehenderit Incididunt ut lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse in."
		},
		{
			heading : "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.",
			content : "Sed do eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Adipisicing ipsum dolor sit amet, consectetur sed do eiusmod elitlorem.",
			content : "Sit amet, consectetur adipisicing elit lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
		},
		{
			heading : "Amet Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.",
			content : "Reprehenderit Incididunt ut lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse in."
		}
	]

	pillsCreateContent : any = [
		{	
			heading : "Lorem ipsum dolor sit amet.",
			content : [
				{
					data : "When I will receive my package i did not got any call?",
					id : 1
				},
				{
					data : "I did not get email and text messege afer payment?",
					id : 2
				},
				{
					data : "How to track the shipping order?",
					id : 3
				},
				{
					data : "How can i cancel the order?",
					id : 4
				},
				{
					data : "BOA credit card has problem with shopping?",
					id : 5
				},
				{
					data : "How to change the password of my account?",
					id : 6
				},
				{
					data : "How to pay bill throgh net banking?",
					id : 7
				}
			]
		},
		{	
			heading : "Morbi hendrerit amet porta.",
			content : [
            {
               data : "When I will receive my package i did not got any call?",
               id : 1
            },
            {
               data : "I did not get email and text messege afer payment?",
               id : 2
            },
            {
               data : "How to track the shipping order?",
               id : 3
            },
            {
               data : "How can i cancel the order?",
               id : 4
            },
            {
               data : "BOA credit card has problem with shopping?",
               id : 5
            },
            {
               data : "How to change the password of my account?",
               id : 6
            },
            {
               data : "How to pay bill throgh net banking?",
               id : 7
            }
         ]
		},
		{	
			heading : "Vivamus nunc imperdiet sagittis.",
			content : [
            {
               data : "When I will receive my package i did not got any call?",
               id : 1
            },
            {
               data : "I did not get email and text messege afer payment?",
               id : 2
            },
            {
               data : "How to track the shipping order?",
               id : 3
            },
            {
               data : "How can i cancel the order?",
               id : 4
            },
            {
               data : "BOA credit card has problem with shopping?",
               id : 5
            },
            {
               data : "How to change the password of my account?",
               id : 6
            },
            {
               data : "How to pay bill throgh net banking?",
               id : 7
            }
         ]
		},
		{	
			heading : "Pellentesque vel congue aliquam.",
			content : [
            {
               data : "When I will receive my package i did not got any call?",
               id : 1
            },
            {
               data : "I did not get email and text messege afer payment?",
               id : 2
            },
            {
               data : "How to track the shipping order?",
               id : 3
            },
            {
               data : "How can i cancel the order?",
               id : 4
            },
            {
               data : "BOA credit card has problem with shopping?",
               id : 5
            },
            {
               data : "How to change the password of my account?",
               id : 6
            },
            {
               data : "How to pay bill throgh net banking?",
               id : 7
            }
         ]
		},
		{	
			heading : "Curabitur eros dolor sit amet.",
			content : [
            {
               data : "When I will receive my package i did not got any call?",
               id : 1
            },
            {
               data : "I did not get email and text messege afer payment?",
               id : 2
            },
            {
               data : "How to track the shipping order?",
               id : 3
            },
            {
               data : "How can i cancel the order?",
               id : 4
            },
            {
               data : "BOA credit card has problem with shopping?",
               id : 5
            },
            {
               data : "How to change the password of my account?",
               id : 6
            },
            {
               data : "How to pay bill throgh net banking?",
               id : 7
            }
         ]
		}    
	]

	pillsConnectContent : any = [
		{	
			heading : "Lorem ipsum dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Morbi hendrerit amet porta.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Vivamus nunc imperdiet sagittis.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Pellentesque vel congue aliquam.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Curabitur eros dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		}    
	]

	pillsResultContent : any = [
		{	
			heading : "Lorem ipsum dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Morbi hendrerit amet porta.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Vivamus nunc imperdiet sagittis.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Pellentesque vel congue aliquam.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Curabitur eros dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		}    
	]

	pillsAccountContent : any = [
		{	
			heading : "Lorem ipsum dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Morbi hendrerit amet porta.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Vivamus nunc imperdiet sagittis.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Pellentesque vel congue aliquam.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Curabitur eros dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		}    
	]

	pillsShareContent : any = [
		{	
			heading : "Lorem ipsum dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Morbi hendrerit amet porta.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Vivamus nunc imperdiet sagittis.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Pellentesque vel congue aliquam.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		},
		{	
			heading : "Curabitur eros dolor sit amet.",
			content : [
				"Donec pharetra eros ultricies ultricies.",
				"Vivamus elementum dapibus egestas.",
				"Fusce sed ipsum ut nibh vitae vitae orci.",
				"Phasellus at sem at mattis ac at orci.",
				"Sed semper nunc eleifend faucibus.",
				"Vivamus ac ante eu elit mollis tempus.",
				"Sed iaculis lacus sit  pellentesque."
			]
		}    
	]

	myFaqPage : any = [
		{
			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			image : "assets/img/project-1.jpg"
 		},
 		{
			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			image : "assets/img/project-2.jpg"
 		},
 		{
			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			image : "assets/img/project-3.jpg"
 		},
 		{
			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			image : "assets/img/project-4.jpg"
 		},
 		{
			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			image : "assets/img/project-5.jpg"
 		},	
	]

	relatedThings  : any = [
		"Reprehenderit in voluptate",
		"Consectetur adipisicing elit",
		"Laboris nisi ut aliquip",
		"Excepteur sint occaecat",
		"Duis aute irure dolor",
		"Exercitation ullamco laboris",
		"Pariatu excepteur sint "
	]

	constructor(private router : Router,
				private pageTitleService : PageTitleService,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('FAQ').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

	// onMyFaqPageContent method is used to show a my faq content.
	onMyFaqPageContent() {
		this.showFaqStatus = true;
		this.showFaqQuesStatus = false;
	}

	// showQuesContent method is used to show list of question content.
	showQuesContent() {
		this.showFaqStatus = false;
		this.showFaqQuesStatus = true;
	}

	//faqListActive method is used to active the feedback-list-active class.
	faqListActive() {
		document.getElementById('pills-tab').classList.toggle("faq-list-responsive");
	}
}
