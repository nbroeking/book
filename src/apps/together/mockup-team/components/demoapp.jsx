class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
          <br></br>
          <div className="row">
            <div className="col s4">
              <MyComponents.Chatrooms />
            </div>
            <div className="col s8">
              <MyComponents.Chat />
            </div>
            <div className="col s8 offset-s4">
              <MyComponents.Chatbox />
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
