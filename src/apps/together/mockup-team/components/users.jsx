class BannedList extends React.Component {
  render(){
      var users = this.props.data.map(function(p,i){
          if (p.isBlocked){
            return (<li>{p.userName}</li>);
          }
        });
      return (<div>{users}</div>);
      }
}

MyComponents.BannedList = BannedList

class AdminList extends React.Component {
  render(){
      var users = this.props.data.map(function(p,i){
          if (p.isAdmin)
          {
            var imgUrl = "images/online-" + p.isLoggedin + ".png";
            return (
              <li>{p.userName} <img src={imgUrl} height="10" width="10"></img></li>
              );
          }
        });
      return (<div>{users}</div>);
      }
}
MyComponents.AdminList = AdminList

class UserList extends React.Component {
  render(){
      //console.log(this.props.data)

      var users = this.props.data.map(function(p,i){
          if (!p.isAdmin && !p.isBlocked)
          {
            var imgUrl = "images/online-" + p.isLoggedin + ".png";
            return (
              <li>{p.userName} <img src={imgUrl} height="10" width="10"></img></li>
              );
          }
        });
      return (<div>{users}</div>);
      }
}

MyComponents.UserList = UserList

class Users extends React.Component {
  render(){
    return (
      <div>
        <h3>Users</h3>
        <ul>
          <MyComponents.UserList data={this.props.data}/>
        </ul>
        <h3>Admins</h3>
        <ul>
          <MyComponents.AdminList data={this.props.data}/>
        </ul>
        <h3>Banned</h3>
        <ul>
          <MyComponents.BannedList data={this.props.data}/>
        </ul>
      </div>
      );
  }
}

MyComponents.Users = Users