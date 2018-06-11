// Notes relating to what is different in the tutorial compared to here.
// 1- renamed "Map, Map, Map" to "myMapID, gMap, map"
// 2- Modified "bounds-changed" as tutorial tells you to use it, we are using "idle"
var gMap;

//JSON Array code just below
var favoritePlaces = [
    {"content":"<strong>#1: Painfield, IL... Home Sweet Home!<strong>", "coordinates":{"lat":41.63,"lng":-88.21}, "iconImagePath":"home.png"},
    {"content":"Bolingbrook, IL", "coordinates":{"lat":41.64,"lng":-88.08}, "iconImagePath":"daughter.png"},
    {"content":"Lockport, IL", "coordinates":{"lat":41.58,"lng":-88.05}, "iconImagePath":"daughter.png"},
    {"content":"Badlands, SD I was light headed", "coordinates":{"lat":43.85,"lng":-102.33}, "iconImagePath":"fire.png"},
    {"content":"Kankakee, IL", "coordinates":{"lat":41.12,"lng":-87.86}, "iconImagePath":"ring.png"},
    {"content":"Lake Taho, NV", "coordinates":{"lat":39.09,"lng":-120.03}, "iconImagePath":"wedding.png"},
    {"content":"Genoa, WI", "coordinates":{"lat":42.49,"lng":-88.32}, "iconImagePath":"fishing.png"},
    {"content":"Dryden, Ontario, CA", "coordinates":{"lat":49.78,"lng":-92.83}, "iconImagePath":"fishing.png"},
    {"content":"Yellowstone Park, WY", "coordinates":{"lat":44.42,"lng":-110.58}, "iconImagePath":"buffalo.png"},
    {"content":"Denali Park, AK", "coordinates":{"lat":63.11,"lng":-151.19}, "iconImagePath":"bear.png"}
]; 

// This is the InitMap and is a callback funtion that is initiated as part of the Google Maps API call at the bottom 
// of the map.mania.lite.html file.
function initMap() {
    //Create new map and put it in gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng:10}, zoom: 3});

//SetHint("This is our house");
//SetScore("10");

//SetHint("This is my oldest daughter's house, she lives the closest to me.");
//SetScore("10");

//SetHint("This is my youngest daughter's house, she lives the 2nd closest to me.");
//SetScore("10");

//SetHint("This is where I rode my bicyle 165 miles in 105 degree temps and decided to get engaged, and surprise my girlfriend.");
//SetScore("10");

//SetHint("This is where on that bike ride across the USA and riding 185 miles dropped to a knee and asked my girlfriend to be my wife");
//SetScore("10");

//SetHint("This was our wedding, and honeymoon spot. There is snow, and gambling for a clue.");
//SetScore("10");

//SetHint("Went fishing within 4 hours of my home with family and friends for Memorial Day.");
//SetScore("10");

//SetHint("This is the best fishing you can do anywhere. We do still drive there, 14 hours.");
//SetScore("10");

//SetHint("On this same bike ride, at 6am, I decided to be a bike tourist, not a bike racer, and saw one of the greatest national parks.");
//SetScore("10");

//SetHint("One for the future, this is where I want to take my next bike ride. You have to pick the right season or you would be cold for sure.");
//SetScore("10");

      console.log(favoritePlaces.length);
      var i;
      for (i = 0; i < favoritePlaces.length; i++) {
          console.log(favoritePlaces[i]);
          AddMarker(favoritePlaces[i]);
      }

      // NOTE: several message boards said to use "idle" instead of "bounds_changed" because
      // "bounds_changed" gets called over and over when the drags the map.
      google.maps.event.addListener(gMap, 'idle', function() {
          updateGame()
      });
}    


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomlevel = gMap.getZoom()
    var inBounds = false;

    // Check if my home in Plainfield is displayed in the current map.
    if (gMap.getBounds().contains({lat:41.63,lng:-88.21})) {
        inBounds = true;
    }


    console.log("inBounds:"+inBounds+" zoomlevel:"+zoomlevel);
}

function initApplication() {
    console.log('Map Mania Lite - is Starting now!');
}

function initApplicationSetHint(hint) {
    document.getElementById("hint-id").value = hint;
}

function initApplicationSetScore(score) {
    document.getElementById("score-id").value = score;
}

function AddMarker(markerProperties) {
    var marker = new google.maps.Marker({position:markerProperties.coordinates, map:gMap});

    // Check if there is a custom icon image.
    if (markerProperties.iconImagePath) {
        // Set custum icon image.
        marker.setIcon(markerProperties.iconImagePath);
    }

    // Check if there is content and create a listener if content exists.
    if (markerProperties.content) {
        var infoWindow = new google.maps.InfoWindow({content:markerProperties.content});

        marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
        });
    }






}




