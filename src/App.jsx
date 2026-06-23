import { useState } from 'react'
import Intro from './components/Intro'
import NameStep from './components/NameStep'
import PhaseStep from './components/PhaseStep'
import Paywall from './components/Paywall'
import Result from './components/Result'
import { PHASES } from './data/phases'

const STEPS = {
  INTRO: 'intro',
  NAME: 'name',
  PHASE: 'phase',
  PAYWALL: 'paywall',
  RESULT: 'result',
}

export default function App() {
  const [step, setStep] = useState(STEPS.INTRO)
  const [name, setName] = useState('')
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleStart = () => setStep(STEPS.NAME)

  const handleName = (n) => {
    setName(n)
    setStep(STEPS.PHASE)
    setPhaseIndex(0)
  }

  const handlePhaseNext = (phaseAnswers) => {
    const merged = { ...answers, ...phaseAnswers }
    setAnswers(merged)
    if (phaseIndex < PHASES.length - 1) {
      setPhaseIndex(phaseIndex + 1)
    } else {
      setStep(STEPS.PAYWALL)
    }
  }

  const handlePhaseBack = () => {
    if (phaseIndex === 0) setStep(STEPS.NAME)
    else setPhaseIndex(phaseIndex - 1)
  }

  const handleRestart = () => {
    setStep(STEPS.INTRO)
    setName('')
    setPhaseIndex(0)
    setAnswers({})
  }

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {step === STEPS.INTRO   && <Intro onStart={handleStart} />}
      {step === STEPS.NAME    && <NameStep onNext={handleName} />}
      {step === STEPS.PHASE   && (
        <PhaseStep
          phaseIndex={phaseIndex}
          answers={answers}
          onNext={handlePhaseNext}
          onBack={handlePhaseBack}
        />
      )}
      {step === STEPS.PAYWALL && (
        <Paywall name={name} onUnlock={() => setStep(STEPS.RESULT)} onSkip={() => setStep(STEPS.RESULT)} />
      )}
      {step === STEPS.RESULT  && (
        <Result name={name} answers={answers} onRestart={handleRestart} />
      )}
    </div>
  )
}
