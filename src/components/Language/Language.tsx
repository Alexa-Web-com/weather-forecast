import React from 'react'
import './Language.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../store/languageSlice'
import { RootState } from '../../store/store'

interface ILanguageProps {
    key: string;
    language: string;
}

const Language = (props: ILanguageProps) => {

    const lang = useSelector((state: RootState) => state.language.currentLanguage)
    const dispatch = useDispatch()

    return (
        <p className='head__language_el'
            onClick={() => dispatch(changeLanguage(props.language))}
            style={{
                backgroundColor: props.language === lang ? 'rgb(145, 97, 183)' : 'transparent',
                color: props.language === lang ? 'white' : 'transparent',
            }}
        >{props.language.toUpperCase()}</p>
    )
}

export default Language