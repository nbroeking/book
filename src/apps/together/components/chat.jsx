class ChatContent extends React.Component {
  render(){

    var curRoom = this.props.data.chatroom;
    var actions = this.props.actions
    if(curRoom && (curRoom.chats != null)){
    
      console.log("chatroom", curRoom)  
      // Display the current chat boxes
      var chats = Object.keys(curRoom.chats).map(function(p, i){
        var chatEntry = curRoom.chats[p]
        chatEntry.id = Object.keys(curRoom.chats)[i]
        
        if( chatEntry.isTyping == 0){
        return (
          <MyComponents.TextBubble 
            key={i} 
            score={chatEntry.score} 
            text={chatEntry.userName + ": " + chatEntry.text} 
            attachment={chatEntry.attachment} 
            profilePic={chatEntry.profilePic} 
            actions={actions} 
            chatEntry={chatEntry}
          />
          );
        }
        else{
          return(
          <MyComponents.TextBubble 
            key={i} 
            score={chatEntry.score} 
            text={chatEntry.userName + " is typing ..." } 
            attachment={chatEntry.attachment} 
            profilePic={chatEntry.profilePic} 
            actions={actions} 
            chatEntry={chatEntry}
          />
          );
        }
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
          <MyComponents.Card 
            title={this.props.data.chatroom.name} 
            content={
              <MyComponents.ChatContent 
                data={this.props.data} 
                actions={this.props.actions}
              />
            }
          />
        </div>
        );
    }
    else{
      return (
        <div>
          <MyComponents.Card 
            title={"Please choose a chatroom"} 
            content={
              <MyComponents.ChatContent 
                data={this.props.data} 
                actions={this.props.actions}
              />
            }
          />
        </div>
      );
    }
    
  }
}

MyComponents.Chat = Chat