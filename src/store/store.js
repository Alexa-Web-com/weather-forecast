import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './languageSlice'
import locationReducer from './locationSlice'
import weatherDataReducer from './weatherDataSlice'

export const store = configureStore({
    reducer: {
        language: languageReducer,
        location: locationReducer,
        weatherData: weatherDataReducer,
    },
})