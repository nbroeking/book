class ChatApp extends React.Component {
  render(){
    
                  //<MyComponents.Chat data={this.props.data}/>
    
                  //<MyComponents.Chatbox data={this.props.data}/>
    
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

            </div>
            <div className="col s12 offset-s4">

            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.ChatApp = ChatApp
