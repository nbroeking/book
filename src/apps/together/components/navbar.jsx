class NavBar extends React.Component {

  render(){
    if(this.props.data.user){
      var func = this.props.actions.changepage
      
      return (
      <nav>
        <div className="nav-wrapper black">
          <div className="col s11">
            <a href="#" className="brand-logo">Chatty Cathy</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><a href="#" onClick={() => func("chat")}><i className="material-icons left">chat</i> Chatrooms</a></li>
              <li><a href="#" onClick={() => func("admin")}><i className="material-icons left">supervisor_account</i> Admin</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">person</i> {this.props.data.user.userName}</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#" onClick={() => func("chat")}><i className="material-icons left">chat</i> Chatrooms</a></li>
              <li><a href="#" onClick={() => func("admin")}><i className="material-icons left" >supervisor_account</i> Admin</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
    else{
      return (
        <nav>
          <div className="nav-wrapper black">
            <div className="col s12">
              <a href="#" className="brand-logo">Chatty Cathy</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-small-only">
                <li><a href="#" onClick={this.props.actions.login}> Login</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="#" onClick={this.props.actions.login}> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar
