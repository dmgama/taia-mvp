import { useLang } from '../i18n/LangContext'

export default function Paywall({ name, onUnlock, onSkip }) {
  const { t } = useLang()
  const p = t.paywall

  return (
    <div className="fade-in min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-full max-w-md">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ border: '2px solid #C9A84C', background: '#0f0f00' }}
        >
          <span style={{ fontSize: 36 }}>🔒</span>
        </div>

        <p className="font-cinzel text-xs tracking-[4px] mb-3" style={{ color: '#C9A84C' }}>
          {p.label}
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-white mb-4">
          {name}, {p.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: '#888' }}>
          {p.description}
          <br /><br />
          {p.description2}
        </p>

        <div
          className="rounded-2xl p-6 mb-6 text-left"
          style={{ border: '1px solid #C9A84C44', background: '#0f0d00' }}
        >
          <p className="font-cinzel text-xs tracking-[2px] mb-4" style={{ color: '#C9A84C' }}>
            {p.included}
          </p>
          {p.items.map(item => (
            <div key={item} className="flex items-start gap-2 mb-3 text-sm" style={{ color: '#ccc' }}>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button className="btn-gold w-full py-4 rounded-full text-sm mb-3">
          {p.cta}
        </button>
        <button
          onClick={onSkip}
          className="text-xs underline"
          style={{ color: '#444', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {p.skip}
        </button>
      </div>
    </div>
  )
}
