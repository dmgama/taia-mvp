export default function Paywall({ name, onUnlock, onSkip }) {
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
          RELATÓRIO COMPLETO
        </p>
        <h2 className="font-cinzel text-3xl font-bold text-white mb-4">
          {name}, seu diagnóstico<br />está pronto.
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: '#888' }}>
          Você completou as 7 fases. Seu score, gráfico radar, pontos críticos e mensagem personalizada estão prontos.
          <br /><br />
          O relatório completo revela exatamente o que você precisa fazer para subir de nível.
        </p>

        <div
          className="rounded-2xl p-6 mb-6 text-left"
          style={{ border: '1px solid #C9A84C44', background: '#0f0d00' }}
        >
          <p className="font-cinzel text-xs tracking-[2px] mb-4" style={{ color: '#C9A84C' }}>
            O QUE ESTÁ INCLUÍDO
          </p>
          {[
            '🔱 Score geral + classificação completa',
            '📊 Gráfico radar das 7 áreas',
            '🎯 Top 3 pontos críticos identificados',
            '💬 Mensagem personalizada com IA',
            '📋 Plano de ação para os próximos 90 dias',
          ].map(item => (
            <div key={item} className="flex items-start gap-2 mb-3 text-sm" style={{ color: '#ccc' }}>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button className="btn-gold w-full py-4 rounded-full text-sm mb-3">
          DESBLOQUEAR RELATÓRIO — R$97
        </button>
        <button
          onClick={onSkip}
          className="text-xs underline"
          style={{ color: '#444', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Ver prévia gratuita →
        </button>
      </div>
    </div>
  )
}
