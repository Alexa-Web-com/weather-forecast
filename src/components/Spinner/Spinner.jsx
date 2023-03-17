import './Spinner.css'
import { DICT } from '../../utils/dict'
import { LANG } from '../../utils/const'

const Spinner = (props) => {
    return (
        <div className='spinner_cntr'>
            <div className="spinner_img"></div>
            <p className="spinner_text">{DICT[LANG].spinnerText}</p>
        </div>
    )
}

export default Spinner