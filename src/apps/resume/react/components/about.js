MyComponents.Education = React.createClass({
  render: function(){
      return(
        <div className="col s6">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{this.props.name}</span>
             <p>Major: {this.props.major}</p> 
             <p>GPA: {this.props.gpa}</p>
             <p>Graduation Date: {this.props.graduation_date}</p>
            </div>
          </div>
        </div>
        )
    }
});

MyComponents.About = React.createClass({

  render: function() {
    
    var schools = this.props.education.map(function(c,i){
      console.log("Schools", c, i);
      return <MyComponents.Education key={i} name={c.name} major={c.major} graduation_date={c.graduation_date} gpa={c.gpa}/>
    })
    
    var description = this.props.values.description;
    var picture = "images/profile.jpg"
    
    return (

      <div className="card blue-grey lighten-1">
      <div className="row">
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img src="images/profile.jpg"/>
            </div>
          </div>
        </div>
      
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Info</span>
              <p>Name: Nicolas C. Broeking</p>
              <p>Email: nibr3402@colorado.edu</p>
              <p>Github: <a href="https://github.com/nbroeking">https://github.com/nbroeking</a></p>
            </div>
          </div>
        </div>
      
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">About Me</span>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        {schools}
      </div>
      </div>
    );
  }

});
