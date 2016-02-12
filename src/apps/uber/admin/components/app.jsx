class App extends React.Component {
  render(){
  
    var userElements = this.props.data.users.map(function(u,i){
      return <MyComponents.UserList user={u} key={i}/>
    })
    
    return <div>
	  <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
	  <div className="card">
		<MyComponents.UserMap users={this.props.data.users}
		  providers={this.props.data.providers}
		  center={this.props.data.center}
		  user={this.props.data.user}
		  setUserLocationAction={this.props.actions.setUserLocation}/>
	  </div>
	  
      <h3>Users List:</h3>
	  <hr></hr>
	  <div className="row">
          {userElements}
	  </div>
	  
      <MyComponents.ProviderMap users={this.props.data.providers}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
