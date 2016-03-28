class TextBubble extends React.Component {
  render(){
    var upVote = this.props.actions.upVoteMsg
    var downVote = this.props.actions.downVoteMsg
    var attachment;
    if(this.props.attachment) {
      attachment = 
        <div className="col s4 offset-s7">
          <div className="video-container">
            <iframe width="853" height="480" src={this.props.attachment} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      ;
    }
    else {
      attachment = <div/>;
    }

    return (
      <div className="chip textbubble">
        <div className="row">
          <div className="message">
            <img src={this.props.profilePic} alt="Contact Person"></img>
            {this.props.text}
          </div>
          <div className = "grey-text lighten-2">
            <span className="badge">
              {this.props.score}<a href="#" onClick={() => upVote(this.props.chatEntry)}><b>↑ </b></a><a href="#" onClick={() => downVote(this.props.chatEntry)}><b> ↓</b></a>
            </span>
          </div>
          {attachment}    
        </div>
      </div>
    );
  }
}
MyComponents.TextBubble = TextBubble
