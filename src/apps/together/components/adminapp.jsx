class AdminApp extends React.Component {
  render(){
             //<MyComponents.Users data = {this.props.data.users}/>
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container ">
            <h3>This is the admin page </h3>
            <p>The comment above goes here </p>
          </div>
      </div>
      );
  }
}

MyComponents.AdminApp = AdminApp
