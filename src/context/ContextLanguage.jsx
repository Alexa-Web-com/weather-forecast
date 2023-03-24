import { createContext, useState } from "react";
import { languages } from "../utils/dict";

export const ContextLanguage = createContext()

export const ContextLanguageProvider = (props) => {

    const [lang, setLang] = useState(navigator.language === languages.find(lang => lang === navigator.language) ? navigator.language : 'en')

    return (
        <ContextLanguage.Provider value={[lang, setLang]}>
            {props.children}
        </ContextLanguage.Provider>
    )
}