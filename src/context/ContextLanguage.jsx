import { createContext, useState } from "react";
import { languages } from "../utils/dict";

export const ContextLanguage = createContext()

export const ContextLanguageProvider = (props) => {
    const langFromNavivgator = navigator.language.split('')[0] + navigator.language.split('')[1]

    const [lang, setLang] = useState(langFromNavivgator === languages.find(lang => lang === langFromNavivgator) ? langFromNavivgator : 'en')

    return (
        <ContextLanguage.Provider value={[lang, setLang]}>
            {props.children}
        </ContextLanguage.Provider>
    )
}