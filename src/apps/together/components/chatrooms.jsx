class Content extends React.Component {
  render(){
    console.log("Trying to draw chatroom names")
    if( this.props.data.chatrooms){
      console.log("Redrawing List...")
      
      var curChat = this.props.data.chatroom;
      
      var func = this.props.actions.changeToChatroom
      var chatrooms = this.props.data.chatrooms.map(function(name){
        console.log("Chatroom: " + name)

        if( (curChat) && name == curChat.name){
          return (
            <a href="#!" className="collection-item active" onClick={() => func(name)}>{name}</a>
          );
        }else{
           return (
            <a href="#!" className="collection-item" onClick={() => func(name)}>{name}</a>
          );                                         
        }
      });
      
      return (
        <div className="collection" id="topics">
          {chatrooms}
        </div>
      );
    } else{
      return (
        <div className="collection" id="topics">
          <a href="#!" className="collection-item">There are no chatrooms!</a>
        </div>
      );
    }
  }
}
MyComponents.ChatroomsContent = Content

class ChatRooms extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.Card title={"Select Chatroom to Talk"} content={<MyComponents.ChatroomsContent actions = {this.props.actions} data = {this.props.data}/>}/>
      </div>
      );
  }
}

MyComponents.Chatrooms = ChatRooms