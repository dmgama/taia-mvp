import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis
} from 'recharts'
import { useLang } from '../i18n/LangContext'
import { calcPhaseScore, calcTotalScore } from '../data/phases'

export default function Result({ name, answers, onRestart }) {
  const { t } = useLang()
  const r = t.result
  const phases = t.phases

  const phaseScores = {}
  phases.forEach(p => { phaseScores[p.id] = calcPhaseScore(p, answers) })

  const totalScore = calcTotalScore(phaseScores)

  let classKey = 'Iniciante'
  if (totalScore >= 78) classKey = 'Mestre'
  else if (totalScore >= 55) classKey = 'Avançado'
  else if (totalScore >= 30) classKey = 'Em Jogo'

  const classification = t.classifications[classKey]
  const scoreColor = totalScore >= 78 ? '#fff' : totalScore >= 55 ? '#E8C97A' : totalScore >= 30 ? '#C9A84C' : '#888'

  const critical = Object.entries(phaseScores)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([key]) => phases.find(p => p.id === key))

  const criticalNames = critical.map(p => p.label).join(', ')
  const aiMessage = t.ai_messages[classKey](criticalNames)

  const radarData = phases.map(p => ({
    subject: p.label,
    score: phaseScores[p.id],
    fullMark: 100,
  }))

  return (
    <div className="fade-in min-h-screen flex flex-col items-center px-4 py-12 max-w-2xl mx-auto w-full">
      <p className="font-cinzel text-xs tracking-[5px] mb-4 text-center" style={{ color: '#C9A84C' }}>
        {r.label}
      </p>
      <h1 className="font-cinzel text-3xl md:text-4xl font-black text-center mb-2 text-white">
        {name},
      </h1>
      <p className="text-center mb-10" style={{ color: '#888' }}>
        {r.subtitle}
      </p>

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

      <div
        className="w-full rounded-2xl p-6 mb-8"
        style={{ border: '1px solid #1e1e1e', background: '#0d0d0d' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4 text-center" style={{ color: '#C9A84C' }}>
          {r.map}
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

      <div className="w-full mb-8">
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          {r.score_label}
        </p>
        <div className="flex flex-col gap-3">
          {phases.map(p => (
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

      <div
        className="w-full rounded-2xl p-6 mb-8"
        style={{ border: '1px solid #3a0000', background: '#0d0000' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#E84C4C' }}>
          {r.critical_label}
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
              <p className="text-xs" style={{ color: '#666' }}>{r.critical_score}: {phaseScores[p.id]}/100</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full rounded-2xl p-6 mb-10"
        style={{ border: '1px solid #C9A84C33', background: 'linear-gradient(135deg, #0f0d00, #0a0a0a)' }}
      >
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          {r.message_label}
        </p>
        {aiMessage.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: '#bbb' }}>
            {para}
          </p>
        ))}
      </div>

      <div className="w-full text-center">
        <p className="font-cinzel text-xs tracking-[3px] mb-4" style={{ color: '#C9A84C' }}>
          {r.next_label}
        </p>
        <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
          {r.next_title}
        </h3>
        <p className="text-sm mb-8" style={{ color: '#888' }}>
          {r.next_desc}
        </p>
        <button className="btn-gold w-full py-4 rounded-full text-sm mb-4">
          {r.cta1}
        </button>
        <button className="btn-outline w-full py-4 rounded-full text-sm mb-8">
          {r.cta2}
        </button>

        <button
          onClick={onRestart}
          className="text-xs"
          style={{ color: '#444', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {r.restart}
        </button>
      </div>

      <div className="mt-12 text-center">
        <span className="font-cinzel text-xs tracking-[4px]" style={{ color: '#333' }}>
          {r.footer}
        </span>
      </div>
    </div>
  )
}
