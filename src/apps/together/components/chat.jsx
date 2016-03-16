class ChatContent extends React.Component {
  render(){

    var curRoom = this.props.data.chatroom;
    
    if( curRoom){
    
      console.log("chatroom", curRoom)  
      // Display the current chat boxes
      var chats = Object.keys(curRoom.chats).map(function(p, i){
        var chatEntry = curRoom.chats[p]
        console.log("chatEntry", chatEntry)
        console.log("other", i)
        return (
          <MyComponents.TextBubble score={chatEntry.score} text={chatEntry.userName + ": " + chatEntry.text} attachment={chatEntry.attachment} profilePic={chatEntry.profilePic} />
          );
      })

      // Actually display everything. 
      return (
        <div className="collection waxz" id="chatbox">
          {chats}
        </div>

      );
  }
  else{
    return(
      <div className="collection waxz" id="chatbox">
        
      </div>
      )
    }
  }
}

MyComponents.ChatContent = ChatContent

class Chat extends React.Component {
  render(){
    console.log("Rendering chat content")
    if( this.props.data.chatroom){
      return (
        <div>
          <MyComponents.Card title={this.props.data.chatroom.name} content={<MyComponents.ChatContent data={this.props.data}/>}/>
        </div>
        );
    }
    else{
      return (
        <div>
          <MyComponents.Card title={"None"} content={<MyComponents.ChatContent data={this.props.data}/>}/>
        </div>
        );
    }
    
  }
}

MyComponents.Chat = Chat