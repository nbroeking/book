class Content extends React.Component {
  render(){
    console.log("Redrawing List...")
    var chatrooms = this.props.data.chatrooms.map(function(p, i){
        console.log("NAME:" + p.name)
    return (
        <a href="#!" className="collection-item">{p.name}</a>
       );
    })
    return (
      <div className="collection" id="topics">
        {chatrooms}
      </div>
    );
  }
}
MyComponents.ChatroomsContent = Content

class ChatRooms extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.Card title={"Select Chatroom to Talk"} content={<MyComponents.ChatroomsContent data = {this.props.data}/>}/>
      </div>
      );
  }
}

MyComponents.Chatrooms = ChatRooms