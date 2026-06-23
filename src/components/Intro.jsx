export default function Intro({ onStart }) {
  return (
    <div className="fade-in min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* Emblem */}
      <div className="relative mb-10">
        <div
          className="pulse-gold w-32 h-32 rounded-full flex items-center justify-center mx-auto"
          style={{ border: '2px solid #C9A84C', background: 'radial-gradient(circle, #1a1600 0%, #0a0a0a 100%)' }}
        >
          <span style={{ fontSize: 56 }}>🔱</span>
        </div>
      </div>

      {/* Brand */}
      <p className="font-cinzel text-sm tracking-[6px] mb-3" style={{ color: '#C9A84C' }}>
        TA.IA
      </p>
      <h1
        className="font-cinzel font-black text-4xl md:text-6xl mb-4 leading-tight"
        style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        O JOGO DA<br />VIDA REAL
      </h1>
      <p className="text-lg md:text-xl mb-2" style={{ color: '#999' }}>
        Diagnóstico de Vida com IA
      </p>
      <div className="w-16 h-px mx-auto my-6" style={{ background: '#C9A84C' }} />

      <p className="max-w-md text-base leading-relaxed mb-3" style={{ color: '#aaa' }}>
        7 áreas da sua vida. 30 perguntas. Um relatório que vai te mostrar exatamente onde você está e o que precisa mudar.
      </p>
      <p className="text-sm mb-10" style={{ color: '#666' }}>
        Leva aproximadamente <span style={{ color: '#C9A84C' }}>5 minutos</span>. Seja honesto. Só assim funciona.
      </p>

      {/* Phases preview */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-lg">
        {['💰 Financeiro', '⚡ Saúde', '🤝 Relacionamentos', '🎯 Propósito', '🧠 Mentalidade', '⏳ Liberdade', '🔱 Legado'].map(item => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full"
            style={{ border: '1px solid #C9A84C33', color: '#C9A84C88' }}
          >
            {item}
          </span>
        ))}
      </div>

      <button
        onClick={onStart}
        className="btn-gold text-base px-12 py-4 rounded-full"
      >
        INICIAR DIAGNÓSTICO
      </button>

      <p className="text-xs mt-6" style={{ color: '#444' }}>
        100% gratuito • Sem cadastro necessário
      </p>
    </div>
  )
}
