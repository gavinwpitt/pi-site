import React from 'react';
import './RfRemote.css'
import WeatherSensorReading from "../../types/WeatherSensorReading"
import Button from '@material-ui/core/Button';

class RfRemote extends React.Component {

    makeRfCall(switchNumber:number, on:boolean) {
        // Hard coding website for now I guess
        fetch(`http://10.0.0.69:4001/rfremote/${(on ? "ON" : "OFF")}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                switchNumbers: [switchNumber]
            })
        });
    }

    renderButton(title:string, switchNumber:number) {
        return (
            <div className="switchBlock">
                <span className="title">{title}</span>
                <div className="buttonBlock" id={`${title}-switchBlock`}>
                    <Button size="large" onClick={() => { this.makeRfCall(switchNumber, true) }} variant="contained" color="primary">
                        On
                    </Button>
                    <span className="seperator"></span>
                    <Button size="large" onClick={() => {this.makeRfCall(switchNumber, false) }} variant="contained" color="secondary">
                        Off
                    </Button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        //
    }

    componentWillUnmount() {
        //
    }

    render() {
        return (
            <div>
                <span className="component-header">RF Remote</span>
                <div id='RfRemote'>
                    {this.renderButton("Living Fan", 1)}
                    {this.renderButton("Living Room Lights", 2)}
                    {this.renderButton("Bed Room Lights", 3)}
                </div>
            </div>
        );
    }
}

export default RfRemote;
