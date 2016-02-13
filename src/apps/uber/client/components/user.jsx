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
      return( 
        <div>
          <br></br>
          <a href="#" onClick={this.props.loginAction} className="waves-effect waves-light btn"><i className="fa fa-github fa-2x"></i> Login via Github</a>
          <br></br>
        </div>
      )
    }
  }

}
MyComponents.User = User
