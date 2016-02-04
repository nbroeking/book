MyComponents.City = React.createClass({

  render: function() {
    
    var city = this.props.city
    return (
      <div className="col s4">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
              <ul className="collection black-text">
                <li className="collection-item">{city['currently']['summary'] }</li>
                  <li className="collection-item">Temperature: {city['currently']['temperature']} degrees F</li>
                  <li className="collection-item">Chance of Precipitation: {(city['currently']['precipProbability'] * 100)}%</li>
                  <li className="collection-item">Cloud Cover: {(city['currently']['cloudCover']*100)}%</li>                               <li className="collection-item">Humidity: {(city['currently']['humidity']*100)}%</li>
                  <li className="collection-item">Visability: {city['currently']['visibility']} miles</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var displaycities = [];
    
    for( var key in this.props.cities){
      if (this.props.cities.hasOwnProperty(key)) {
        var city_t = this.props.cities[key];
        var tmp = <MyComponents.City city={city_t} name={key} key={key}/>
        displaycities.push(tmp);

      }
    }

    return (
      <div className="card blue-grey lighten-1">
        <div className="card-content white-text">
          <div className="row">
          {displaycities}
          </div>
        </div>
      </div>
    );
  }
});