class ChatApp extends React.Component {
  render(){
    
    return (
      <div>
        <MyComponents.NavBar 
          data={this.props.data} 
          actions={this.props.actions}
          user={this.props.data.user}
        />
        <br></br>
      
        <div className="row">
          <div className="col s2">
            <MyComponents.Chatrooms 
              data={this.props.data} 
              actions={this.props.actions}/>
          </div>
          <div className="col s3">
            <MyComponents.UserInfo 
              data={this.props.data} 
              actions={this.props.actions}/>
          </div>
      
          <div className="col s7">
            <MyComponents.Chat 
              data={this.props.data} 
              actions={this.props.actions}/>
          </div>
          <div className="col s10">
            <MyComponents.Chatbox 
              data={this.props.data} 
              actions={this.props.actions}/>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.ChatApp = ChatApp
