import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function PhaseStep({ phaseIndex, answers, onNext, onBack }) {
  const { t } = useLang()
  const ph = t.phase
  const phases = t.phases
  const phase = phases[phaseIndex]
  const [localAnswers, setLocalAnswers] = useState({ ...answers })

  const allAnswered = phase.questions.every(q => localAnswers[q.id] !== undefined && localAnswers[q.id] !== null)
  const setAnswer = (id, val) => setLocalAnswers(prev => ({ ...prev, [id]: val }))
  const progress = phase.questions.filter(q => localAnswers[q.id] !== undefined).length / phase.questions.length

  return (
    <div className="fade-in min-h-screen flex flex-col px-4 py-10 max-w-xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="text-sm btn-outline px-4 py-2 rounded-full" style={{ fontSize: 12 }}>
          {ph.back}
        </button>
        <div className="flex gap-2">
          {phases.map((p, i) => (
            <div
              key={p.id}
              className="rounded-full transition-all"
              style={{
                width: i === phaseIndex ? 24 : 8,
                height: 8,
                background: i < phaseIndex ? '#C9A84C66' : i === phaseIndex ? '#C9A84C' : '#333',
              }}
            />
          ))}
        </div>
        <span className="text-xs" style={{ color: '#555' }}>{phaseIndex + 1}/7</span>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span style={{ fontSize: 32 }}>{phase.icon}</span>
          <div>
            <p className="font-cinzel text-xs tracking-[3px]" style={{ color: phase.color }}>
              {ph.phase} {phaseIndex + 1}
            </p>
            <h2 className="font-cinzel text-2xl font-bold text-white">{phase.label}</h2>
          </div>
        </div>
        <div className="w-full h-1 rounded-full" style={{ background: '#222' }}>
          <div
            className="h-1 rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%`, background: phase.color }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 flex-1">
        {phase.questions.map((q, qi) => (
          <div key={q.id} className="fade-in">
            <p className="text-base font-medium mb-4 leading-relaxed" style={{ color: localAnswers[q.id] !== undefined ? '#fff' : '#ccc' }}>
              <span style={{ color: phase.color, marginRight: 8, fontFamily: 'Cinzel, serif', fontSize: 12 }}>{qi + 1}.</span>
              {q.text}
            </p>

            {q.type === 'scale' ? (
              <div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={localAnswers[q.id] ?? 5}
                  onChange={e => setAnswer(q.id, Number(e.target.value))}
                  onMouseDown={() => { if (localAnswers[q.id] === undefined) setAnswer(q.id, 5) }}
                  onTouchStart={() => { if (localAnswers[q.id] === undefined) setAnswer(q.id, 5) }}
                />
                <div className="flex justify-between text-xs mt-2" style={{ color: '#555' }}>
                  <span>{ph.scale_min}</span>
                  <span style={{ color: phase.color, fontWeight: 700, fontSize: 16 }}>
                    {localAnswers[q.id] ?? '—'}
                  </span>
                  <span>{ph.scale_max}</span>
                </div>
              </div>
            ) : (
              <div className="grid gap-2">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => setAnswer(q.id, opt)}
                    className="text-left px-4 py-3 rounded-lg text-sm transition-all"
                    style={{
                      background: localAnswers[q.id] === opt ? `${phase.color}22` : '#111',
                      border: `1px solid ${localAnswers[q.id] === opt ? phase.color : '#2a2a2a'}`,
                      color: localAnswers[q.id] === opt ? '#fff' : '#888',
                    }}
                  >
                    <span
                      className="inline-block w-5 h-5 rounded-full mr-3 text-center text-xs leading-5"
                      style={{
                        background: localAnswers[q.id] === opt ? phase.color : '#222',
                        color: localAnswers[q.id] === opt ? '#000' : '#555',
                      }}
                    >
                      {oi + 1}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => allAnswered && onNext(localAnswers)}
          className="btn-gold w-full py-4 rounded-full text-sm"
          style={{ opacity: allAnswered ? 1 : 0.35 }}
          disabled={!allAnswered}
        >
          {phaseIndex < phases.length - 1 ? `${ph.next}: ${phases[phaseIndex + 1].label.toUpperCase()}` : ph.finish}
        </button>
        {!allAnswered && (
          <p className="text-center text-xs mt-3" style={{ color: '#555' }}>
            {ph.answer_all}
          </p>
        )}
      </div>
    </div>
  )
}
