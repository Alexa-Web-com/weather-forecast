import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentWeatherData: {},
}

export const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        changeWeatherData: (state, action) => {
            state.currentWeatherData = action.payload
        }
    }
})

export const { changeWeatherData } = weatherDataSlice.actions

export default weatherDataSlice.reducer