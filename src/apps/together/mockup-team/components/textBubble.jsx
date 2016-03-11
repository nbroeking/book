class TextBubble extends React.Component {
  render(){
      console.log("attachment: " + this.props.attachment)
      if(this.props.attachment){
        return (
          <div className="chip textbubble">
            <div className = "row">
  	          <div className = "col s10">
  		          <img src={this.props.profilePic} alt="Contact Person"></img>
  		          {this.props.text}
  	          </div>
  	          <div className = "col s2 grey-text lighten-2">
                <span className="badge">
    		          {this.props.score}<i className="material-icons nomargin">thumbs_up_down</i>
                 </span> 
  	          </div>
              <br></br>
                <div className="video-container attachment">
                  <iframe width="853" height="480" src={this.props.attachment} frameBorder="0" allowFullScreen></iframe>
                </div>
  	        </div>
          </div>
        );
      }
      else{
        return (
          <div className="chip textbubble">
            <div className="row">
              <div className="col s10">
                <img src={this.props.profilePic} alt="Contact Person"></img>
                {this.props.text}
              </div>
              <div className="col s2 grey-text lighten-2">
                <span className="badge">
                  {this.props.score}<i className="material-icons nomargin">thumbs_up_down</i>
                </span>
              </div>
            </div>
          </div>
        );
      }
  }
}
MyComponents.TextBubble = TextBubble
