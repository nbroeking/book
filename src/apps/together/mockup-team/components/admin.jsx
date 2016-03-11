class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
          <br></br>
          <div className="row">
            <div className="col s8">
              <MyComponents.Users data = {this.props.data.users}/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
