import React from 'react';
import './CurrentTempDisplay.css'
import WeatherSensorReading from "../../types/WeatherSensorReading"

type MyProps = {
    message: string;
};

type MyState = {
    temp: number;
};

class CurrentTempDisplay extends React.Component<MyProps, MyState> {
    private interval:any;

    state: MyState = {
        temp: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ temp: this.state.temp = this.getTemperature().Temperature }), 1000 * 1);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getTemperature() : WeatherSensorReading {
        return {
            "Temperature": 69,
            "Humidity": 70,
            "Pressure": 49.5
        }
    }

    render() {
        return (
        <div className='CurrentTempDisplay'>
            {this.getTemperature().Temperature}
        </div>
        );
    }
}

export default CurrentTempDisplay;
