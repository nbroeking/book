class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="collection">
          <div className="card teal lighten-3">
            <div className="card-content collection">
              <div className="card blue-grey white-text">
                <span className="card-title">Chatrooms</span>
                <p >Login to view the chatrooms</p>
      
                <div className="card-action">
                  <a href="demo.html">Login</a>
                </div>
              </div>
      
              <div className="card blue-grey white-text">
                <span className="card-title">Ideation</span>
                <MyComponents.Answers />
              </div>

            </div>
          </div>
        </div>
      </div>
      );
  }
}

MyComponents.App = App
