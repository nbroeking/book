class AdminApp extends React.Component {
  render(){
    console.log("this.props.data:")
    console.log(this.props.data.users)
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container ">
            <MyComponents.Users data = {this.props.data.users}/>
          </div>
      </div>
      );
  }
}

MyComponents.AdminApp = AdminApp
