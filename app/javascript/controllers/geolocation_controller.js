import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    
    static values = {
        latitude: String,
        longitude: String
      }

    connect() {

        // We hook into the browser API to get the user's location
        window.navigator.geolocation.getCurrentPosition(function(position){
           // this.element.dataset.latitude = position.coords.latitude;
        //    this.latitudeValue = position.coords.latitude;
        //    this.longitudeValue = position.coords.longitude; 
           this.navigator.geolocation.latitude = position.coords.latitude;
          
          //  this.element.dataset.longitude = position.coords.longitude;        
                    
        }); 
    }
}
