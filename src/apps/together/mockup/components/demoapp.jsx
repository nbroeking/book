class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="collection">
          <div className="card teal lighten-3">
            <div className="card-content collection">
              <div className="row">
                <MyComponents.Chatrooms />
                <MyComponents.Chat />
              </div>
              <div>
                <MyComponents.Chatbox />
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
