var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

// San Francisco
var city_location = {
  lat: 37.78,
  lon: -122.41
}

var radius = 0.03
var drivers={};

// simualate a random person entering, staying for a duration, and leaving
function simulate(){
  var randnumber = Math.floor((Math.random() * 10) + 1);

  
  if( randnumber < 7 && Object.keys(drivers).length < 8){  
    // generate a random person with a random name,
    // random location, and random duration
    var name = random_name()
    var restaurant = randRestaurant()
    var duration = 1 + 5 * Math.random()
    var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
    var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
    var person = {
      name: name,
	  restaurant: restaurant,
      duration: duration,
      lat: lat,
      lon: lon,
      direction: "up"
    }

    // simulate this person entering
    enter(person)

    // simulate this person leaving after 'duration' seconds
    setTimeout(function(){
      leave(person)
    }, 8000)

  }

  //Drive Everyone Around
  for (var key in drivers) {
  
    randnumber = Math.floor((Math.random() * 10) + 1);
    if (drivers.hasOwnProperty(key)) {
      var driver = drivers[key];
    
      if( randnumber < 3){
        turnRight(driver);
        
      }
      else if( randnumber < 6){
        turnLeft(driver); 
      }
      moveForward(driver);
    }
  }
}

function moveForward( person){
    if( person.direction == "up"){
        person.lon += 0.002;
    }
    else if( person.direction == "right"){
        person.lat += 0.003;
    }
    else if( person.direction == "down") {
        person.lon -= 0.003;
    }
    else{
        person.lat -= 0.003;
    }

    var ref = new Firebase("https://team-revolver.firebaseio.com/");
    var usersRef = ref.child("providers");
    usersRef.child(person.name).set({
      name: person.name,
	  restaurant: person.restaurant,
      duration: person.duration,
      lat: person.lat,
      lon: person.lon,
      directions: person.direction
    });

}

function turnRight( person){
    if( person.direction == "up"){
        person.direction = "right";
    }
    else if( person.direction == "right"){
        person.direction = "down";
    }
    else if( person.direction == "down") {
        person.direction = "left";
    }
    else{
        person.direction = "up";
    }
    var ref = new Firebase("https://team-revolver.firebaseio.com/providers/"+person.name+"/direction");
    ref.set(person.direction);
}
function turnLeft( person){
    if( person.direction == "up"){
        person.direction = "left";
    }
    else if( person.direction == "left"){
        person.direction = "down";
    }
    else if( person.direction == "down") {
        person.direction = "right";
    }
    else{
        person.direction = "up";
    }
    var ref = new Firebase("https://team-revolver.firebaseio.com/providers/"+person.name+"/direction");
    ref.set(person.direction);
}
function randRestaurant(){
	var restaurants = [
      'Take a Pizza My Heart, ltd.',
      'Dominos Terrible Pizza',
	  'Cheesus Crust Pizza',
	  'Pizza Overlord',
	  'Life of Pie',
	  'Slice of Life',
	  'Cut the Cheese'
    ];
	
	var rand = Math.floor(Math.random()*restaurants.length);
	
	return restaurants[rand];
}

function enter(person){
  console.log('enter', person)
  var ref = new Firebase("https://team-revolver.firebaseio.com/");
  var usersRef = ref.child("providers");
  usersRef.child(person.name).set({
    name: person.name,
	  restaurant: person.restaurant,
    duration: person.duration,
    lat: person.lat,
    lon: person.lon,
    directions: person.direction
    });

  drivers[person.name] = person;
  
}

function leave(person){
  console.log('leave', person)  
  var ref = new Firebase("https://team-revolver.firebaseio.com/providers/"+person.name);
  ref.remove();
  delete drivers[person.name]
}

function clear(){ 
  var ref = new Firebase("https://team-revolver.firebaseio.com/providers/");
  ref.remove();
}

//This is so we always start fresh
clear();

// run every half second
setInterval(simulate, 1000);
