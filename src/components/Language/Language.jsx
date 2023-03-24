import './Language.css'
import { useContext } from 'react'
import { ContextLanguage } from '../../context/ContextLanguage'

const Language = (props) => {
    const [lang, setLang] = useContext(ContextLanguage)

    return (
        <p className='head__language_el'
            onClick={() => setLang(props.language)}
            style={{
                backgroundColor: props.language === lang && 'rgb(145, 97, 183)',
                color: props.language === lang && 'white'
            }}
        >{props.language.toUpperCase()}</p>
    )
}

export default Language