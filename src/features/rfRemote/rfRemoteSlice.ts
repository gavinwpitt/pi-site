import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { bool } from 'prop-types';

interface RfRemoteState { }

type RfCallArguments = {
    switchNumber: number,
    on: boolean
}

// No state for rf remote
const initialState: RfRemoteState = { }

export const makeRfCall = createAsyncThunk("rfRemote/rfCallMade", async (args:RfCallArguments) => {
    const {
        on,
        switchNumber
    } = args;
    console.log("makeRfCall", args);
    try {
        // Hard coding website for now I guess
        await fetch(`http://10.0.0.69:4001/RfRemote/${(on ? "ON" : "OFF")}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                switchNumbers: [switchNumber]
            })
        });
    } catch (error) {
        console.error("Error Sending RF Command. Error: ", error);
    }
});

export const rfRemoteSlice = createSlice({
    name: 'rfRemote',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
      builder
      .addCase(makeRfCall.pending, (state, action) => {
      })
      .addCase(makeRfCall.fulfilled, (state, action) => {
      })
      .addCase(makeRfCall.rejected, (state, action) => {
        console.log("ERROR LOADING WEATHER DATA.", action.error);
      })
    }
});

export default rfRemoteSlice.reducer