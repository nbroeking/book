var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');

var firebaseURL = "https://chattykathyucdd2.firebaseio.com/"
var radius = 0.03
var drivers={};


function randChatroom(){
    var chatrooms = [
        'Work',
        'School',
        'UCDD2',
        'Travel'
    ];
    var rand = Math.floor(Math.random()*chatrooms.length);
    return chatrooms[rand]
}

function randMessages(){
	var messages = [
        'Hi whats up',
        "Nothing much",
        "How is your day going",
        "Good How about yours",
        "We have alot of random typing",
        "These messages make no sense",
        "My iphone is broken",
        "Graduation is soon",
        "I have a big teddy bear",
        "So do I",
        "Please dont say anything stupid",
        "I hope I get an A in this class",
        "Me too",
        "The assignment is almost due",
        "The weather looks really nice today",
        "How is life?"
    ];
	
	var rand = Math.floor(Math.random()*messages.length);	
	return messages[rand];
}


function scoreIncrement(){
    var score = Math.floor(Math.random() * 6) 
    return score
}

function randomProbability() {
  var notRandomNumbers = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  var showMeWhatyouGot = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[showMeWhatyouGot];
}

// simualate a random person entering, staying for a duration, posting, and leaving
function simulate(){
    var name = random_name()
    var chatName = randChatroom()

    var person = {
        name: name,
        isBlocked: 1,
        userName: name,
        currentlyTyping: randomProbability(),
        isBlocked: 0,
        isAdmin: 0,
        chatRoom: chatName
    };

    login(person);

    setTimeout(function(){
        var ref = new Firebase(firebaseURL);
        
        var chatRoomRef = ref.child("chatrooms/"+ chatName);
        var messageRef = chatRoomRef.child("chats").push();
        
        // This is a little hacky, may be handled differently once this script is done. 
        // However, we need a name field within each chatroom that isn't it's key. 
        var chatRoomRefName = chatRoomRef.child("name")
        chatRoomRefName.set(chatName)

        messageRef.set({
            text: randMessages(), 
            score: scoreIncrement(), 
            userName: person.name,
            attachment: 0
        });

        setTimeout(function(){
            logout(person);
        }, 1000);
    }, 1000);
}


function login(person){
  console.log('login', person)
  var ref = new Firebase(firebaseURL);
  var usersRef = ref.child("users");
  usersRef.child(person.name).set({
    name: person.name,
    isBlocked: 1,
    userName: person.name,
    currentlyTyping: person.currentlyTyping,
    isBlocked: 0,
    isAdmin: 0,
    chatRoom: person.chatRoom
    });

}

function logout(person){
  console.log('logout', person)  
  var ref = new Firebase(firebaseURL+"/users/"+person.name);
  ref.remove();
}

function clear(){ 
  var ref = new Firebase(firebaseURL);
  ref.remove();
    console.log("\n\nClearing Database\n\n")
}

//This is so we always start fresh
clear();

// run every half second
setInterval(simulate, 5000);
setInterval(clear, 10000000); //Clear the database out every 100000 seconds
