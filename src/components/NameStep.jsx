import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function NameStep({ onNext }) {
  const { t } = useLang()
  const n = t.name_step
  const [name, setName] = useState('')

  return (
    <div className="fade-in min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <p className="font-cinzel text-xs tracking-[4px] mb-8 text-center" style={{ color: '#C9A84C' }}>
          {n.label}
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-center mb-2 text-white">
          {n.title}
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: '#666' }}>
          {n.subtitle}
        </p>

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && name.trim() && onNext(name.trim())}
          placeholder={n.placeholder}
          className="w-full bg-transparent text-white text-xl text-center outline-none py-4 mb-8"
          style={{ borderBottom: '1px solid #C9A84C', color: '#fff' }}
          autoFocus
        />

        <button
          onClick={() => name.trim() && onNext(name.trim())}
          className="btn-gold w-full py-4 rounded-full text-sm"
          disabled={!name.trim()}
          style={{ opacity: name.trim() ? 1 : 0.4 }}
        >
          {n.cta}
        </button>
      </div>
    </div>
  )
}
