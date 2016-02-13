class App extends React.Component {
  render(){
	  var providerElements = this.props.data.providers.map(function(p,j){
      return <MyComponents.ProviderList provider={p} key={j}/>
    })
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
          <MyComponents.User
            user={this.props.data.user}
            loginAction={this.props.actions.login}
            logoutAction={this.props.actions.logout}/>
          <MyComponents.MapView
            providers={this.props.data.providers}
            provider={this.props.data.provider}
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
