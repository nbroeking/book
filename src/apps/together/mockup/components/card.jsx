class Card extends React.Component {

  render(){
    if( this.props.sendButton){
      return (
            <div className="card grey">
              <div className="card-content white-text">
                <span className="card-title">{this.props.title}</span>
                <div className="white black-text">
                  {this.props.content}
                </div>
                <div className="card-action">
                  <a href="#">{this.props.sendButton}</a>
                </div>
              </div>
            </div>
        );
    }
    else{
           return (
            <div className="card grey">
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
