import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IWeatherDataFromUrl } from '../utils/useGetDataFromUrl'

interface IWeatherDataState {
    currentWeatherData: IWeatherDataFromUrl | undefined
}

const initialState: IWeatherDataState = {
    currentWeatherData: {
        current_weather: {
            weathercode: 0,
            time: '',
            temperature: 0,
        },
        daily: {
            sunrise: [],
            sunset: [],
            apparent_temperature_min: [],
            apparent_temperature_max: [],
        },
        hourly: {
            time: [],
            apparent_temperature: [],
            pressure_msl: [],
            windspeed_10m: [],
            winddirection_10m: [],
            precipitation: [],
            precipitation_probability: [],
            weathercode: [],
            temperature_2m: [],
        },
        hourly_units: {
            temperature_2m: '',
            pressure_msl: '',
            windspeed_10m: '',
            precipitation: '',
            precipitation_probability: '',
        },
    },
}

export const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        changeWeatherData: (state, action: PayloadAction<IWeatherDataFromUrl>) => {
            state.currentWeatherData = action.payload
        }
    }
})

export const { changeWeatherData } = weatherDataSlice.actions
export default weatherDataSlice.reducer