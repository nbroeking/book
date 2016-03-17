class AdminApp extends React.Component {
  render(){
    console.log("this.props.actions:")
    console.log(this.props.actions)
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container ">
            <MyComponents.Users data={this.props.data.users} actions={this.props.actions}/>
          </div>
      </div>
      );
  }
}

MyComponents.AdminApp = AdminApp
