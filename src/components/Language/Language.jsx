import './Language.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../store/languageSlice'

const Language = (props) => {
    const lang = useSelector((state) => state.language.currentLanguage)
    const dispatch = useDispatch()

    return (
        <p className='head__language_el'
            onClick={() => dispatch(changeLanguage(props.language))}
            style={{
                backgroundColor: props.language === lang && 'rgb(145, 97, 183)',
                color: props.language === lang && 'white'
            }}
        >{props.language.toUpperCase()}</p>
    )
}

export default Language