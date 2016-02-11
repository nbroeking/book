class NavBar extends React.Component {

  render(){
    if( this.props.data.user){
      return (
      <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo">Revolver</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="white-text" href="#">{this.props.data.user.username}</a></li>
            <li><a href="#" onClick={this.props.actions.logout}>Logout</a></li>
          </ul>
        </div>
      </nav>
      );
    }
    else{
      return (
        <nav>
          <div className="nav-wrapper black">
            <a href="#" className="brand-logo">Revolver</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#" onClick={this.props.actions.login}>Login</a></li>
            </ul>
        </div>
      </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar
