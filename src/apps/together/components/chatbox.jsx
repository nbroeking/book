var characterCount = 0;
var currentMessageRef = null;

class ChatBoxContent extends React.Component {

  componentDidMount(){
    console.log("THe chat box content mounted!!!")
    
    var data = this.props.data;
    var actions = this.props.actions;
    
    window.addEventListener('input', function(){
      var text = document.getElementById("icon_prefix_text").value;
      console.log("Text changed to ", text)
      
      if( text.length == 0 && characterCount > 0){
        characterCount = 0;
        console.log("Detected stop typing");
        //Stop Typing
        currentMessageRef = actions.stoppedTyping(currentMessageRef);
        
      }
      else if( text.length > 0 && characterCount == 0){
        console.log("Detected start of typing");
        currentMessageRef = actions.startedTyping();
        characterCount = text.length;
      }
    });
  }
  
  render(){
    return (
      <div className="collection"> 
        <form>
          <div className="input-field col s8">
            <i className="material-icons prefix">message</i>
            <input id="icon_prefix_text" type="text" className="validate"></input>
            <label htmlFor="icon_prefix_text">Message</label>
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
      <MyComponents.Card content={<MyComponents.ChatBoxContent data={this.props.data} actions={this.props.actions}/>} actions={this.props.actions.submit} sendButton={"Submit"} />
      );
  }
}

MyComponents.Chatbox = ChatBox