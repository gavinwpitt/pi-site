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
        fetch(`http://10.0.0.69:4000/weather/getCurrentRoomWeather`, {
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
            <div className="shadow rounded p-5 text-center bg-gray-800">
                <div className="flex items-center justify-center">
                    <svg className="fill-current text-gray-500 w-3 h-5 mr-2" viewBox="0 0 11 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.02513 1.02513C3.6815 0.368749 4.57174 0 5.5 0C6.42826 0 7.3185 0.368749 7.97487 1.02513C8.63125 1.6815 9 2.57174 9 3.5V14.259C9.76196 14.8876 10.3434 15.7123 10.6785 16.6487C11.076 17.7597 11.1057 18.969 10.7632 20.0982C10.4207 21.2273 9.72411 22.2164 8.77637 22.9193C7.82862 23.6222 6.67995 24.0017 5.5 24.0017C4.32005 24.0017 3.17138 23.6222 2.22363 22.9193C1.27589 22.2164 0.579326 21.2273 0.236814 20.0982C-0.105698 18.969 -0.0759959 17.7597 0.321533 16.6487C0.656608 15.7123 1.23804 14.8876 2 14.259V3.5C2 2.57174 2.36875 1.6815 3.02513 1.02513ZM5.5 2C5.10218 2 4.72064 2.15804 4.43934 2.43934C4.15804 2.72064 4 3.10218 4 3.5V14.76C4 15.094 3.83326 15.4059 3.55556 15.5915C2.93122 16.0086 2.45758 16.6155 2.20461 17.3225C1.95164 18.0295 1.93274 18.7991 2.1507 19.5176C2.36866 20.2362 2.81193 20.8656 3.41504 21.3129C4.01815 21.7602 4.74912 22.0017 5.5 22.0017C6.25088 22.0017 6.98185 21.7602 7.58496 21.3129C8.18807 20.8656 8.63134 20.2362 8.8493 19.5176C9.06726 18.7991 9.04836 18.0295 8.79539 17.3225C8.54242 16.6155 8.06878 16.0086 7.44444 15.5915C7.16674 15.4059 7 15.094 7 14.76V3.5C7 3.10218 6.84196 2.72064 6.56066 2.43934C6.27936 2.15804 5.89782 2 5.5 2Z"/>
                    </svg>
                    <h2 className="text-gray-500 uppercase text-lg">Ambient Temperature</h2>
                </div>
                <div className="text-white py-3" id='WeatherDisplay'>
                    <p className="title">Temperature</p>
                    <div className="mb-4">
                        <p id="Temp">{(gotWeatherReading ? `${temp}°F` : "Loading Weather Data...")}</p>
                    </div>
                    <p className="title">Humidity</p>
                    <div>
                        <p id="Humidity">{(gotWeatherReading ? `${humidity}%` : "Loading Weather Data...")}</p>
                    </div>            
                </div>
            </div>
        );
    }
}

export default CurrentTempDisplay;
