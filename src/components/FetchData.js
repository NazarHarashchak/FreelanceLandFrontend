import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/actions';

class FetchData extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestWeatherForecasts();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderForecastsTable(this.props)}
            </div>
        );
    }
}

function renderForecastsTable(props) {
    console.log(props.forecasts);
    return (
		<ul>
            {props.forecasts.map(forecast =>
                <li key={forecast}>{forecast} </li>
            )}
        </ul>
    );
}

export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchData);
