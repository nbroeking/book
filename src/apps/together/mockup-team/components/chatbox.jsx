class ChatBoxContent extends React.Component {
  render(){
    return (
      <div className="collection"> 
        <form>
          <div className="input-field col s8">
            <i className="material-icons prefix">message</i>
            <input id="icon_prefix" type="text" className="validate"></input>
            <label htmlFor="icon_prefix">Message</label>
          </div>
          <div className="input-field col s4">
            <i className="material-icons prefix">link</i>
            <input id="icon_prefix" type="text" className="validate"></input>
            <label htmlFor="icon_prefix">Attachment URL</label>
          </div>
        </form>
      </div>
    );
  }
}
MyComponents.ChatBoxContent = ChatBoxContent

class ChatBox extends React.Component {
  render(){
    return (
      <MyComponents.Card content={<MyComponents.ChatBoxContent />} sendButton={"Submit"} />
      );
  }
}

MyComponents.Chatbox = ChatBox