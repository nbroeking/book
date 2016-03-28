var characterCount = 0;
var currentMessageRef = null;
var submitAction = null;

function submit(){
  var text = document.getElementById("message_text").value;
  var attachment = document.getElementById("message_attachment").value.replace('watch?v=', '/embed/');
  
  if( submitAction){
    submitAction(currentMessageRef, text, attachment);
    currentMessageRef = null;
    characterCount = 0;
    
    document.getElementById("message_text").value = null;
    attachment = document.getElementById("message_attachment").value = null;
  }
  else{
    conosle.log("Submit action is null");
  }
  
}
class ChatBoxContent extends React.Component {
  componentDidMount() {
    console.log("THe chat box content mounted!!!")
    
    var data = this.props.data;
    var actions = this.props.actions;
    submitAction = this.props.actions.submit;
    
    window.addEventListener('input', function(){
      var text = document.getElementById("message_text").value;
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
            <input id="message_text" type="text" className="validate"></input>
            <label htmlFor="message_text">Message</label>
          </div>
          <div className="input-field col s4">
            <i className="material-icons prefix">link</i>
            <input id="message_attachment" type="text" className="validate"></input>
            <label htmlFor="message_attachment">Attachment URL</label>
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
      <MyComponents.Card 
        content={
          <MyComponents.ChatBoxContent 
            data={this.props.data} 
            actions={this.props.actions}
          />
        } 
        action={submit} 
        sendButton={"Submit"} 
      />
      );
  }
}

MyComponents.Chatbox = ChatBox