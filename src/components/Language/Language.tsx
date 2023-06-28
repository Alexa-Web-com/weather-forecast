import React from 'react'
import './Language.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../store/languageSlice'
import { RootState } from '../../store/store'

interface ILanguageProps {
    key: string;
    language: string;
}

const Language = (props: ILanguageProps): JSX.Element => {

    const lang: string = useSelector((state: RootState) => state.language.currentLanguage)
    const dispatch = useDispatch()

    return (
        <p className='head__language_el'
            onClick={() => dispatch(changeLanguage(props.language))}
            style={{
                backgroundColor: props.language === lang ? 'rgb(145, 97, 183)' : 'transparent',
                color: props.language === lang ? 'white' : 'black',
            }}
        >{props.language.toUpperCase()}</p>
    )
}

export default Language