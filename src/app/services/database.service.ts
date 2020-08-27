import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public db              :   any;
  public fireAuth        :   any;
  public STORAGE_REF     :   any;

  constructor() {
    let self = this
    //creates a firebase auth reference, now you can get access to all the auth methods with this.fireAuth
    this.fireAuth = firebase.auth();
    this.STORAGE_REF = firebase.storage();
    this.db = firebase.firestore();
   }

  addUser(callback,userObj:any) {
    userObj["timeStamp"] = firebase.firestore.FieldValue.serverTimestamp();
    userObj['timestampUpdate'] = firebase.firestore.FieldValue.serverTimestamp();
      
   let docRefId = this.db.collection("UserCollection").doc().id;
    userObj['userId'] = docRefId;
    let docRef = this.db.collection("UserCollection")
    .doc(docRefId).set(userObj)
    .then(function(docRef) {
      console.log("success data");
      callback(true);
    })
    .catch(function(error) {
        console.error("Error writing document3: ", error);
    });
  }
  

  // check email or number exist
  async checkEmailOrNumberExistGCP(object) {
    try {
      let db = this.db;
      let querySnapshot = null;
      if (object.type != "email") {
        querySnapshot = await this.db.collection("UserCollection").where("phoneNumber", "==", object.countryCode + Number(object.data)).get()
      } else {
        querySnapshot = await this.db.collection("UserCollection").where("email", "==", object.data.toLowerCase()).get()
      }
      if (!querySnapshot.empty) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("errorDocuments", error);
      return false;
    }
  }

  //get user data by id
  async getUserDataByPhoneNo(phoneNumber) {
    try {
      const dataArray = [];
      let docRef = this.db.collection('UserCollection')
      let querySnapshot = await docRef.where("phoneNumber", "==", phoneNumber).get();
      if (!querySnapshot.empty) {
        querySnapshot.forEach(doc => {
          const userData = doc.data()
          dataArray.push(userData);
        });
        return this.returnPromise(true, dataArray, docRef);
      }
      return this.returnPromise(false, null, docRef);
    } catch (error) {
      return this.returnPromise(false, error, null);
    }
  }

  addUserLocation(callback,userObj:any) {
    userObj['timestampUpdate'] = firebase.firestore.FieldValue.serverTimestamp();
      
   let docRefId = this.db.collection("UserLocation").doc().id;
    userObj['id'] = docRefId;
    let docRef = this.db.collection("UserLocation")
    .doc(docRefId).set(userObj)
    .then(function(docRef) {
      console.log("success data");
      callback(true);
    })
    .catch(function(error) {
        console.error("Error writing document3: ", error);
    });
  }

   //promise handle
   returnPromise = (isSuccess, data: any, docRef) => ({
    isSuccess,
    data,
    docRef
  })

}
