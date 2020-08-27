import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraDirection, CameraSource } from '@capacitor/core';
import { AuthService } from '../services/auth.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public name                   : any = "";
	public email                  : any = "";
  public mobileNumber           : any = "";
  public address1               : any = "";
  public address2               : any = "";
  public state                   : any = "";
  public city                   : any = "";
  public country                  : any = "";
  public zipcode                : any = "";
  public countryCode            : any;
  public profilePhoto           : any = "";
  public identityProof          : any = "";
  nameError                     : any;
  emailError                    : any;
  mobileNoError                 : any;
  addressError                  : any;
  profilePhotoError             : any;
  identityProofError            : any;
  identityProofPhoto            : any;
  identityProofImage            : any;
  profileImage                  : any;

  constructor(private toastCtrl: ToastController,
    private databaseService: DatabaseService,
    private authdataService: AuthService,
    private router: Router,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  goToLogin() {
    let self = this;
    //navigate to login page for all use
    self.router.navigateByUrl("login");
  }

  //checkInputValue
	checkInputValue(inputValue)  {
		var self = this;
		switch(inputValue) {
			case 'name':
        self.nameError = "";
        break;
			case 'email':
        self.emailError = "";
        break;
			case 'mobileNumber':
				self.mobileNoError = "";
				break;
			case 'address1':
        self.addressError = "";
        break;
      case 'address2':
        self.addressError = "";
        break;
      case 'state':
        self.addressError = "";
        break;
      case 'city':
        self.addressError = "";
        break;
      case 'country':
        self.addressError = "";
        break;
      case 'zipcode':
        self.addressError = "";
        break;
      case 'profilePhoto':
        self.profilePhotoError = "";
        break;
      case 'identityProof':
        self.identityProofError = "";
        break;
		}
	}

  async createAccount(event) {
    var self = this;
    var currentTarget =  event.currentTarget;
    
    //Set the boolean variable for validate the field validation
    if(self.name == "" || self.name == undefined) {
      self.showErrorToast("Please enter full name");
      self.nameError = "Please enter full name";
      return;
    }
    if(self.address1 == "" || self.address1 == undefined) {
      self.showErrorToast("Please enter address");
      self.addressError = "Please enter address";
      return;
    }
    if(self.address2 == "" || self.address2 == undefined) {
      self.showErrorToast("Please enter address");
      self.addressError = "Please enter address";
      return;
    }
    if(self.profilePhoto == "" || self.profilePhoto == undefined) {
      self.showErrorToast("Please upload photo");
      self.profilePhotoError = "Please upload photo";
      return;
    }
    if(self.identityProof == "" || self.identityProof == undefined) {
      self.showErrorToast("Please upload identityProof");
      self.identityProofError = "Please upload identityProof";
      return;
    } else {
      //used for check email pattern
      var email         = self.email.trim();
      var enteredEmail  = email.toLowerCase();
      
      //var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      //Here we will match the input email with the emailPattern
      if(enteredEmail != "" && enteredEmail != undefined) {
        if(enteredEmail.match(emailPattern)) {
        } else {
          //show the toast and return the msg
          self.showErrorToast("Please enter valid email");
          self.emailError  = "Please enter valid email";
          return;
        }
      } else {
        //show the toast and return the msg
        self.showErrorToast("Please enter email");
        self.emailError  = "Please enter email";
        return;
      }
      //Set the boolean variable for validate the field validation
      if(self.mobileNumber == "" || self.mobileNumber == undefined) {
        self.showErrorToast("Please enter mobile number");
        self.mobileNoError  = "Please enter mobile number";
        return;
      } else {
        var enteredNumber = self.mobileNumber;
        var phoneno       = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(enteredNumber.match(phoneno)) {
          var countryCode =  self.countryCode;
          
        } else {
          self.showErrorToast("Enter valid number");
          self.mobileNoError  = "Enter valid number";
          return;
        } 
        var object = {
          "FullName"          : self.name.trim(),
          "email"             : self.email.trim(),
          "phoneNumber"       : countryCode +  Number(self.mobileNumber),
          "profilePhoto"      : self.profilePhoto,
        }
        var addressDetail = {
          "address1"      : self.address1,
          "address2"      : self.address2,
          "state"         : self.state,
          "city"          : self.city,
          "country"       : self.country.toLowerCase(),
          "zipcode"       : self.zipcode
        }
        var identityDetail = {
          "identityProof"      : self.identityProof,
          "identityProofPhoto" : self.identityProofPhoto
        }
        object["identityDetail"] = identityDetail;
        object["address"]        = addressDetail;
        self.databaseService.addUser(function(isSuccess){
          if(isSuccess) {
            self.showSuccessToast("Account Created Successfully");
              //navigate to login page for all use
            self.router.navigateByUrl("login");
          }
        },object)
      }
    }
  }

  // get front photo for profile img
  async handlePhotoValue(event) {
    let self = this;
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      direction: CameraDirection.Front,
    });
    // Can be set to the src of an image now
    this.profileImage = image.dataUrl;
    //created compress images
    self.compressImagePath(this.profileImage, 0.5, "profilePic", function (isSuccess, compressedURl) {
      //this.smallImg = compressImg;
      if (isSuccess) {
        self.profilePhoto = compressedURl;
      }
    });
  }

  // get photo of Id Card
  async clickIdentityPhoto() {
    let self = this;
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      direction: CameraDirection.Front
    });
    // Can be set to the src of an image now
    this.identityProofImage = image.dataUrl;
    //created compress images
    self.compressImagePath(this.identityProofImage, 0.5, "idProof", function (isSuccess, compressedURl) {
      //this.smallImg = compressImg;
      if (isSuccess) {
        self.identityProofPhoto = compressedURl;
      }
    });
  }

  //computDecodeURI function for decode the image to the encode format
  computDecodeURI(url) {
    return decodeURIComponent(url);
  }

  //compressImagePath
  compressImagePath(img, quality: number = 1, type :any , callback) {
    let self = this;
    const canvas: any = document.createElement("canvas");
    const image = new Image();
    const width = 400;
    image.onload = () => {
        const scaleFactor = width / image.width;
        canvas.width = width;
        canvas.height = image.height * scaleFactor;
        const ctx = canvas.getContext('2d');
        const height = (image.height * scaleFactor);
        // img.width and img.height will contain the original dimensions
        ctx.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);

        self.authdataService.addPhotoFromCamera(function (isImageAdded: Boolean, imageDownloadURL: any) {
            if (isImageAdded) {
                callback(true, imageDownloadURL)
            } else {
                callback(false, dataUrl)
            }
        }, dataUrl, type);
    }
    image.src = img;
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
  
  //showSuccessToast function for error
  async showSuccessToast(messages) {
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
