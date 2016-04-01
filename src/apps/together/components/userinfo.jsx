class UserInfo extends React.Component {
  render(){
    console.log("user", this.props.data.user)
    
    
    var user = this.props.data.user;
    
    return (
      <div>
        <MyComponents.Card 
          title={this.props.data.user.displayName}
          content={
            <ul className="collection">
              <li className="collection-item"><img src={user.profilePic} alt="Profile Pic"></img></li>
              <li className="collection-item">Username: {user.userName}</li>
               <li className="collection-item"></li>
            </ul>
          }
        />
      </div>
      );
  }
}

MyComponents.UserInfo = UserInfo