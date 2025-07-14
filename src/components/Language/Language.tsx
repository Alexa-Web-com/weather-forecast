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
                backgroundColor: props.language === lang ? '#00a6c0' : 'transparent',
                color: props.language === lang ? 'white' : 'black',
            }}
        >{props.language.toUpperCase()}</p>
    )
}

export default Language