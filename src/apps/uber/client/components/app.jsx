class App extends React.Component {
  render(){
    console.log("User in app", this.props.data);
	   var providerElements = this.props.data.providers.map(function(p,i){
      return <MyComponents.ProviderList provider={p} key={i}/>
    })
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
          <br></br>
          <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}/>
          <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>

          <h3><i className="fa fa-truck"></i> Providers List: </h3>
          <hr></hr>
          <div className="row">
            {providerElements}
          </div>
        </div>
      </div>
      );
  } 
}

MyComponents.App = App
