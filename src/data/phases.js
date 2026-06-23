export const PHASES = [
  {
    id: 'financeiro',
    label: 'Financeiro',
    icon: '💰',
    color: '#C9A84C',
    questions: [
      { id: 'f1', text: 'Como você avalia sua situação financeira atual?', type: 'scale' },
      { id: 'f2', text: 'Você tem reserva de emergência para pelo menos 3 meses?', type: 'choice', options: ['Não tenho reserva', 'Menos de 1 mês', '1 a 3 meses', 'Mais de 3 meses'] },
      { id: 'f3', text: 'Você tem fontes de renda além do seu emprego/negócio principal?', type: 'choice', options: ['Não', 'Estou construindo', 'Sim, 1 fonte extra', 'Sim, múltiplas fontes'] },
      { id: 'f4', text: 'Qual o seu nível de controle sobre suas finanças pessoais?', type: 'scale' },
      { id: 'f5', text: 'Você investe parte do que ganha mensalmente?', type: 'choice', options: ['Nunca', 'Raramente', 'Às vezes', 'Todo mês'] },
    ],
  },
  {
    id: 'saude',
    label: 'Saúde & Energia',
    icon: '⚡',
    color: '#E84C4C',
    questions: [
      { id: 's1', text: 'Como você avalia seu nível de energia ao longo do dia?', type: 'scale' },
      { id: 's2', text: 'Quantas vezes por semana você pratica atividade física?', type: 'choice', options: ['Nunca', '1 a 2 vezes', '3 a 4 vezes', '5 ou mais vezes'] },
      { id: 's3', text: 'Como você avalia a qualidade do seu sono?', type: 'scale' },
      { id: 's4', text: 'Você cuida da sua alimentação de forma consciente?', type: 'choice', options: ['Não me preocupo', 'Raramente', 'Na maioria das vezes', 'Sempre'] },
    ],
  },
  {
    id: 'relacionamentos',
    label: 'Relacionamentos',
    icon: '🤝',
    color: '#4C8CE8',
    questions: [
      { id: 'r1', text: 'Como você avalia a qualidade dos seus relacionamentos pessoais?', type: 'scale' },
      { id: 'r2', text: 'Você sente que tem pessoas que genuinamente torcem por você?', type: 'choice', options: ['Não', 'Pouquíssimas', 'Algumas', 'Muitas'] },
      { id: 'r3', text: 'Como está sua relação com sua família?', type: 'scale' },
      { id: 'r4', text: 'Você investe tempo em construir redes e conexões relevantes?', type: 'choice', options: ['Não', 'Raramente', 'Às vezes', 'Frequentemente'] },
    ],
  },
  {
    id: 'carreira',
    label: 'Carreira & Propósito',
    icon: '🎯',
    color: '#4CE87A',
    questions: [
      { id: 'c1', text: 'O quanto você se sente alinhado com seu propósito de vida?', type: 'scale' },
      { id: 'c2', text: 'Você está satisfeito com sua trajetória profissional atual?', type: 'scale' },
      { id: 'c3', text: 'Você tem clareza sobre onde quer estar em 5 anos?', type: 'choice', options: ['Nenhuma', 'Pouca', 'Razoável', 'Total clareza'] },
      { id: 'c4', text: 'Seu trabalho atual te aproxima ou te afasta dos seus sonhos?', type: 'choice', options: ['Me afasta muito', 'Nem um nem outro', 'Me aproxima um pouco', 'Me aproxima muito'] },
    ],
  },
  {
    id: 'mentalidade',
    label: 'Mentalidade',
    icon: '🧠',
    color: '#A84CE8',
    questions: [
      { id: 'm1', text: 'Como você avalia seu controle emocional em situações difíceis?', type: 'scale' },
      { id: 'm2', text: 'Você investe em seu desenvolvimento pessoal (livros, cursos, mentores)?', type: 'choice', options: ['Nunca', 'Raramente', 'Mensalmente', 'Semanalmente'] },
      { id: 'm3', text: 'Quando você falha, qual é sua reação predominante?', type: 'choice', options: ['Desisto facilmente', 'Fico paralisado', 'Analiso e sigo', 'Uso como combustível'] },
      { id: 'm4', text: 'Você acredita que pode mudar sua realidade através das suas escolhas?', type: 'scale' },
    ],
  },
  {
    id: 'liberdade',
    label: 'Liberdade de Tempo',
    icon: '⏳',
    color: '#E8C94C',
    questions: [
      { id: 'l1', text: 'Você tem controle sobre como usa seu tempo diariamente?', type: 'scale' },
      { id: 'l2', text: 'Quantas horas por semana você dedica ao que realmente importa para você?', type: 'choice', options: ['Menos de 5h', '5 a 10h', '10 a 20h', 'Mais de 20h'] },
      { id: 'l3', text: 'Você consegue tirar férias ou descansar sem culpa?', type: 'choice', options: ['Nunca', 'Raramente', 'Às vezes', 'Sempre'] },
      { id: 'l4', text: 'O quanto sua renda depende da sua presença física/tempo direto?', type: 'choice', options: ['100% depende', 'Muito dependente', 'Parcialmente', 'Tenho renda passiva'] },
    ],
  },
  {
    id: 'legado',
    label: 'Legado',
    icon: '🔱',
    color: '#C9A84C',
    questions: [
      { id: 'le1', text: 'Você tem clareza sobre o legado que quer deixar?', type: 'scale' },
      { id: 'le2', text: 'Suas ações diárias estão alinhadas com o impacto que quer causar no mundo?', type: 'scale' },
      { id: 'le3', text: 'Você está construindo algo que continuará existindo além de você?', type: 'choice', options: ['Não pensei nisso', 'Estou começando a pensar', 'Tenho um plano', 'Já estou construindo'] },
      { id: 'le4', text: 'Você se sente parte de algo maior do que você mesmo?', type: 'choice', options: ['Não', 'Às vezes', 'Frequentemente', 'Sempre'] },
    ],
  },
]

export const WEIGHTS = {
  financeiro: 0.20,
  saude: 0.15,
  relacionamentos: 0.12,
  carreira: 0.18,
  mentalidade: 0.15,
  liberdade: 0.10,
  legado: 0.10,
}

export function calcPhaseScore(phase, answers) {
  const questions = phase.questions
  let total = 0
  let count = 0

  questions.forEach(q => {
    const val = answers[q.id]
    if (val === undefined || val === null) return
    if (q.type === 'scale') {
      total += (val / 10) * 100
    } else {
      const idx = q.options.indexOf(val)
      total += (idx / (q.options.length - 1)) * 100
    }
    count++
  })

  return count > 0 ? Math.round(total / count) : 0
}

export function calcTotalScore(phaseScores) {
  let total = 0
  Object.entries(WEIGHTS).forEach(([key, w]) => {
    total += (phaseScores[key] || 0) * w
  })
  return Math.round(total)
}

export function getClassification(score) {
  if (score < 30) return { label: 'Iniciante', color: '#888', desc: 'O jogo acabou de começar para você.' }
  if (score < 55) return { label: 'Em Jogo', color: '#C9A84C', desc: 'Você está no campo. Hora de acelerar.' }
  if (score < 78) return { label: 'Avançado', color: '#E8C97A', desc: 'Você já sabe jogar. Hora de dominar.' }
  return { label: 'Mestre', color: '#fff', desc: 'Você joga em outro nível. Hora de liderar.' }
}

export function getTopCritical(phaseScores) {
  return Object.entries(phaseScores)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([key]) => PHASES.find(p => p.id === key))
}

export function getAIMessage(classification, phaseScores) {
  const critical = getTopCritical(phaseScores).map(p => p.label).join(', ')

  const messages = {
    Iniciante: `Você teve coragem de olhar para a sua realidade. Isso já te coloca à frente de 90% das pessoas que nunca param para fazer esse diagnóstico.\n\nSuas áreas mais críticas agora são: ${critical}.\n\nA boa notícia? Quem começa do zero tem o maior potencial de transformação. Você não está atrasado — você está no ponto exato de onde sua história começa a virar.\n\nO próximo passo não é fazer tudo de uma vez. É escolher uma área e atacar com tudo.`,

    'Em Jogo': `Você já acordou. Já começou. Já tem movimento.\n\nMas existe uma diferença entre estar em jogo e ganhar o jogo.\n\nSuas maiores oportunidades de salto estão em: ${critical}.\n\nEssas áreas não são fraquezas — são alavancas. Quando você as desenvolve, tudo o que você já construiu multiplica.\n\nVocê está no momento mais perigoso da jornada: bom o suficiente para não sentir urgência, mas longe demais de onde poderia estar.`,

    Avançado: `Você está entre os poucos que realmente jogam.\n\nMas quem chega aqui sabe que o maior inimigo não é mais a ignorância — é o conforto.\n\nAs áreas que ainda te prendem são: ${critical}.\n\nA pergunta não é mais "como eu começo?" A pergunta agora é: "Como eu me torno impossível de ignorar?"\n\nVocê tem a base. Falta o sistema. Falta a comunidade. Falta o próximo nível.`,

    Mestre: `Você joga em outro nível.\n\nE isso vem com uma responsabilidade que a maioria nunca vai entender: quando você chega aqui, seu crescimento deixa de ser sobre você.\n\nMesmo nos seus pontos mais fortes, existe espaço em: ${critical}.\n\nA sua missão agora é construir algo que dure além de você. Não um negócio. Uma herança.\n\nVocê foi convocado para ser o exemplo que sua família, sua comunidade e sua geração precisam.`,
  }

  return messages[classification] || messages['Em Jogo']
}
