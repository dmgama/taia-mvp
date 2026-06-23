import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis
} from 'recharts'
import { PHASES, calcPhaseScore, calcTotalScore, getClassification, getTopCritical, getAIMessage } from '../data/phases'

export default function Result({ name, answers, onRestart }) {
  const phaseScores = {}
  PHASES.forEach(p => { phaseScores[p.id] = calcPhaseScore(p, answers) })

  const totalScore = calcTotalScore(phaseScores)
  const classification = getClassification(totalScore)
  const critical = getTopCritical(phaseScores)
  const aiMessage = getAIMessage(classification.label, phaseScores)

  const radarData = PHASES.map(p => ({
    subject: p.label,
    score: phaseScores[p.id],
    fullMark: 100,
  }))

  const scoreColor = classification.color

  return (
    <div className="fade-in min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto w-full">
      {/* Header */}
      <p className="font-cinzel text-xs tracking-[5px] mb-4 text-center" style={{ color: '#C9A84C' }}>
        DIAGNÓSTICO COMPLETO
      </p>
      <h1 className="font-cinzel text-3xl md:text-4xl font-black text-center mb-2 text-white">
        {name},
      </h1>
      <p className="text-center mb-10" style={{ color: '#888' }}>
        aqui está a sua realidade.
      </p>

      {/* Score circle */}
      <div className="relative flex flex-col items-center mb-10">
        <div
          className="w-40 h-40 rounded-full flex flex-col items-center justify-center"
          style={{
            border: `3px solid ${scoreColor}`,
            background: 'radial-gradient(circle, #1a1400 0%, #0a0a0a 100%)',
            boxShadow: `0 0 40px ${scoreColor}33`,
          }}
        >
          <span className="font-cinzel font-black text-5xl" style={{ color: scoreColor }}>
            {totalScore}
          </span>
          <span className="text-xs mt-1" style={{ color: '#666' }}>/ 100</span>
        </div>
        <div className="mt-4 text-center">
          <span
            className="font-cinzel text-xl font-bold px-6 py-2 rounded-full"
            style={{ border: `1px solid ${scoreColor}`, color: scoreColor }}
          >
            {classification.label}
          </span>
          <p className="text-sm mt-2" style={{ color: '#888' }}>{classification.desc}</p>
        </div>
      </div>

      {/* Radar Chart */}
      <div
        className="w-full rounded-2xl p-6 mb-8"
        style={{ border: '1px solid #1e1e1e', background: '#0d0d0d' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4 text-center" style={{ color: '#C9A84C' }}>
          MAPA DAS 7 ÁREAS
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#1e1e1e" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: '#888', fontSize: 11, fontFamily: 'Inter' }}
            />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#C9A84C"
              fill="#C9A84C"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Phase scores */}
      <div className="w-full mb-8">
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          SCORE POR ÁREA
        </p>
        <div className="flex flex-col gap-3">
          {PHASES.map(p => (
            <div key={p.id}>
              <div className="flex justify-between text-sm mb-1">
                <span style={{ color: '#ccc' }}>{p.icon} {p.label}</span>
                <span style={{ color: phaseScores[p.id] < 40 ? '#E84C4C' : phaseScores[p.id] < 65 ? '#C9A84C' : '#4CE87A', fontWeight: 700 }}>
                  {phaseScores[p.id]}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ background: '#1a1a1a' }}>
                <div
                  className="h-1.5 rounded-full transition-all duration-700"
                  style={{
                    width: `${phaseScores[p.id]}%`,
                    background: phaseScores[p.id] < 40 ? '#E84C4C' : phaseScores[p.id] < 65 ? '#C9A84C' : '#4CE87A',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 critical */}
      <div
        className="w-full rounded-2xl p-6 mb-8"
        style={{ border: '1px solid #3a0000', background: '#0d0000' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#E84C4C' }}>
          🚨 TOP 3 PONTOS CRÍTICOS
        </p>
        {critical.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3 mb-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center font-cinzel text-xs font-bold flex-shrink-0"
              style={{ background: '#E84C4C22', border: '1px solid #E84C4C', color: '#E84C4C' }}
            >
              {i + 1}
            </div>
            <div>
              <p className="text-white text-sm font-medium">{p.icon} {p.label}</p>
              <p className="text-xs" style={{ color: '#666' }}>Score: {phaseScores[p.id]}/100</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI Message */}
      <div
        className="w-full rounded-2xl p-6 mb-10"
        style={{ border: '1px solid #C9A84C33', background: 'linear-gradient(135deg, #0f0d00, #0a0a0a)' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          🔱 MENSAGEM PARA VOCÊ
        </p>
        {aiMessage.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: '#bbb' }}>
            {para}
          </p>
        ))}
      </div>

      {/* CTA */}
      <div className="w-full text-center">
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          PRÓXIMO PASSO
        </p>
        <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
          Pronto para subir de nível?
        </h3>
        <p className="text-sm mb-8" style={{ color: '#888' }}>
          Entre no programa e transforme seu diagnóstico em resultado real.
        </p>
        <button className="btn-gold w-full py-4 rounded-full text-sm mb-4">
          🔱 QUERO ENTRAR NO PROGRAMA
        </button>
        <button className="btn-outline w-full py-4 rounded-full text-sm mb-8">
          AGENDAR SESSÃO ESTRATÉGICA
        </button>

        <button
          onClick={onRestart}
          className="text-xs"
          style={{ color: '#444', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Refazer diagnóstico
        </button>
      </div>

      <div className="mt-12 text-center">
        <span className="font-cinzel text-xs tracking-[4px]" style={{ color: '#333' }}>
          🔱 TA.IA — TECNOLOGIA APÓS INTELIGÊNCIA ARTIFICIAL
        </span>
      </div>
    </div>
  )
}
