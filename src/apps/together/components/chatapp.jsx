class ChatApp extends React.Component {
  render(){
    
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions}
          user={this.props.data.user}
        />
        <div>
          <br></br>
          <div className="row">
            <div className="col s2">
              <MyComponents.Chatrooms data={this.props.data} actions={this.props.actions}/>
            </div>
            <div className="col s10">
              <MyComponents.Chat data={this.props.data}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <MyComponents.Chatbox data={this.props.data}/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.ChatApp = ChatApp
