class TextBubble extends React.Component {

  render(){
      return (
        <div className="chip">
          <img src="images/person.jpg" alt="Contact Person"></img>
          {this.props.text}
        </div>
      );
  }
}
MyComponents.TextBubble = TextBubble
