import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { DatabaseService } from '../services/database.service';

import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorage}from '@angular/fire/storage'
const { Geolocation } = Plugins;
import SignaturePad from 'signature_pad';
import { from } from 'rxjs';
declare var google;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;
  user: any;
   // Map related
   @ViewChild('map') mapElement: ElementRef;
   map: any;
   currentMapTrack = null;
  
   isTracking = false;
   trackedRoute = [];
   previousTracks = [];
   markers = [];
  
   positionSubscribe: string;

  constructor(
    public databaseService: DatabaseService,
    public afstore :AngularFirestore,
    public storage: AngularFireStorage,

    ) {
    
    //use localStorage for user
    this.user = localStorage;
  }

  ionViewDidEnter() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }

  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      //this.download(dataURL, 'signature.png');

      const blob = this.dataURLToBlob(dataURL);

      const uploadTask=this.storage.upload('Deliverd/image',blob);





    }
  }
  save() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      
    }
  }

  saveJPG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/jpeg');
      //this.download(dataURL, 'signature.jpg');

      const blob = this.dataURLToBlob(dataURL);

      const uploadTask=this.storage.upload('Deliverd/image',blob);
    }
  }

  saveSVG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL('image/svg+xml');
      //this.download(dataURL, 'signature.svg');

      const blob = this.dataURLToBlob(dataURL);

      const uploadTask=this.storage.upload('Deliverd/image',blob);
    }
  }


  startDelivery()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "delevery has been Stared",
      "timestamp" : Date.now()
    });
  }

  reachedSeller()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is reached the seller",
      "timestamp" : Date.now()

    });
  }

  orderPicked()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is picked",
      "timestamp" : Date.now()
    });
  }
  
  shipped()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is shipped",
      "timestamp" : Date.now()
    });
  }

  outToDelivery()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is out of delivery",
      "timestamp" : Date.now()
    });
  }

  delivered()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is deliverd",
      "timestamp" : Date.now()
    });
  }
  cancel()
  {
    this.afstore.collection("orderStatus").doc("orderId").set({
      "status": "order is cancled",
      "timestamp" : Date.now()
    });
  }


  initiatives(driverId,priviousInitiatives,orderId,status)
  {
    
    const initiatives=priviousInitiatives+10;
    this.afstore.collection(driverId).doc(orderId).set({
      "status": status,
      "initiatives": initiatives,
      "timestamp" : Date.now()
    });
  }

}
