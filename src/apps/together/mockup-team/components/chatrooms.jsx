class Content extends React.Component {
  render(){
    return (
      <div className="collection" id="topics">
        <a href="#!" className="collection-item">Economics</a>
        <a href="#!" className="collection-item">Dating</a>
        <a href="#!" className="collection-item">Work</a>
        <a href="#!" className="collection-item">Excercise</a>
        <a href="#!" className="collection-item">Nightlife</a>
        <a href="#!" className="collection-item">Social</a>
        <a href="#!" className="collection-item active">Travel</a>
        <a href="#!" className="collection-item">School</a>
      </div>
    );
  }
}
MyComponents.ChatroomsContent = Content

class ChatRooms extends React.Component {
  render(){
    return (
      <div className="col s3">
        <MyComponents.Card title={"Select Chatroom to Talk"} content={<MyComponents.ChatroomsContent />}/>
      </div>
      );
  }
}

MyComponents.Chatrooms = ChatRooms