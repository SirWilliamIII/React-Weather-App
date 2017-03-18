/**
 * Created by willcarpenter on 3/17/17.
 */

var React = require('react');

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