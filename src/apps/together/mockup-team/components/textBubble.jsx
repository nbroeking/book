class TextBubble extends React.Component {

  render(){
      return (
        <div className="chip textbubble">
          <div className = "row test">
	          <div className = "col s10">
		          <img src="images/person.jpg" alt="Contact Person"></img>
		          {this.props.text}
	          </div>
	          <div className = "col s2 grey-text lighten-2">
		          {this.props.score}<i className="material-icons nomargin">thumbs_up_down</i>
	          </div>
	      </div>
        </div>
      );
  }
}
MyComponents.TextBubble = TextBubble
