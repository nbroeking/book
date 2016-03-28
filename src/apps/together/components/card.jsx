class Card extends React.Component {

  render(){
    if( this.props.sendButton){

      var func = this.props.action
      console.log(this.props)

      return (
        <div className="card black">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <div className="white black-text">
              {this.props.content}
            </div>
            <div className="card-action">
              <a className="waves-effect waves-light btn button" onClick={() => func()}><i className="material-icons left">send</i>{this.props.sendButton}</a>
            </div>
          </div>
        </div>
      );
    }
    else{
     return (
        <div className="card black">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <div className="white black-text">
              {this.props.content}
            </div>
          </div>
        </div>
      ); 
    }
  }
}
MyComponents.Card = Card
