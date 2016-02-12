class ChatBoxContent extends React.Component {
  render(){
    return (
      <div className="collection">
        <form>
          <input type="text" name="text"/>
        </form>
      </div>
    );
  }
}
MyComponents.ChatBoxContent = ChatBoxContent

class ChatBox extends React.Component {
  render(){
    return (
      <MyComponents.Card content={<MyComponents.ChatBoxContent />}  sendButton={"Submit"} />
      );
  }
}

MyComponents.Chatbox = ChatBox