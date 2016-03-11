/*Object.keys(this.props.data).map(function(p,i){
        <li>{this.props.data[p].userName}</li>
        */
class UserList extends React.Component {
  render(){
      //console.log(this.props.data)
      var users = this.props.data.map(function(p,i){
          return (
            <li>{p.userName}</li>
            );
        });
      return (<div>{users}</div>);
      }
}

MyComponents.UserList = UserList

class Users extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <MyComponents.UserList data={this.props.data}/>
        </ul>
      </div>
      );
  }
}

MyComponents.Users = Users