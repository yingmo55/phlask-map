import * as firebase from 'firebase';
import { GeoFire } from 'geofire';

export class GeofireTaps {
    
    constructor(){
        var config = {
            apiKey: "AIzaSyA1dTfOeX5aXeHViJqiV-mT2iFUaasRcZc",
            authDomain: "phlask-web-map.firebaseapp.com",
            databaseURL: "https://phlask-web-map-geofire.firebaseio.com",
            projectId: "phlask-web-map",
            storageBucket: "phlask-web-map.appspot.com",
            messagingSenderId: "428394983826",
            appId: "1:428394983826:web:b81abdcfd5af5401e0514b"
        };

        this.firebaseTaps = firebase.initializeApp(config, "taps")
        this.firebaseRef = this.firebaseTaps.database().ref();
        this.geoFire = new GeoFire(this.firebaseRef);
        // var geoQuery = geoFire.query({
        //     center: [39.9512715,-75.164334], //39.9512715,-75.164334
        //     radius: 5
        // });

        // geoQuery.on("key_entered", function(key, location, distance) {
        //     console.log(key + " is located at [" + location + "] which is within the query (" + distance.toFixed(2) + " km from center)");
        // });
    }

    query(q_center, q_radius, key_entered, key_exited) {
        if (typeof this.geoQuery !== "undefined") {
            // Update the existing query
            this.geoQuery.updateCriteria({
                center: q_center,
                radius: q_radius
            })
        } else{
            // Create a new query
            this.geoQuery = this.geoFire.query({
                center: q_center,
                radius: q_radius
            });

            this.geoQuery.on("key_entered", (key, location, distance) => {
                // console.log(key + " is located at [" + location + "] which is within the query (" + distance.toFixed(2) + " km from center)");
                key_entered(key);
            });

            this.geoQuery.on("key_exited", (key, location, distance) => {
                // console.log(key + " is located at [" + location + "] which is within the query (" + distance.toFixed(2) + " km from center)");
                key_exited(key);
            });
        }
    }

    static instance = null; //eslint-disable-line

    static getInstance() {
        if (GeofireTaps.instance == null) {
            GeofireTaps.instance = new GeofireTaps();
        }
        
        return this.instance;
    }
}

export default GeofireTaps;