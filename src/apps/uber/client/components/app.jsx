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
        
    
          <div className="collection">
            <div className="card">
              <div className="collection">
              <row>
                <div className="col s6">
                  <MyComponents.User
                    user={this.props.data.user}
                    loginAction={this.props.actions.login}
                    logoutAction={this.props.actions.logout}/>
                </div>
              </row>
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
      </div>
      );
  } 
}

MyComponents.App = App
