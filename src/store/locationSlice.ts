import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGeolocationState {
    city?: string;
    latitude: string;
    longitude: string;
    countryCode?: string;
}

export interface ILocationState {
    currentLocation: IGeolocationState
}

const initialState: ILocationState = {
    currentLocation: JSON.parse(localStorage.getItem('location') ?? 'null')
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
        changeLocationByCityName: (state, action: PayloadAction<IGeolocationState>) => {
            state.currentLocation = {
                city: action.payload.city,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude,
                countryCode: action.payload.countryCode,
            }
        },

        changeLocationByGeolocation: (state, action: PayloadAction<IGeolocationState>) => {
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