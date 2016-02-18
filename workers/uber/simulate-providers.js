var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

// San Francisco
var city_location = {
  lat: 37.78,
  lon: -122.41
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

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
    lon: lon
  }

  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 1000)

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
    lon: person.lon
    });
}

function leave(person){
  console.log('leave', person)  
  var ref = new Firebase("https://team-revolver.firebaseio.com/providers/"+person.name);
  ref.remove();
}

function clear(){ 
  var ref = new Firebase("https://team-revolver.firebaseio.com/providers/");
  ref.remove();
}

//This is so we always start fresh
clear();

// run every second
setInterval(simulate, 2000)
