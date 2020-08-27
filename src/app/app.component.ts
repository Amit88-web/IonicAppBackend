import { Component } from '@angular/core';

import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
    public menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>Are You Sure To Logout</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            //logout function
            this.logoutFunction();
          }
        }
      ]
    });

    await alert.present();
  }

   //logout function
  async logoutFunction(){
    //remove item from localStorage
    localStorage.removeItem("name");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.setItem("isloggedIn", "false");
    //close menu at login page
    this.menuCtrl.close();
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
    //this.router.navigate(["/"]);
    this.router.navigate(['/login']);
  }
}
