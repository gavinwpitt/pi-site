import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface WeatherReaderState {
    temp: number,
    humidity: number,
    initialized: boolean
}

interface WeatherReaderResponse {
    Temperature: number,
    Humidity: number,
    Pressure: number,
    DateTime: string
}

const initialState: WeatherReaderState = {
    temp: 0,
    humidity: 0,
    initialized: false
}

export const fetchWeatherReading = createAsyncThunk<WeatherReaderResponse>("weatherReader/currWeatherLoaded", async () => {
  const response = await fetch(`http://10.0.0.69:4001/weather/getCurrentRoomWeather`);
  return (await response.json()) as WeatherReaderResponse;
});

export const weatherReaderSlice = createSlice({
    name: 'weatherReader',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
      builder
      .addCase(fetchWeatherReading.pending, (state, action) => {
        // getCurrentWeather call is fast and reliable enough... no point in doing pending actions
      })
      .addCase(fetchWeatherReading.fulfilled, (state, action) => {
        state.temp = Math.floor(action.payload.Temperature);
        state.humidity = Math.floor(action.payload.Humidity);
        state.initialized = true;
      })
      .addCase(fetchWeatherReading.rejected, (state: WeatherReaderState, action) => {
        console.log("ERROR LOADING WEATHER DATA.", action.error);
      })
    }
});

export const selectWeatherReading = (state: RootState) => state.weatherReader

export default weatherReaderSlice.reducer