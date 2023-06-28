import React from 'react'
import './Spinner.css'
import { DICT } from '../../utils/dict'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Spinner = (): JSX.Element => {
    const lang: string = useSelector((state: RootState) => state.language.currentLanguage)

    return (
        <div className='spinner_cntr'>
            <div className="spinner_img"></div>
            <p className="spinner_text">{DICT[lang].spinnerText}</p>
        </div>
    )
}

export default Spinner