import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../utils/dict'

const langFromNavivgator = navigator.language.slice(0, 2)

const initialState = {
    currentLanguage: langFromNavivgator === languages.find(lang => lang === langFromNavivgator) ? langFromNavivgator : 'en',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload
        },
    },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer