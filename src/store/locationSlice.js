import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLocation: JSON.parse(localStorage.getItem('location'))
        ||
    {
        city: '',
        latitude: '',
        longitude: '',
        countryCode: '',
    },
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        changeLocationByCityName: (state, action) => {
            state.currentLocation = {
                city: action.payload.city,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                countryCode: action.payload.countryCode,
            }
        },

        changeLocationByGeolocation: (state, action) => {
            state.currentLocation = {
                city: '',
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                countryCode: '',
            }
        },
    },
})

export const { changeLocationByCityName, changeLocationByGeolocation } = locationSlice.actions

export default locationSlice.reducer