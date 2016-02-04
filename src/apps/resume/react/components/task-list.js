MyComponents.Task = React.createClass({

  render: function() {
    return (
      <li className="collection-item">Task: {this.props.task.title} Priority: {this.props.task.priority} Type: {this.props.task.type} Due: {this.props.task.deadline}</li>
    );
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {

    var tasks = [];
    var completedTasks = [];
    
    for( var key in this.props.tasks){
      if (this.props.tasks.hasOwnProperty(key)) {
        var task_t = this.props.tasks[key];
        if( task_t.assigned == "nbroeking"){
          console.log("Nics Task", task_t)
          if( task_t.completed == false){
            console.log("Task completed false ", task_t)
            var tmp = <MyComponents.Task task={task_t} key={key}/>
            tasks.push(tmp);
          }
          else if( task_t.completed == true){
            var tmp = <MyComponents.Task task={task_t} key={key}/>
            completedTasks.push(tmp)
          }
        }
      }
    }

    return (
      <div className="card blue-grey lighten-1">
        <div className="row">
          <div className="col s6">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">My Tasks</span>
                <ul className="collection black-text">
                {tasks}
                </ul>
              </div>
            </div>
          </div>
      
          <div className="col s6">
            <div className="card blue-grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">My Completed Tasks</span>
                <ul className="collection black-text">
                {completedTasks}
                </ul>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    );
  }
});
