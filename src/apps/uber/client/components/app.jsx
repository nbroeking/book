class App extends React.Component {
  render(){
	  var providerElements = this.props.data.providers.map(function(p,j){
      return <MyComponents.ProviderList provider={p} key={j}/>
    })
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
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
                provider={this.props.data.provider}
                center={this.props.data.center}
                user={this.props.data.user}
                setUserLocationAction={this.props.actions.setUserLocation}/>
            </div>

            <h3>Providers List: </h3>
            <hr></hr>
            <div className="row">
              {providerElements}
            </div> 
          </div>
        </div>
      </div>
      );
  } 
}

MyComponents.App = App
