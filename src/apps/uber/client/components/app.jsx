class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="collection">
          <div className="card">
            <div className="collection">
            <MyComponents.User
              user={this.props.data.user}
              loginAction={this.props.actions.login}
              logoutAction={this.props.actions.logout}/>
          </div>
          </div>
          <div className="card">
            <MyComponents.MapView
              providers={this.props.data.providers}
              center={this.props.data.center}
              user={this.props.data.user}
              setUserLocationAction={this.props.actions.setUserLocation}/>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
