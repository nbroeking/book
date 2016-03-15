class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions} 
          user={this.props.user}/>
        <div className="container">
         <h3>TODO: BUILD A SPLASH PAGE</h3>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
