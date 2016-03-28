class BannedList extends React.Component {
  render(){
      console.log(this.props)
      var func = this.props.actions.unBanUser
      var users = this.props.data.map(function(p,i){

          if (p.isBlocked && !p.isAdmin){
            var imgUrl = "images/online-" + p.isLoggedin + ".png";

            return (<div className="chip fullWidth">
                <div className="row">
                  <div className="col s1">
                    <img src={p.profilePic} alt="Person"></img>
                  </div>
                  <div className="col s7 left">
                    {p.userName}
                  </div>
                  <div className="col s2">
                    <a href="#" onClick={() => func(p)}>UNBAN</a>
                  </div>
                  <div className="col s2">
                     <img className="right onlineIcon" src={imgUrl} height="10" width="10"></img>
                  </div>
                </div>
                
             </div>);
          }
        });
      return (<div>{users}</div>);
      }
}

MyComponents.BannedList = BannedList

class AdminList extends React.Component {
  render(){
      var users = this.props.data.map(function(p,i){
          if (p.isAdmin) {
            var imgUrl = "images/online-" + p.isLoggedin + ".png";
            return (<div className="chip fullWidth">
                <div className="row">
                  <div className="col s1">
                    <img src={p.profilePic} alt="Person"></img>
                  </div>
                  <div className="col s9 left">
                    {p.userName}
                  </div>
                  <div className="col s2">
                     <img className="right onlineIcon" src={imgUrl} height="10" width="10"></img>
                  </div>
                </div>
                
             </div>);
          }
        });
      return (<div>{users}</div>);
      }
}
MyComponents.AdminList = AdminList

class UserList extends React.Component {
  render(){
      //console.log(this.props.data)
      var func = this.props.actions.banUser

      var users = this.props.data.map(function(p,i){
          if (!p.isAdmin && !p.isBlocked)
          {
            var imgUrl = "images/online-" + p.isLoggedin + ".png";
            return (<div className="chip fullWidth">
                <div className="row">
                  <div className="col s1">
                    <img src={p.profilePic} alt="Person"></img>
                  </div>
                  <div className="col s7 left">
                    {p.userName}
                  </div>
                  <div className="col s2">
                    <a href="#" onClick={() => func(p)}>BAN</a>
                  </div>
                  <div className="col s2">
                     <img className="right onlineIcon" src={imgUrl} height="10" width="10"></img>
                  </div>
                </div>
                
             </div>);
          }
        });
      return (<div>{users}</div>);
      }
}

MyComponents.UserList = UserList

class Users extends React.Component {
  render(){
    console.log("users got:")
    console.log(this.props.data)
    return (
      <div className="row userRow">
        <div className="col s4 white-text">
          <h3>Users</h3>
          <ul>
            <MyComponents.UserList data={this.props.data} actions={this.props.actions}/>
          </ul>
        </div>
        <div className="col s4 white-text">
          <h3>Admins</h3>
          <ul>
            <MyComponents.AdminList data={this.props.data} actions={this.props.actions}/>
          </ul>
        </div>
        <div className="col s4 white-text">
          <h3>Banned</h3>
          <ul>
            <MyComponents.BannedList data={this.props.data} actions={this.props.actions}/>
          </ul>
        </div>
      </div>
      );
  }
}

MyComponents.Users = Users