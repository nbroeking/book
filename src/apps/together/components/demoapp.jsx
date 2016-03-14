class App extends React.Component {
  render(){
      console.log("Props data: ", this.props.data);
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions}
          user={this.props.data.user}
        />
        <div className="container">
          <br></br>
          <div className="row">
            <div className="col s4">
              <MyComponents.Chatrooms data={this.props.data}/>
            </div>
            <div className="col s8">
              <MyComponents.Chat data={this.props.data}/>
            </div>
            <div className="col s8 offset-s4">
              <MyComponents.Chatbox data={this.props.data}/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
