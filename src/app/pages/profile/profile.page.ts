import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  constructor(public databaseService: DatabaseService) {
    
    //use localStorage for user
    this.user = localStorage;
  }

  ngOnInit() {
   
  }
  ionViewWillEnter() {
   console.log("profile")
   console.log(this.user)
    
  }

}
