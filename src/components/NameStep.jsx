import { useState } from 'react'

export default function NameStep({ onNext }) {
  const [name, setName] = useState('')

  return (
    <div className="fade-in min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <p className="font-cinzel text-xs tracking-[4px] mb-8 text-center" style={{ color: '#C9A84C' }}>
          ANTES DE COMEÇAR
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-center mb-2 text-white">
          Qual é o seu nome?
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: '#666' }}>
          Seu relatório será personalizado para você.
        </p>

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && name.trim() && onNext(name.trim())}
          placeholder="Digite seu nome..."
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
          CONTINUAR
        </button>
      </div>
    </div>
  )
}
