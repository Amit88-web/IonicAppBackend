import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { DatabaseService } from '../services/database.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;
   // Map related
   @ViewChild('map') mapElement: ElementRef;
   @ViewChild('directionsPanel') directionsPanel: ElementRef;
   map: any;
   currentMapTrack = null;
   mylat: any;
   mylng: any;
   isTracking = false;
   trackedRoute = [];
   previousTracks = [];
   markers = [];
  
   positionSubscribe: string;
   directionsService = new google.maps.DirectionsService;
   directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public databaseService: DatabaseService) {
    
    //use localStorage for user
    this.user = localStorage;
  }

  ionViewWillEnter() {
    this.loadMap();
    
  }

  // Initialize a blank map
  loadMap() {
    let mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: true,
      fullscreenControl: false
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    Geolocation.getCurrentPosition().then(pos => {
      let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.mylat = pos.coords.latitude;
      this.mylng = pos.coords.longitude;
      this.map.setCenter(latLng);
      this.map.setZoom(16);
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      this.markers.push(marker);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

    // Use Capacitor to track our geolocation
  // startTracking() {
  //   this.isTracking = true;
  //   this.watch = Geolocation.watchPosition({}, (position, err) => {
  //     if (position) {
  //       this.addNewLocation(
  //         position.coords.latitude,
  //         position.coords.longitude,
  //         position.timestamp
  //       );
  //     }
  //   });
  // }

  startTracking() {
    this.startNavigating();
    this.isTracking = true;
    this.trackedRoute = [];
 
    this.positionSubscribe = Geolocation.watchPosition({}, (position, err) => {
      if (position) {
        setTimeout(() => {
          this.trackedRoute.push({ lat: position.coords.latitude, lng: position.coords.longitude });
          this.redrawPath(this.trackedRoute);
        }, 0);
      }
    });
  }
 
  redrawPath(path) {
    if (this.currentMapTrack) {
      this.currentMapTrack.setMap(null);
    }
 
    if (path.length > 1) {
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.currentMapTrack.setMap(this.map);
    }
  }

  stopTracking() {
    let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
    this.previousTracks.push(newRoute);
    //this.storage.set('routes', this.previousTracks);
  
    Geolocation.clearWatch({ id: this.positionSubscribe }).then(() => {
      this.isTracking = false;
    });
    //this.positionSubscription.unsubscribe();
    this.currentMapTrack.setMap(null);
  }

  showHistoryRoute(route) {
    this.redrawPath(route);
  }
  
  // Unsubscribe from the geolocation watch using the initial ID
  // stopTracking() {
  //   Geolocation.clearWatch({ id: this.watch }).then(() => {
  //     this.isTracking = false;
  //   });
  // }

    // Save a new location to Firebase and center the map
  // addNewLocation(lat, lng, timestamp) {
  //   let self = this;
  //   var object = {
  //     "userId"     : this.user.userId,
  //     "latitude"   : lat,
  //     "longitude"  : lng,
  //     "timeStamp"  : timestamp
  //   }
  //   self.databaseService.addUserLocation(function(isSuccess){
  //     if(isSuccess) {
        
  //     }
  //   },object)
  
  //   let position = new google.maps.LatLng(lat, lng);
  //   this.map.setCenter(position);
  //   this.map.setZoom(5);
  // }

  startNavigating(){

    
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: {lat: this.mylat, lng: this.mylng},
        destination: {lat: 20.392909, lng: 85.840763},
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });

}
}
