import { createContext, useContext, useState } from 'react'
import { TRANSLATIONS, detectLang } from './translations'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang)
  const t = TRANSLATIONS[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, t, TRANSLATIONS }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
