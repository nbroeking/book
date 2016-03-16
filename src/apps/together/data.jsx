// a single 'data' object that holds the data of your entire app, with initial values
var State = {
  ADMIN: 0,
  CHATS: 1
}

var data = {
  chatrooms: [],
  chatroom: null,
  user: null,
  State: State.CHATS
}

// a single 'handlers' object that holds all the actions of your entire app
var actions = {}

// the main render() function. call this function whenever the app's UI
// needs to to re-rendered
// 'data' and 'actions' are injected into the app
function render(){
  if( data.user == null){
    console.log("There is no user so render the splash page");
    ReactDOM.render(
      <MyComponents.Splash
        data={data}
        actions={actions}/>,
      $('#app-container').get(0)
    )
  }
  else{
    if( data.State == State.CHATS){
        ReactDOM.render(
          <MyComponents.ChatApp
            data={data}
            actions={actions}/>,
          $('#app-container').get(0)
        )
    }
    else if(data.State == State.ADMIN){
        ReactDOM.render(
          <MyComponents.AdminApp
            data={data}
            actions={actions}/>,
          $('#app-container').get(0)
        )
    }
  }

}

//
// DATA
//
var firebaseRef = new Firebase('https://chattykathyucdd2.firebaseio.com')
var chatroomRef = null

function updateChatroom(ref){
  data.chatroom = ref.val()
  render()
}

//Get the chatroom names
firebaseRef.child('chatroomNames').on('value', function(ref){
  console.log("Raw", ref)
  console.log("Val", ref.val())
  
  data.chatrooms = _.values(ref.val())
  
  console.log("Chatroom updated ", data.chatrooms)
  //for( val x in data.chatrooms){
    //console.log("Individual ")
  //}
})

//
// ACTIONS
//
actions.login = function(){

  firebaseRef.authWithOAuthPopup("github", function(error, authData){
    // handle the result of the authentication
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      // create a user object based on authData
      var user = {
        displayName: authData.github.displayName,
        userName: authData.github.username,
        id: authData.github.id,
        isLoggedIn: 'online',
        profilePic: authData.github.profileImageURL
      }
      
      var userRef = firebaseRef.child('users').child(user.userName)

      // subscribe to the user data
      userRef.on('value', function(snapshot){
        console.log("user Changed");
        data.user = snapshot.val()
        render()
      })
      
      // set the user data
      userRef.set(user)

    }
  })

}

actions.logout = function(){

  if (data.user){
    console.log("Logout");
    firebaseRef.unauth()

    var userRef = firebaseRef
      .child('users')
      .child(data.user.username)

    // unsubscribe to the user data
    userRef.off()

    // set the user's status to offline
    userRef.child('isLoggedIn').set('0')

    data.user = null

    render()
  }
}

// ================
// Chatroom Actions
// ================

actions.createChatroom = function(name){
  
  console.log("Should Create a chatroom in the firebase" + name)
  var room = firebaseRef.child("chatroomNames/" + name)
  room.set(name)
  render()
}

actions.changeToChatroom = function(name){
  console.log("Requesting to view chatroom ", name)
  data.changeTo = name
  if( name == null){
    data.changeTo = "default"
  }
  if( chatroomRef != null){
    firebaseRef.off('value', chatroomRef)
  }
  data.chatroom = null
  chatroomRef = firebaseRef.child("chatrooms/" + data.changeTo ).on('value', updateChatroom)
}

//If you submit text you do not need to call stopped Typing
actions.submit = function(messageRef, text, attachment){
  console.log("Submit Text: "+ text + " with attachment " + attachment)
  
  messageRef.update({
    text: text, 
    isTyping: 0,
    attachment: attachment
  });
  return messageRef
}

//Returns the messageref to be passed to stoppedTyping or to submit
actions.startedTyping = function(chatid){
//returns chatID
  
  var messageRef = chatRoomRef.child('chats').push()
  messageRef.set({
    text: "", 
    score: 0, 
    isTyping: 1,
    userName: user.userName,
    profilePic: user.profilePic,
    attachment: 0
  });
  
  return messageRef;
}

//Deletes the chat in the case that the user does not submit any text
actions.stoppedTyping = function(messegeRef){
  messegeRef.remove()
}

actions.upVoteMsg = function(msgRef, value){
   msgRef.update({
    score: value, 
  });
  return msgRef
}

actions.downVoteMsg = function(msgid, value){
  msgRef.update({
    score: value, 
  });
  return msgid
}

// ================
// Admin Actions
// ================

actions.banUser = function(userRef){
  //TODO: Toggle Ban for User
  userRef.child('isBanned').set('0')
}
actions.unBanUser = function(userRef){
  //TODO: Toggle Ban for User
  userRef.child('isBanned').set('1')
}

actions.clearUsers = function(){
  //TODO: Remove all users from firebase
  var usersRef = firebaseRef.child("users")
  usersRef.remove(); 
}

actions.clearRooms = function(){
  //TODO: Remove all rooms from firebase
  var chatroomsRef = firebaseRef.child("chatrooms")
  chatroomsRef.remove(); 
}

render();
