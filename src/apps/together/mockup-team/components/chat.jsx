class ChatContent extends React.Component {
  render(){

    // Determine what chatRoom to display
    var curRoom;
    for (var i = 0; i < this.props.data.chatrooms.length; i++)
    {
      if (this.props.data.chatrooms[i].name = this.props.data.selectedRoom)
      {
        curRoom = this.props.data.chatrooms[i];
        break;
      }
    }

    // Display the current chat boxes
    var chats = Object.keys(curRoom.chats).map(function(p, i){
      var chatEntry = curRoom.chats[p]
      return (
        <MyComponents.TextBubble score={chatEntry.score} text={chatEntry.userName + ": " + chatEntry.text} attachment={chatEntry.attachment} profilePic={chatEntry.profilePic} />
         );
    })

    // Display the current typers
    var users = this.props.data.users;
    var curTypers = Object.keys(users).map(function(p,i){
      var curUser = users[p];
      // Will need to also verify they are in this room. 
      if (users[p].currentlyTyping && users[p].chatRoom == curRoom.name) {
        return (
         <p> {curUser.userName + " is typing..."} </p>
         );
      }
      // If not return nothing. 
      else return ( <p></p>)
    });

    // Actually display everything. 
    return (
      <div className="collection waxz" id="chatbox">
      
      {chats}
      
      {curTypers}
      </div>

    );
  }
}

MyComponents.ChatContent = ChatContent

class Chat extends React.Component {
  render(){
    console.log(this.props.data)
    return (
      <div>
        <MyComponents.Card title={this.props.data.selectedRoom} content={<MyComponents.ChatContent data={this.props.data}/>}/>
      </div>
      );
  }
}

MyComponents.Chat = Chat