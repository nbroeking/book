class App extends React.Component {
  render(){
    return (
      <div>
        <MyComponents.NavBar data={this.props.data} actions={this.props.actions}/>
        <div className="container">
    
          <h3>Ideation:</h3>
          <MyComponents.Answers />

        </div>
      </div>
      );
  }
}

MyComponents.App = App
