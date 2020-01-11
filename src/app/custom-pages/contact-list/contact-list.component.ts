import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-contact-list',
   templateUrl: './contact-list.component.html',
   styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  
   checkboxes    : any;

   userContactList : any = [
      {
         image: "assets/img/user-1.jpg",
         firstName: "Joseph",
         lastName: "Pinney",
         email: "JosephAPinney@rhyta.com",
         phoneNumber: "737 2736 2378",
         location: "Chicago",
         company: "Millenia Life",
         work: "App Developer",
         shortName: "JP",
         newStatus : true,
         etc: "Worker"
      },
      {
         image: "assets/img/user-2.jpg",
         firstName: "Jane",
         lastName: "Walker",
         email: "JaneDWalker@rhyta.com",
         phoneNumber: "737 2736 2378",
         location: "Raleigh's",
         company: "Sulphur",
         work: "Software Developer",
         shortName: "JW",
         newStatus : true,
         etc: "Worker"
      },
      {
         image: "assets/img/user-3.jpg",
         firstName: "Gordon",
         lastName: "Schrom",
         email: "GordonESchrom@jourrapide.com",
         phoneNumber: "737 2736 2378",
         location: "Southfield",
         company: "Thompson",
         work: "Apple Developer",
         shortName: "GS",
         etc: "Worker"
      },
      {
         image: "assets/img/user-4.jpg",
         firstName: "Carl",
         lastName: "McClellan",
         email: "CarlCMcClellan@rhyta.com",
         phoneNumber: "737 2736 2378",
         location: "Baltimore",
         company: "Stratacard",
         work: "Web Designer Developer",
         shortName: "CM",
         etc: "Worker"
      },
      {
         image: "assets/img/user-5.jpg",
         firstName: "Bradly",
         lastName: "Tucker",
         email: "BradlyDTucker@rhyta.com",
         phoneNumber: "737 2736 2378",
         location: "Miller",
         company: "Vitagee",
         work: "Apple Developer",
         shortName: "BT",
         etc: "Worker"
      },
      {
         image: "assets/img/user-6.jpg",
         firstName: "Ruby",
         lastName: "Young",
         email: "RubyJYoung@jourrapide.com",
         phoneNumber: "737 2736 2378",
         location: "Monroe",
         company: "Handy City",
         work: "Web Designer Developer",
         shortName: "RY",
         etc: "Worker"
      },
      {
         image: "assets/img/user-7.jpg",
         firstName: "Allen",
         lastName: "Hall",
         email: "AllenTHall@armyspy.com",
         phoneNumber: "737 2736 2378",
         location: "Baltimore",
         company: "Carter's Foods",
         work: "Software Developer",
         shortName: "AH",
         etc: "Worker"
      },
      {
         image: "assets/img/user-8.jpg",
         firstName: "Nancy",
         lastName: "Paz",
         email: "NancyRPaz@teleworm.us",
         phoneNumber: "737 2736 2378",
         location: "Marshallberg",
         company: "AJ Bayless",
         work: "App Developer",
         shortName: "NP",
         etc: "Worker"
      },
      {
         image: "assets/img/user-9.jpg",
         firstName: "Sheryl",
         lastName: "Brown",
         email: "SherylEBrown@rhyta.com",
         phoneNumber: "737 2736 2378",
         location: "San Francisco",
         company: "Modern Realty",
         work: "Android Developer",
         shortName: "SB"
      },
      {
         image: "assets/img/user-10.jpg",
         firstName: "Lauren",
         lastName: "Hang",
         email: "LaurenCHang@armyspy.com",
         phoneNumber: "737 2736 2378",
         location: "Richmond",
         company: "Capitalcorp",
         work: "App Developer",
         shortName: "LH"
      }
   ]

   constructor(private pageTitleService: PageTitleService,
               private coreService: CoreService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Contact List').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   /**
     * selectall method is used to Checked/Unchecked all other checkboxes when one master is checked/Unchecked.
     */
   selectall(source) {
      this.checkboxes = document.getElementsByName('checkboxes');
      for(var i=0, n=this.checkboxes.length;i<n;i++) {
         this.checkboxes[i].checked = source.target.checked;
      }
   }

   /**
     * onEditContactList  method is used to open a edit dialog.
     */
   onEditContactList(data, index){
     this.coreService.editContactList(data).
         then(res => {this.getEditResponse(res,data,index)})
         .catch(error => console.log(error))
   }

   /**
     * getEditResponse method is used to edit a user data. 
     */
   getEditResponse(response : any , data, i){
      if(response) {
         this.userContactList[i].firstName = response.firstName,  
         this.userContactList[i].lastName = response.lastName,
         this.userContactList[i].email    = response.email,
         this.userContactList[i].phoneNumber = response.phoneNumber,
         this.userContactList[i].location = response.location,  
         this.userContactList[i].company = response.company
      }
   }

   /** 
     * onDeleteContactList method is used to open a delete dialog.
     */
   onDeleteContactList(i) {
      this.coreService.deleteUserDialog("Are you sure you want to delete this contact permanently?").
         then(res => {this.getDeleteResponse(res,i)})
         .catch(error => console.log(error))
   }

   /**
     * getDeleteResponse method is used to delete a user from the user list.
     */
   getDeleteResponse(response, i){
      if(response === true){
         this.userContactList.splice(i,1);
      }
   }

   /** 
     * onViewContactList method is used to open a view contact list dialog.
     */
   onViewContactList(data) {
      this.coreService.viewList(data);
   }

   /** 
     * addNewContactDialog method is used to open a add new contact dialog.
     */   
   addNewContactDialog() {
      this.coreService.addNewContactDialog().
         then(res => { this.getAddContactPopupResponse (res)})
         .catch(error => console.log(error));
   }


   /**
     * getAddUserPopupResponse method is used to get a new contact dialog response.
     * if response will be get then add new contact into contact list.
     */
   getAddContactPopupResponse(response: any){
      if(response){
         let addUser = {
            image: "assets/img/user-9.jpg",
            firstName : response.firstName,
            lastName : response.lastName,
            email : response.email,
            phoneNumber : response.phoneNumber,
            location : response.location,
            company : response.company
         }
         this.userContactList.push(addUser);     
      }
   }
}
