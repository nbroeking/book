// a single 'data' object that holds the data of your entire app, with initial values
var State = {
  ADMIN: 0,
  CHATS: 1
}

var data = {
  chatrooms: [],
  users: [],
  chatroom: null,
  user: null,
  State: State.CHATS,
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

firebaseRef.child('users').on('value', function(ref){
  
  data.users = _.values(ref.val())
  
  console.log("Users updated ", data.users)
  //for( val x in data.chatrooms){
    //console.log("Individual ")
  //}
  render()
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
        isBlocked: '0',
        isAdmin: '0',
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
  var roomName = firebaseRef.child("chatroomNames/" + name)
  var chatroomRef = firebaseRef.child("chatrooms/" + name)
  console.log("chatroomRef: " + chatroomRef);
  chatroomRef.set({
    chats: [],
    name: name
  });

  roomName.set(name)

  render()
}

actions.changeToChatroom = function(name){
  if( chatroomRef != null){
    console.log("Requesting to view chatroom " + name + " from " + data.chatroom.name)
  }
  else{
    console.log("Requesting to view chatroom " + name)
  }
  data.changeTo = name
  if( name == null){
    data.changeTo = "default"
    console.log("chatroom name is null")
  }
  if( chatroomRef != null){
    console.log("Attempting to stop " + data.chatroom.name)
    chatroomRef.off('value', updateChatroom)
  }
  else{
    console.warn("Not attempting to stop")
  }
  data.chatroom = null
  console.log("Requesting new chatroom")
  chatroomRef = firebaseRef.child("chatrooms/" + data.changeTo );
  chatroomRef.on('value', updateChatroom)
  
}

//If you submit text you do not need to call stopped Typing
actions.submit = function(messageRef, text, attachment){
  
  if(messageRef == null){
    console.warn("Can not submit message that doesnt exist ");
    return null;
  }
  if(data.user.isBlocked == "1"){
    console.warn("Can not submit message because user is banned ");
    return null;
  }
  console.log("Submit Text: "+ text + " with attachment " + attachment)
  
  messageRef.update({
    text: text, 
    isTyping: 0,
    attachment: attachment
  });
  return messageRef
}

//Returns the messageref to be passed to stoppedTyping or to submit
actions.startedTyping = function(){
//returns chatID
  if( data.chatroom == null){
    console.warn("There is no chatroom to type too");
    return null;
  }
  if(data.user.isBlocked == "1"){
    console.warn("Can not start typing message because user is banned ");
    return null;
  }
  else{
    console.log("we should be able to save the message ref")
  }
  var messageRef = firebaseRef.child("chatrooms/"+data.chatroom.name).child('chats').push()
  console.log("messageRef: " + messageRef);
  messageRef.set({
    text: "", 
    score: 0, 
    isTyping: 1,
    userName: data.user.userName,
    profilePic: data.user.profilePic,
    attachment: 0
  });
  
  return messageRef;
}

//Deletes the chat in the case that the user does not submit any text
actions.stoppedTyping = function(messegeRef){
  if( messegeRef == null){
    console.warn("Cant stop typing a message that doesn't exist")
    return null;
  }
  else{
    console.log("We should be able to delete the typing")
  }
  messegeRef.remove()
  return null;
}

actions.upVoteMsg = function(chatEntry){
  console.log("upvote called")

  var chatRef = firebaseRef.child("chatrooms/"+data.chatroom.name+"/chats/" + chatEntry.id)
  chatRef.update({
    score:chatEntry.score+1
  });
  render();
}

actions.downVoteMsg = function(chatEntry){
  console.log("downvote called")

  var chatRef = firebaseRef.child("chatrooms/"+data.chatroom.name+"/chats/" + chatEntry.id)
  chatRef.update({
    score:chatEntry.score-1
  });
  render();
}

actions.changepage = function(page){
  console.log("Change page to " + page)
  if( page == "admin"){
    data.State = State.ADMIN;
  }
  else{
    data.State = State.CHATS;
  }
  render();
}
// ================
// Admin Actions
// ================

actions.banUser = function(user){
  //TODO: Toggle Ban for User
  console.log("banning:" + user.name)
  var userRef = firebaseRef.child("users/"+user.userName)
  userRef.update({
    isBlocked:1
  });
  render();
}
actions.unBanUser = function(user){
  //TODO: Toggle Ban for User
  var userRef = firebaseRef.child("users/"+user.userName)
  userRef.update({
    isBlocked:0
  });
  render();
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
