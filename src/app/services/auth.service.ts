import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public fireAuth: any;
  public STORAGE_REF: any;
  public db: any;

  constructor() {

      let self = this
    //creates a firebase auth reference, now you can get access to all the auth methods with this.fireAuth
    this.fireAuth = firebase.auth();
    this.STORAGE_REF = firebase.storage();
    this.db = firebase.firestore();
  }

  //addPhotoFromCamera
  addPhotoFromCamera(callback: Function, imageString: any, type: string): any {
    let self = this;
    //Uplaod file
    let image = imageString;
    let IMAGE_STORAGE_REF : any;
    if (!imageString.startsWith("data:image")) {
      image = `data:image/jpeg;base64,${imageString}`;
    } 
    if(type == "idProof") {
      IMAGE_STORAGE_REF = self.STORAGE_REF.ref('datastore/idProof');
    } else {
      IMAGE_STORAGE_REF = self.STORAGE_REF.ref('datastore/profileImage');
    }
    let rn = new Date().getTime().toString();
    rn = type + rn;
    let task = IMAGE_STORAGE_REF.child(rn).putString(image, 'data_url');

    //update progress bar
    task.on('state_changed',
      function progress(snapshot) {
      },
      function error(err) {
        callback(false, null);
      },
      function complete() {
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          // Upload completed successfully, now we can get the download URL
          callback(true, downloadURL);
        });
      }
    )
  }

}
