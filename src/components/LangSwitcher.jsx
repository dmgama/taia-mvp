import { useLang } from '../i18n/LangContext'

export default function LangSwitcher() {
  const { lang, setLang, TRANSLATIONS } = useLang()

  return (
    <div
      style={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 100,
        display: 'flex',
        gap: 6,
      }}
    >
      {Object.values(TRANSLATIONS).map(({ lang: l, flag, name }) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            background: lang === l ? '#C9A84C22' : 'transparent',
            border: `1px solid ${lang === l ? '#C9A84C' : '#333'}`,
            color: lang === l ? '#C9A84C' : '#555',
            borderRadius: 20,
            padding: '4px 10px',
            fontSize: 11,
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: lang === l ? 700 : 400,
            transition: 'all 0.2s',
          }}
        >
          {flag} {name}
        </button>
      ))}
    </div>
  )
}
