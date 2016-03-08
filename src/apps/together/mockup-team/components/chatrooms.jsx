class Content extends React.Component {
  render(){
    console.log(this.props.data.chatrooms)
    var chatrooms = this.props.data.chatrooms.map(function(p, i){
    return (
        <a href="#!" className="collection-item">{p.Name}</a>
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