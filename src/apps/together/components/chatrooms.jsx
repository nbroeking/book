var submitRoom = null;

function submitChatroom(){
  var chatroom = document.getElementById("icon_prefix_name").value;
  
  if(submitRoom){
    submitRoom(chatroom);
    document.getElementById("icon_prefix_name").value = null;
  }
  else{
    console.log("Submit action is null");
  } 
}

class Content extends React.Component {
  componentDidMount() {
    console.log("The chatrooms content mounted!")
    
    var data = this.props.data;
    var actions = this.props.actions;
    submitRoom = this.props.actions.createChatroom;
  }
  render(){
    console.log("Trying to draw chatroom names")
    if( this.props.data.chatrooms){
      console.log("Redrawing List...")
      
      var curChat = this.props.data.chatroom;
      //var name = curChat.name;
      
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
        <div>
          <div className="collection" id="topics">
            {chatrooms}
          </div>
          <br/>
          <div className="collection">
            <h5 className="center">Create Chatroom:</h5>
            <form>
              <div className="input-field col s12">
                <i className="material-icons prefix">question_answer</i>
                <input id="icon_prefix_name" type="text" className="validate"></input>
                <label htmlFor="icon_prefix_name">Chatroom Name</label>
              </div>
            </form>
          </div>
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
        <MyComponents.Card 
          title={"Chatrooms: "} 
          content={
            <MyComponents.ChatroomsContent 
              actions={this.props.actions} 
              data={this.props.data}
            />
          }
          action={submitChatroom} 
          sendButton={"Submit"} 
        />

      </div>
      );
  }
}

MyComponents.Chatrooms = ChatRooms