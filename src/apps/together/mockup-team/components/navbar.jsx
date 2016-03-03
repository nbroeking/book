class NavBar extends React.Component {

  render(){
      return (
      <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo">NextChat</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
      );
  }
}
MyComponents.NavBar = NavBar
