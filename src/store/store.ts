import languageReducer from './languageSlice'
import locationReducer from './locationSlice'
import weatherDataReducer from './weatherDataSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        language: languageReducer,
        location: locationReducer,
        weatherData: weatherDataReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

