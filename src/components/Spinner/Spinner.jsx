import './Spinner.css'
import { DICT } from '../../utils/dict'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Spinner = () => {
    const [lang,] = useContext(ContextLanguage)

    return (
        <div className='spinner_cntr'>
            <div className="spinner_img"></div>
            <p className="spinner_text">{DICT[lang].spinnerText}</p>
        </div>
    )
}

export default Spinner