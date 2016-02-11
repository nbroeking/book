class App extends React.Component {
  render(){
    return <div>
	  <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
	  <div className="card">
		<MyComponents.UserMap users={this.props.data.users}
		  providers={this.props.data.providers}
		  center={this.props.data.center}
		  user={this.props.data.user}
		  setUserLocationAction={this.props.actions.setUserLocation}/>
	  </div>
      
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderMap users={this.props.data.providers}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
