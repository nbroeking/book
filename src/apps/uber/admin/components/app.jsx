class App extends React.Component {
  render(){
    var userElements = this.props.data.users.map(function(u,i){
      return <MyComponents.UserList user={u} key={i}/>
    })
    var providerElements = this.props.data.providers.map(function(p,j){
      return <MyComponents.ProviderList provider={p} key={j}/>
    })
    
    return <div>
	  <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
    <div className="container">
      <br></br>
		  <MyComponents.UserMap users={this.props.data.users}
		  providers={this.props.data.providers}
      provider={this.props.data.provider}
		  center={this.props.data.center}
		  user={this.props.data.user}
		  setUserLocationAction={this.props.actions.setUserLocation}/>

      <h3>Users List:</h3>
  	  <hr></hr>
  	  <div className="row">
        {userElements}
  	  </div>

      <h3>Providers List: </h3>
      <hr></hr>
      <div className="row">
        {providerElements}
      </div> 
	     
    </div>
    </div>
  }
}

MyComponents.App = App
