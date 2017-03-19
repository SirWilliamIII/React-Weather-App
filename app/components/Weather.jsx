var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
      getInitialState: function() {
          return {
              location: 'Miami',
              temp: 306.48
          }
      },

      handleSearch: function(location) {
          var that = this;
          openWeatherMap.getTemp(location).then(function(temp) {
              that.setState({
                  location: location,
                  temp: temp
              });
          }, function(errorMessage) {
                alert(errorMessage);
          });
      },

      render: function () {
          var {temp, location} = this.state;

          var fahrenheitTemp = ( temp * (9 / 5) ) - 459.67;
          var displayTemp = Math.round(10 * fahrenheitTemp) / 10;

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={displayTemp} location={location}/>
            </div>
    )
  }
});

module.exports = Weather;
