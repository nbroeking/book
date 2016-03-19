class Splash extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions} 
          user={this.props.user}/>
        <div className="center-align">
          <div className="row">
            <div className="col s4 offset-s4">
              <form className="card black white-text">
                <span className="card-title">Login to ChattyCathy</span>
                <p><br/></p>
                <span onClick={this.props.actions.login} className="waves-effect waves-light btn">Login</span>
                <br/>
              </form>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.Splash = Splash
