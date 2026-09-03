import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../i18n/translations'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: typeof translations['es']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'en' ? 'en' : 'es'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}