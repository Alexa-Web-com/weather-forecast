import './Spinner.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { useSelector } from 'react-redux'


const Spinner = () => {
    const lang = useSelector((state) => state.language.currentLanguage)

    return (
        <div className='spinner_cntr'>
            <div className="spinner_img"></div>
            <p className="spinner_text">{DICT[lang].spinnerText}</p>
        </div>
    )
}

export default Spinner