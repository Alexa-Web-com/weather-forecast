import './Spinner.css'
import { DICT } from '../../utils/dict'

const Spinner = (props) => {
    return (
        <div className='spinner_cntr'>
            <div className="spinner_img"></div>
            <p className="spinner_text">{DICT[props.lang].spinnerText}</p>
        </div>
    )
}

export default Spinner