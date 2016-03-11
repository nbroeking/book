class NavBar extends React.Component {

  render(){
    if(this.props.data.user){
      return (
      <nav>
        <div className="nav-wrapper black">
          <div className="container">
            <a href="/apps/together/mockup-team/index.html" className="brand-logo">Chatty Kathy</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-sm-and-down">
              <li><a href="/apps/together/mockup-team/chatrooms.html"><i className="material-icons left">room</i> Chatrooms</a></li>
              <li><a href="#"><i className="material-icons left">supervisor_account</i> Admin</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.user.username}</a></li>
              <li><a href="#" onClick={this.props.actions.logout}> Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/apps/together/mockup-team/chatrooms.html"><i className="material-icons left">room</i> Chatrooms</a></li>
              <li><a href="#"><i className="material-icons left">supervisor_account</i> Admin</a></li>
              <li><a className="white-text" href="#"><i className="material-icons left">perm_identity</i> {this.props.data.user.username}</a></li>
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
            <div className="container">
              <a href="/apps/together/mockup-team/index.html" className="brand-logo">Chatty Kathy</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/apps/together/mockup-team/chatrooms.html"><i className="material-icons left">chat</i> Chatrooms</a></li>
                <li><a href="/apps/together/mockup-team/admin.html"><i className="material-icons left">supervisor_account</i> Admin</a></li>
                <li><a href="/apps/together/mockup-team/chatrooms.html" onClick={this.props.actions.login}> Login</a></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="/apps/together/mockup-team/chatrooms.html"><i className="material-icons left">chat</i> Chatrooms</a></li>
                <li><a href="/apps/together/mockup-team/chatrooms.html" onClick={this.props.actions.login}> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar
