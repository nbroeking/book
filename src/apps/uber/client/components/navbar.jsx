class NavBar extends React.Component {

  render(){
    console.log("React is broken not in the navbar")
    if( this.props.user){
      return (
      <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo">Revolver</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <MyComponents.NavBar actions={this.props.actions}/> 
            <li><a href="#" onClick={this.props.logoutAction}>Logout</a></li>
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
              <MyComponents.NavBar actions={this.props.actions}/> 
            </ul>
        </div>
      </nav>
      );
    }
  }
}
MyComponents.NavBar = NavBar
