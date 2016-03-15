// a single 'data' object that holds the data of your entire app, with initial values
var State = {
  ADMIN: 0,
  CHATS: 1
}

var data = {
  chatrooms: {},
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
  
  if(user == null){
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

var prefix = 'https://chattykathyucdd2.firebaseio.com'

// Real-time Data (load constantly on changes)
firebaseRef.child('chatrooms')
  .on('value', function(snapshot){

    data.chatrooms = _.values(snapshot.val())

    render()

  })

// Real-time Data (load constantly on changes)
firebaseRef.child('users')
  .on('value', function(snapshot){

    data.users = _.values(snapshot.val())

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
        status: 'online',
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
    userRef.child('status').set('offline')

    data.user = null

    render()
  }
}

actions.createChatroom = function(name){
  //TODO: CREATE CHATROOM
  console.log("Should Create a chatroom in the firebase" + name)
}

actions.submit = function(chatid, text, attachment){
  //TODO: SUBMIT TEXT
  console.log("Submit Text: "+ text + " with attachment " + attachment)
}

actions.startedTyping = function(chatid){
  //TODO: CREATE CHAT
}

actions.stoppedTyping = function(chatid){
  //TODO: DELETE CHAT
}
render();
