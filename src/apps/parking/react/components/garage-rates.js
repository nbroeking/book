MyComponents.Rate = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display a single rate data.
          Raw props data is {JSON.stringify(this.props)}
        </div>
      </div>
    );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {
    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    });
    return (
      <div className="card">
        <div className="card-content">
          { rates }
        </div>
      </div>
    );
  }
});
