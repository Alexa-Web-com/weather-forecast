import { createSlice } from '@reduxjs/toolkit'
import { languages } from '../utils/dict'
import type { PayloadAction } from '@reduxjs/toolkit'

const langFromNavivgator = navigator.language.slice(0, 2)

interface ILanguageState {
    currentLanguage: string
}

const initialState: ILanguageState = {
    currentLanguage: langFromNavivgator === languages.find(lang => lang === langFromNavivgator) ? langFromNavivgator : 'en',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload
        },
    },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer