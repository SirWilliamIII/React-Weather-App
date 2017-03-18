/**
 * Created by willcarpenter on 3/17/17.
 */

var React = require('react');

const API_KEY = '&appid=' + '7c13a0b4ec9ce733a9faecfc4e9b6a2c';

var WeatherMessage = React.createClass({

    render: function() {
        var {temp, location} = this.props;
        return (
            <div>
                <h3>It is {temp} degrees in {location}</h3>
            </div>
        );
    }
});

module.exports = WeatherMessage;