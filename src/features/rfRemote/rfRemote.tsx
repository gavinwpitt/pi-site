import React from 'react';

class rfRemote extends React.Component {

    makeRfCall(switchNumber:number, on:boolean) {
        // Hard coding website for now I guess
        fetch(`http://10.0.0.69:4001/RfRemote/${(on ? "ON" : "OFF")}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                switchNumbers: [switchNumber]
            })
        })
        .catch((error) => {
            console.error("Error Sending RF Command. Error: ", error);
        });;
    }

    renderButton(title:string, switchNumber:number) {
        return (
            <div className="py-5 px-3">
                <p className="pb-2 font-semibold text-lg text-gray-300">{title}</p>
                <div className="grid grid-cols-2 gap-4 mx-3" id={`${title}-switchBlock`}>
                    <button className="bg-green-300 px-4 py-2 rounded text-green-900 uppercase font-bold" onClick={() => { this.makeRfCall(switchNumber, true) }}>
                        On
                    </button>
                    <button className="bg-red-400 px-4 py-2 rounded text-red-900 uppercase font-bold" onClick={() => {this.makeRfCall(switchNumber, false) }}>
                        Off
                    </button>
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
            <div className="shadow rounded p-5 text-center bg-gray-800 my-5">
                <div className="flex items-center justify-center">
                    <svg className="fill-current text-gray-500 w-5 mr-2" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 8.44772 0.447715 8 1 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10H1C0.447715 10 0 9.55228 0 9Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.24 -1.19209e-07L15.76 0C16.3181 0.000296295 16.8656 0.156282 17.34 0.450419C17.8139 0.744298 18.1965 1.16444 18.4449 1.66368C18.4451 1.66412 18.4453 1.66456 18.4455 1.665L21.8942 8.55227C21.9638 8.69126 22 8.84456 22 9V15C22 15.7957 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7957 18 19 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V9C0 8.84456 0.0362364 8.69126 0.105833 8.55227L3.55447 1.665C3.55471 1.66451 3.55495 1.66402 3.5552 1.66354C3.80358 1.16436 4.18617 0.744269 4.66004 0.450419C5.13436 0.156283 5.68187 0.000296056 6.24 -1.19209e-07ZM4.45 2.11L5.34417 2.55773L2 9.23637V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V9.23637L16.6558 2.55773L16.6545 2.555C16.5717 2.38839 16.4441 2.24818 16.2859 2.15014C16.1279 2.05213 15.9456 2.00013 15.7597 2H6.24034C6.05436 2.00013 5.87211 2.05213 5.71405 2.15014C5.55594 2.24819 5.42832 2.38839 5.34553 2.555L4.45 2.11Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 12.4477 4.44772 12 5 12H5.01C5.56229 12 6.01 12.4477 6.01 13C6.01 13.5523 5.56229 14 5.01 14H5C4.44772 14 4 13.5523 4 13Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 12.4477 8.44772 12 9 12H9.01C9.56229 12 10.01 12.4477 10.01 13C10.01 13.5523 9.56229 14 9.01 14H9C8.44772 14 8 13.5523 8 13Z"/>
                    </svg>
                    <h2 className="text-gray-500 uppercase text-lg">RF Remote</h2>
                </div>
                <div id='rfRemote'>
                    {this.renderButton("Living Room Fan", 1)}
                    {this.renderButton("Living Room Lights", 2)}
                    {this.renderButton("Bed Room Lights", 3)}
                </div>
            </div>
        );
    }
}

export default rfRemote;
