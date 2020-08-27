import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
declare var window;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public fireAuth               : any;
  public windowRef              : any;
  public otp                    : string = "";
  public verificationId         : string = "";
  public countryCode            : any ;
  public mobileNumber           : any = "";
  phoneNumberWithCode           : any;

  public hideNshowProgressBar   : boolean = false;
  public verifyDisable          : boolean = true;
  selectedFrom                  : any = "loginForm";
  progressNumber                : number = 0;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
  };
  constructor(private router: Router,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private databaseService: DatabaseService) {
      this.fireAuth = firebase.auth();
     }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const self = this;
    self.windowRef = (<any>window);
    self.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      //'type' : 'image',
      'size': 'invisible',
      //'badge': 'inline',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });

    // render the rapchaVerifier. 
    self.windowRef.recaptchaVerifier.render().then(function (widgetId) {
      self.windowRef.recaptchaWidgetId = widgetId;
    });
  }

  //otp change input value
  onOtpChange(event) {
    //console.log(event);
    this.otp = event;
  }

   //send verification code
   async sendCode(mobileNumber) {
    let self = this;
    //set progress bar value
    self.hideNshowProgressBar = true;
    try {
      const appVerifier = this.windowRef.recaptchaVerifier;
      const credential = await this.fireAuth.signInWithPhoneNumber(mobileNumber, appVerifier);
      if (credential) {
        //hide progress bar loader
        self.progressNumber = 1;
        this.hideNshowProgressBar = false;
        //switched to otp form
        this.selectedFrom = 'loginOtpForm';
        this.showToast('OTP Sent Successfully!');
        //this.showVerify = true;
        this.otp = "";
        //In case of iOS credential is VerificationId
        this.verificationId = credential.verificationId;
        //this.smsRetrieverFunction();
      } else {
        //hide progress bar loader
        self.progressNumber = 0;
        this.hideNshowProgressBar = false;
        //clearInterval(timerInterval);
      }
      this.windowRef.confirmationResult = credential;
    } catch (error) {
      //hide progress bar loader
      self.progressNumber = 0;
      this.hideNshowProgressBar = false;
      this.showAlert("", error);
    }
  }

  // send verification code to mobile no
  async sendVarificationCode() {
    var self = this;
    try {
      if(self.mobileNumber == "" || self.mobileNumber == undefined) {
        self.showErrorToast("Please enter mobile number");
        return;
      } 
      if(self.countryCode == "" || self.countryCode == undefined) {
        self.showErrorToast("Please select countryCode");
        return;
      } 
      //show progress bar loade
      self.hideNshowProgressBar = true;
      const isPhoneNumberValid = await this.checkMobileNoLengthFunc(self,self.mobileNumber);
      if (isPhoneNumberValid) {
        self.phoneNumberWithCode = "+91" + this.mobileNumber;
        self.sendCode(self.phoneNumberWithCode);
      } else {
        //hide progress bar loader
        self.hideNshowProgressBar = false;
      }
    } catch (error) {
      self.hideNshowProgressBar = false;
      self.showAlert(`INFORMATION`, `Phone number is not registered Please Signup`);
    }
  }

  //check Mobile No Length
  async checkMobileNoLengthFunc(self, number) {
    var mobileNo = Number(number);
    var mobileSNo = String(number);
    var integer = Number.isInteger(mobileNo);
    if (mobileSNo.trim() == '') {
      self.showToast("Number required");
      return false;
    } else if (integer == false && mobileSNo.length < 11) {
      self.showToast("Number is not valid");
      return false;
    } else if (mobileNo == 0 || mobileNo.toString().length != mobileSNo.length) {
      self.showToast("Number is not valid");
      return false;
    } else {
      var object = {
        type: 'phone',
        countryCode: this.countryCode,
        data: mobileNo
      }
      const data = await self.databaseService.checkEmailOrNumberExistGCP(object);
      if (data) {
        //Call the singInUserInFb function for check entered user is valid or not
        return true;
      } else {
        //self.showToast("Phone number is not registerd.");
        self.showAlert(`INFORMATION`, `Phone number is not registered Please Signup`);
        return false;
      }
    }
  }

   //
   async verifyNumber() {
    var self = this;
    // disable button
    self.verifyDisable = false;
    //set progress bar value
    self.hideNshowProgressBar = true;
    self.progressNumber = 0;
    try {
      // check OTP required
      if (!self.otp || self.otp.length == 0) {
        //Displaying toast to welcome user for Login!
        var toast = await self.toastCtrl.create({
          message: 'OTP required',
          duration: 1500,
          position: 'bottom'
        });
        await toast.present();
        //set verify number btn Enable
        self.verifyDisable = true;
        //set progress bar value
        self.hideNshowProgressBar = false;
        return;
      }
      var verificationId = self.verificationId;
      const signInCredential = await firebase.auth.PhoneAuthProvider.credential(verificationId, self.otp);
      //alert("signInCredential -> " + signInCredential);
      const userObject: any = await firebase.auth().signInWithCredential(signInCredential);
      if (userObject && userObject['user'] && userObject['user'].uid) {
        const userId = userObject['user'].uid;
        const userData = await this.databaseService.getUserDataByPhoneNo(self.phoneNumberWithCode);
        if (userData.isSuccess) {
          //set verify number btn Enable
          self.verifyDisable = true;
          //set progress bar value
          self.progressNumber = 1;
          self.hideNshowProgressBar = false;

          const userDataDetails = userData.data[0];
          //for client user
          if (userDataDetails) {
            localStorage.setItem("name", userDataDetails.FullName);
            localStorage.setItem("phoneNumber", userDataDetails.phoneNumber);
            localStorage.setItem("email", userDataDetails.email);
            localStorage.setItem("userId", userDataDetails.userId);
            localStorage.setItem("isloggedIn", "true");
            //set login form page
            self.selectedFrom = "loginForm";
            //navigate to home page for all use
            this.router.navigateByUrl("home");
          } else {
            //set verify number btn Enable
            self.verifyDisable = true;
            //set progress bar value
            self.progressNumber = 0;
            self.hideNshowProgressBar = false;
            self.showAlert(`INFORMATION`, `You don't have the permission to access the application`)
          }
        } else {
          //set verify number btn Enable
          self.verifyDisable = true;
          //set progress bar value
          self.progressNumber = 0;
          self.hideNshowProgressBar = false;
          self.showToast(`User not found with ${self.phoneNumberWithCode} number`);
        }
      } else {
        //set verify number btn Enable
        self.verifyDisable = true;
        //set progress bar value
        self.progressNumber = 0;
        self.hideNshowProgressBar = false;
        self.showToast(`User not found with ${self.phoneNumberWithCode} number`);
      }
    } catch (error) {
      //set verify number btn Enable
      self.verifyDisable = true;
      //set progress bar value
      self.progressNumber = 0;
      self.hideNshowProgressBar = false;
      self.showToast(error.message);
    }
  }

  changeNumber() {
    //this.showVerify = false;
    this.otp = "";
  }

  //show alert
  async showAlert(title, message) {
    let self = this;
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      backdropDismiss:false,
      buttons: [{
        text: 'Ok',
        cssClass: "success-color",
        handler: () => {
          //navigate to signup page for all use
          self.router.navigateByUrl("signup");
        }
      }]
    });
    return await alert.present();
  }

  //show toast
  async showToast(message) {
    var toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

  //showErrorToast function for error
  async showErrorToast(messages) {
		var self = this ;
		var toast = await self.toastCtrl.create({
			message         : messages,
			duration        : 2000,
			position        : 'bottom',
			cssClass        : "cmnToastColor"
		});
		toast.present();
  }

}
