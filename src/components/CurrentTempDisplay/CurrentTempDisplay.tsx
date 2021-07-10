import React from 'react';
import './CurrentTempDisplay.css'
import WeatherSensorReading from "../../types/WeatherSensorReading"

type MyProps = {
};

type MyState = {
    temp: number;
    humidity: number;
    gotWeatherReading: boolean
};

class CurrentTempDisplay extends React.Component<MyProps, MyState> {
    private interval:any;

    state: MyState = {
        temp: 0,
        humidity: 0,
        gotWeatherReading: false
    };

    componentDidMount() {
        this.fetchAndUpdateReading();
        this.interval = setInterval(() => this.fetchAndUpdateReading(), 1000 * 30);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    fetchAndUpdateReading() {
        // Hard coding website for now I guess
        fetch(`http://10.0.0.69:4001/weather/getCurrentRoomWeather`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                temp: this.state.temp = Math.floor(response.Temperature),
                humidity: this.state.humidity = Math.floor(response.Humidity),
                gotWeatherReading: true
            })
        })
        .catch((error) => {
            console.error("Error Getting Weather Data. Error: ", error);
        });
    }

    render() {
        const { gotWeatherReading, temp, humidity } = this.state;
        return (
            <div>
                <span className="component-header">Ambient Temperature</span>
                <div id='WeatherDisplay'>
                    <span className="title">Temperature</span>
                    <div>
                        <span id="Temp">{(gotWeatherReading ? `${temp}°F` : "Loading Weather Data...")}</span>
                    </div>
                    <span className="title">Humidity</span>
                    <div>
                        <span id="Humidity">{(gotWeatherReading ? `${humidity}%` : "Loading Weather Data...")}</span>
                    </div>            
                </div>
            </div>
        );
    }
}

export default CurrentTempDisplay;
