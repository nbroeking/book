class User extends React.Component {

  render(){

    if (this.props.user){
      // user is authenticated
      return(
          <div className="chip blue">
            <img src={this.props.user.profileImageURL} />
            <a className="white-text" href="#">{this.props.user.username}</a>
          </div>)
    } else {
      // user is not set
      return( <li>
        <a href="#" onClick={this.props.loginAction}>Login via Github</a>
      </li>)
    }
  }

}
MyComponents.User = User
