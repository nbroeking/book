class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      return
        <li>
          <div className="chip blue">
            <a className="white-text" href="#">{this.props.name}</a>
          </div>
        </li>
    } else {
      // user is not set
      return <li>
        <a href="#" onClick={this.props.loginAction}>Login via Github</a>
      </li>
    }
  }

}
MyComponents.User = User
