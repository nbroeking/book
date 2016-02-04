MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <li className="collection-item">{this.props.skill}</li>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var languages = this.props.skills.languages.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    });
    var frameworks = this.props.skills.frameworks.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    });
    var skills = this.props.skills.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    });

    return (
      <div className="card blue-grey lighten-1">
        <div className="row">
      
          <div className="col s4">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">Languages</span>
                <ul className="collection black-text">
                {languages}
                </ul>
              </div>
            </div>
          </div>
      
          <div className="col s4">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">Frameworks</span>
                <ul className="collection black-text">
                {frameworks}
                </ul>
              </div>
            </div>
          </div>
      
          <div className="col s4">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">Skills</span>
                  <ul className="collection black-text">
                  {skills}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
