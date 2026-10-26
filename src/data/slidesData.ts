export interface SlideItem {
  id: string;
  number: number;
  section: string;
  category: string;
  title: string;
  subtitle: string;
  academicRef?: string;
  threeMode: 'hero' | 'void' | 'noetic' | 'triad' | 'flow' | 'reframing' | 'synthesis' | 'leadership';
  executiveSummary: string;
  fullContentParagraphs?: string[];
  keyPoints: {
    title: string;
    description: string;
    badge?: string;
    icon?: string;
    accentColor?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose';
  }[];
  strategicQuote?: {
    text: string;
    author: string;
    role?: string;
  };
  speakerNotes: {
    duration: string;
    objective: string;
    talkingPoints: string[];
    executiveInsight: string;
    potentialQuestion: {
      question: string;
      answer: string;
    };
  };
  visualType?: 'hero' | 'paradox' | 'pillars' | 'noetic-layers' | 'happiness-triad' | 'perma-comparison' | 'flow-interactive' | 'mapping-interactive' | 'reframing-matrix' | 'synthesis-quadrant' | 'leadership-playbook' | 'conclusion-vision' | 'academic-references';
}

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 'slide-01',
    number: 1,
    section: 'Abertura Oficial',
    category: 'MBA EXECUTIVO • UNIP',
    title: 'Vazio Existencial & Falta de Sentido na Contemporaneidade',
    subtitle: 'Uma Reflexão à Luz da Logoterapia e da Psicologia Positiva',
    academicRef: 'UNIP – Universidade Paulista • MBA Psicologia Positiva & Inteligência Emocional',
    threeMode: 'hero',
    visualType: 'hero',
    executiveSummary: 'Trabalho de Conclusão de Módulo articulando a neurociência, a Logoterapia de Viktor Frankl e a Psicologia Positiva de Martin Seligman na superação do desengajamento e do vazio existencial contemporâneo.',
    fullContentParagraphs: [
      'A sociedade contemporânea oferece inúmeras possibilidades de escolha, acesso à informação, desenvolvimento profissional e consumo.',
      'Apesar disso, muitas pessoas relatam sentir um vazio interior, mesmo quando aparentemente possuem tudo o que é necessário para viver bem.',
      'Este trabalho investiga por que, em meio a tantas possibilidades, ainda é tão comum encontrar pessoas que não sabem o que realmente desejam para suas vidas ou qual é o sentido daquilo que fazem.'
    ],
    keyPoints: [
      {
        title: 'Instituição & Curso',
        description: 'UNIP – Universidade Paulista | MBA Psicologia Positiva e Inteligência Emocional',
        badge: 'UNIVERSIDADE PAULISTA',
        accentColor: 'cyan'
      },
      {
        title: 'Orientação Acadêmica',
        description: 'Professora Especialista Flávia Vasconcelos',
        badge: 'ORIENTAÇÃO',
        accentColor: 'purple'
      },
      {
        title: 'Autores do Trabalho',
        description: 'Fabiana Cavassan Nogueira • Rodrigo Muniz Tognareli • Viviane Tasso',
        badge: 'DISCENTES',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'Quem tem um porquê para viver pode suportar quase qualquer como.',
      author: 'Viktor Emil Frankl',
      role: 'Neurologista, Psiquiatra e Fundador da Logoterapia'
    },
    speakerNotes: {
      duration: '2 minutos',
      objective: 'Estabelecer autoridade, contextualizar a relevância executiva do tema e saudar a banca e a professora Flávia Vasconcelos.',
      talkingPoints: [
        'Cumprimentar formalmente a Professora Flávia Vasconcelos e colegas de MBA.',
        'Apresentar o escopo do projeto: união entre rigor acadêmico e visão estratégica de liderança e inteligência emocional.',
        'Enfatizar que o vazio existencial não é fraqueza individual, mas um fenômeno ontológico e cultural da nossa era.'
      ],
      executiveInsight: 'Na gestão estratégica moderna, o principal fator de retenção de talentos e produtividade sustentável não é a remuneração isolada, mas a arquitetura de sentido e propósito das organizações.',
      potentialQuestion: {
        question: 'Por que conectar Logoterapia e Psicologia Positiva em um trabalho de MBA em Gestão e Inteligência Emocional?',
        answer: 'Porque a Logoterapia provê o diagnóstico de profundidade e a ética da responsabilidade (o porquê), enquanto a Psicologia Positiva oferece metodologias empíricas e mensuráveis de florescimento e engajamento (o como).'
      }
    }
  },
  {
    id: 'slide-02',
    number: 2,
    section: 'Capítulo 1 • Introdução',
    category: 'O PARADOXO DA CONTEMPORANEIDADE',
    title: 'A Sociedade do Excesso e o Vácuo Interior',
    subtitle: 'Por que a abundância de dados, escolhas e consumo gera afastamento de si mesmo?',
    academicRef: 'Frankl (2008) • Seligman (2004)',
    threeMode: 'void',
    visualType: 'paradox',
    executiveSummary: 'A busca constante por resultados, reconhecimento, produtividade e aprovação social faz com que o indivíduo se concentre tanto nas expectativas externas que acaba se afastando de suas necessidades emocionais, de seus valores e de seus propósitos.',
    fullContentParagraphs: [
      'A sociedade contemporânea oferece inúmeras possibilidades de escolha, acesso à informação, desenvolvimento profissional e consumo. Apesar disso, muitas pessoas relatam sentir um vazio interior, mesmo quando aparentemente possuem tudo o que é necessário para viver bem.',
      'As redes sociais favorecem comparações e podem criar a impressão de que todos estão vivendo experiências extraordinárias, alcançando objetivos e sendo felizes. Nesse cenário, algumas pessoas passam a medir o próprio valor pelas conquistas, pela aparência ou pela opinião dos outros.',
      'O vazio existencial está relacionado à sensação de que a vida perdeu o significado ou de que falta algo importante, mesmo quando não é possível identificar exatamente o que está faltando.'
    ],
    keyPoints: [
      {
        title: 'Paradoxo das Infinitas Escolhas',
        description: 'Multiplicidade sem precedentes de carreiras e caminhos que, sem bússola interior, gera paralisia, ansiedade crônica e sensação de desorientação.',
        badge: 'HIPERESCOLHA',
        accentColor: 'cyan'
      },
      {
        title: 'Tirania da Comparação Digital',
        description: 'Redes sociais promovendo vidas perfeitamente editadas; o indivíduo passa a medir seu valor pela aparência e aprovação externa, esvaziando necessidades emocionais reais.',
        badge: 'APROVAÇÃO EXTERNA',
        accentColor: 'rose'
      },
      {
        title: 'Afastamento dos Valores Próprios',
        description: 'Foco exclusivo em resultados visíveis e produtividade ininterrupta, relegando o autoconhecimento e o propósito pessoal a segundo plano.',
        badge: 'ALIENAÇÃO DE SI',
        accentColor: 'amber'
      }
    ],
    strategicQuote: {
      text: 'O ser humano moderno possui todos os meios materiais para viver, mas frequentemente nenhuma razão pela qual viver.',
      author: 'Viktor Frankl',
      role: 'Em Busca de Sentido'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Demonstrar o paradoxo de vivermos na era com maior abundância material e, simultaneamente, com maior crise de significado.',
      talkingPoints: [
        'Destacar que ter opções não equivale a ter discernimento ou sentido.',
        'Explorar o impacto do feed digital algorítmico, que estimula comparação ininterrupta.',
        'Explicar que muitas lideranças e executivos acumulam vitórias corporativas com uma sensação oculta de futilidade.'
      ],
      executiveInsight: 'A liderança estratégica que ignora o vazio existencial da equipe enfrenta turnover silencioso e desengajamento passivo (quiet quitting).',
      potentialQuestion: {
        question: 'O vazio existencial afeta mais os profissionais de alta performance ou os iniciantes?',
        answer: 'Afeta especialmente profissionais de alta performance que alcançaram o ápice das metas materiais e descobrem que a chegada não trouxe a plenitude prometida.'
      }
    }
  },
  {
    id: 'slide-03',
    number: 3,
    section: 'Capítulo 2 • Diagnóstico',
    category: 'ANATOMIA DO VAZIO',
    title: 'O Vazio Existencial: Piloto Automático & Fuga do Silêncio',
    subtitle: 'Compreendendo o preenchimento compulsivo e a frustração da vontade de sentido',
    academicRef: 'Pereira (2007) • Frankl (2008)',
    threeMode: 'void',
    visualType: 'pillars',
    executiveSummary: 'A pessoa cumpre suas obrigações, trabalha, cuida da família e alcança objetivos, mas ainda sente que suas atividades não possuem um significado verdadeiro. Surge a impressão de viver no automático das expectativas alheias.',
    fullContentParagraphs: [
      'Existe uma valorização muito grande dos resultados visíveis, enquanto aspectos como autoconhecimento, equilíbrio emocional, relações significativas e satisfação interior nem sempre recebem a mesma atenção.',
      'Outro fator importante é a dificuldade de lidar com o silêncio e com os momentos em que não estamos ocupados. Muitas pessoas procuram preencher qualquer espaço vazio com atividades, compras, entretenimento ou uso excessivo das redes sociais.',
      'Nem toda tristeza, insatisfação ou fase de incerteza representa um vazio existencial. Esses sentimentos também fazem parte da experiência humana. A questão central está em perceber quando a falta de sentido se torna persistente.'
    ],
    keyPoints: [
      {
        title: 'Vida no Piloto Automático',
        description: 'Repetição mecânica de rotinas sociais e corporativas escolhidas mais pelas expectativas de chefes, familiares ou sociedade do que pela própria vontade consciente.',
        badge: 'AUTOMATISMO',
        accentColor: 'purple'
      },
      {
        title: 'Horror ao Silêncio (Horror Vacui)',
        description: 'Dificuldade de lidar com a quietude; tentativa compulsiva de tamponar qualquer instante ocioso com consumo, compras, entretenimento ou dopamina digital.',
        badge: 'ANESTÉSICOS MODERNOS',
        accentColor: 'rose'
      },
      {
        title: 'Tristeza Transitória vs. Vazio Existencial',
        description: 'Diferenciação clínica: a tristeza e a incerteza são respostas humanas normais; o vazio existencial é a frustração crônica e persistente da vontade de sentido.',
        badge: 'FRUSTRAÇÃO DO SENTIDO',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'O ser humano não busca apenas prazer ou sucesso, mas precisa encontrar razões para viver. Quando essa necessidade não é atendida, surge o vazio.',
      author: 'Ivo Studart Pereira',
      role: 'Psicologia USP (2007)'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Diferenciar clinicamente tristeza circunstancial de vazio existencial crônico e alertar sobre as armadilhas anestésicas.',
      talkingPoints: [
        'Ressaltar o conceito de Horror Vacui: a incapacidade de suportar 5 minutos sem estímulo dopaminérgico.',
        'Demonstrar que o consumismo atua como analgésico de curto prazo para uma dor ontológica de longo prazo.',
        'Destacar a importância do silêncio como espaço fértil para a autoescuta e a reflexão noética.'
      ],
      executiveInsight: 'Executivos ocupados confundem hiperatividade com eficácia. Estar ocupado o tempo todo é muitas vezes uma fuga de perguntas difíceis sobre propósito.',
      potentialQuestion: {
        question: 'Como um líder pode identificar se sua equipe está em vazio existencial ou apenas sobrecarregada?',
        answer: 'A sobrecarga física responde ao descanso; o vazio existencial persiste mesmo após férias luxuosas, pois é uma crise de razão de ser, não de energia calórica.'
      }
    }
  },
  {
    id: 'slide-04',
    number: 4,
    section: 'Capítulo 3 • Base Teórica',
    category: 'LOGOTERAPIA & FRANKL',
    title: 'A Logoterapia e os 3 Princípios do Sentido da Vida',
    subtitle: 'Viktor Frankl e a autotranscendência: o que a vida está nos pedindo a cada situação?',
    academicRef: 'Frankl, Viktor E. (2008)',
    threeMode: 'triad',
    visualType: 'pillars',
    executiveSummary: 'A busca por sentido é uma das principais motivações humanas. Não existe uma única resposta abstrata para a vida: o sentido é concreto, dinâmico e se revela na autotranscendência.',
    fullContentParagraphs: [
      'A Logoterapia foi desenvolvida por Viktor Emil Frankl e tem como princípio central a compreensão de que a busca por sentido é uma das principais motivações humanas. O sentido não é igual para todas as pessoas: para algumas está na família, no trabalho, no aprendizado, na espiritualidade ou na contribuição social.',
      'A Logoterapia apresenta três princípios fundamentais: a Liberdade da Vontade, a Vontade de Sentido e o Sentido da Vida.',
      'Frankl destaca que o sentido não é encontrado apenas olhando para dentro de si, mas frequentemente ao se voltar para algo ou alguém que ultrapassa os próprios interesses (autotranscendência). Substitui a pergunta "O que eu espero da vida?" por "O que a vida está me pedindo nesta situação?".'
    ],
    keyPoints: [
      {
        title: '1. Liberdade da Vontade',
        description: 'A possibilidade inalienável de assumir uma atitude consciente diante dos fatos. Não controlamos tudo o que acontece, mas governamos como respondemos aos acontecimentos.',
        badge: 'LIVRE-ARBÍTRIO',
        accentColor: 'cyan'
      },
      {
        title: '2. Vontade de Sentido',
        description: 'A pulsão humana mais profunda por um significado. Quando frustrada, surge o desamparo existencial, mesmo cercado por conforto material ou prestígio social.',
        badge: 'MOTIVAÇÃO PRIMÁRIA',
        accentColor: 'purple'
      },
      {
        title: '3. Sentido da Vida & Autotranscendência',
        description: 'O sentido está nas pequenas atitudes cotidianas, nos cuidados com outras pessoas e na contribuição ao mundo. "O que a vida está me pedindo nesta situação?".',
        badge: 'ALTERIDADE & AÇÃO',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'A Logoterapia nos convida a substituir a pergunta "O que eu espero da vida?" por uma reflexão complementar: "O que a vida está me pedindo nesta situação?".',
      author: 'Viktor Frankl',
      role: 'Em Busca de Sentido (2008)'
    },
    speakerNotes: {
      duration: '4 minutos',
      objective: 'Apresentar a tríade fundacional da Logoterapia com profundidade e rigor conceitual.',
      talkingPoints: [
        'Explicar que Frankl testou suas teses nas condições mais brutais da história humana (campos de concentração).',
        'Demonstrar que a liberdade da vontade não é onipotência sobre o mundo exterior, mas soberania sobre a resposta interior.',
        'Inverter a pergunta existencial: em vez de "O que espero da vida?", perguntar "O que esta situação concreta exige de mim?".'
      ],
      executiveInsight: 'Na gestão estratégica, a autotranscendência se traduz em cultura centrada no valor gerado para o cliente e para a comunidade, superando o ego corporativo.',
      potentialQuestion: {
        question: 'O sentido da vida é imutável segundo Frankl?',
        answer: 'Não. Frankl é enfático: o sentido é dinâmico e contextual. Muda a cada momento, conforme as demandas reais e irrepetíveis da situação vivida.'
      }
    }
  },
  {
    id: 'slide-05',
    number: 5,
    section: 'Capítulo 4 • Antropologia Noética',
    category: 'DIMENSÃO NOÉTICA',
    title: 'A Dimensão Noética e a Liberdade Interior de Escolha',
    subtitle: 'Compreendendo o ser humano além das condições físicas, emocionais e psicológicas',
    academicRef: 'Frankl (2008) • Pereira (2007)',
    threeMode: 'noetic',
    visualType: 'noetic-layers',
    executiveSummary: 'Na visão de Frankl, o ser humano possui uma dimensão especificamente humana: a Dimensão Noética (espiritual laica), onde residem a consciência, a liberdade interior, a responsabilidade, os valores e a busca de sentido.',
    fullContentParagraphs: [
      'A palavra "espiritual", no contexto da Logoterapia, não está relacionada exclusivamente à religião. Ela se refere a uma dimensão da existência que permite refletir sobre a própria vida, reconhecer valores e tomar decisões conscientes.',
      'A dimensão noética ajuda a compreender que uma pessoa não é definida somente por suas dificuldades, emoções ou experiências passadas. Mesmo diante de limitações, ela pode desenvolver a capacidade de refletir sobre suas atitudes e buscar respostas coerentes com aquilo que considera importante.',
      'Na contemporaneidade, desenvolver a dimensão noética significa ampliar a consciência sobre quem somos, o que consideramos importante e quais atitudes desejamos assumir diante da vida.'
    ],
    keyPoints: [
      {
        title: 'Dimensão Somática (Biológica)',
        description: 'Corpo, genética, impulsos físicos, neuroquímica e vulnerabilidade biológica. Sujeita a limitações materiais inevitáveis.',
        badge: 'FISIOLOGIA & CORPO',
        accentColor: 'rose'
      },
      {
        title: 'Dimensão Psíquica (Emocional)',
        description: 'Humores, temperamento, medos, traumas e condicionamentos sociais. É a esfera psicológica que sofre influências ambientais.',
        badge: 'MENTE & AFETO',
        accentColor: 'amber'
      },
      {
        title: 'Dimensão Noética (Espiritual Laica)',
        description: 'O especificamente humano: consciência ética, autodistanciamento, liberdade interior, responsabilidade e capacidade de dizer sim ou não.',
        badge: 'NÚCLEO DA LIBERDADE',
        accentColor: 'cyan'
      }
    ],
    strategicQuote: {
      text: 'O ser humano não é definido somente por suas dificuldades ou experiências passadas; na dimensão noética reside o espaço da atitude consciente.',
      author: 'Viktor Frankl',
      role: 'Fundamentos da Logoterapia'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Esclarecer o conceito técnico de "noético" (espiritual laico) para evitar confusão com religiosidade.',
      talkingPoints: [
        'Reforçar que o noético é a dimensão do autodistanciamento: a capacidade de olhar para os próprios medos sem ser dominado por eles.',
        'Explicar que uma pessoa pode estar fisicamente enferma e psicologicamente deprimida, mas noeticamente íntegra e livre para escolher sua postura.',
        'Destacar o papel da responsabilidade como o reverso indissociável da liberdade.'
      ],
      executiveInsight: 'A liderança madura opera na dimensão noética: não reage visceralmente ao estresse de mercado, mas delibera com base em valores inegociáveis.',
      potentialQuestion: {
        question: 'Qual a diferença entre a dimensão noética e as funções cognitivas da psicologia tradicional?',
        answer: 'A cognição processa informações; a dimensão noética julga o valor ético e o sentido dessas informações perante a existência e os outros.'
      }
    }
  },
  {
    id: 'slide-06',
    number: 6,
    section: 'Capítulo 5 • Bem-Estar Científico',
    category: 'PSICOLOGIA POSITIVA',
    title: 'A Psicologia Positiva e a Tríade da Felicidade Autêntica',
    subtitle: 'Martin Seligman: Vida Agradável, Vida Engajada e Vida Significativa',
    academicRef: 'Seligman, Martin E. P. (2004)',
    threeMode: 'triad',
    visualType: 'happiness-triad',
    executiveSummary: 'A Psicologia Positiva não propõe ignorar o sofrimento nem dita felicidade o tempo todo, mas estuda os recursos que ajudam a viver melhor. Uma vida satisfatória não depende apenas de prazer passageiro ou resultados materiais.',
    fullContentParagraphs: [
      'A Psicologia Positiva, difundida por Martin Seligman, investiga aspectos que contribuem para o bem-estar: emoções positivas, forças pessoais, relacionamentos, realização e sentido.',
      'Em "Felicidade Autêntica" (2004), Seligman apresenta três caminhos: a Vida Agradável (emoções positivas e apreciação da alegria, gratidão e tranquilidade); a Vida Engajada (uso das capacidades e forças pessoais em atividades com concentração); e a Vida Significativa (conexão com algo que ultrapassa os interesses individuais imediatos).',
      'Uma pessoa pode ter prazer e muitas conquistas, mas ainda sentir falta de sentido. Da mesma forma, pode realizar atividades difíceis sem deixar de reconhecer o valor do que constrói.'
    ],
    keyPoints: [
      {
        title: '1. A Vida Agradável (Pleasant Life)',
        description: 'Capacidade de saborear emoções positivas: alegria, gratidão, tranquilidade, convivência com pessoas queridas e contato com a natureza. Risco: adaptação hedônica rápida.',
        badge: 'EMOÇÕES POSITIVAS',
        accentColor: 'amber'
      },
      {
        title: '2. A Vida Engajada (Engaged Life)',
        description: 'Uso das capacidades e forças pessoais em atividades que despertam foco, concentração e maestria. A pessoa participa ativamente de experiências que exigem suas virtudes.',
        badge: 'FORÇAS & MAESTRIA',
        accentColor: 'cyan'
      },
      {
        title: '3. A Vida Significativa (Meaningful Life)',
        description: 'Conexão profunda com algo que ultrapassa os interesses individuais: família, trabalho com propósito, educação, comunidade ou espiritualidade.',
        badge: 'PROPÓSITO TRANSCENDENTE',
        accentColor: 'purple'
      }
    ],
    strategicQuote: {
      text: 'Esses três caminhos mostram que a felicidade não é apenas sensação passageira, mas a maneira como utilizamos nossas capacidades e encontramos significado.',
      author: 'Martin Seligman',
      role: 'Felicidade Autêntica (2004)'
    },
    speakerNotes: {
      duration: '4 minutos',
      objective: 'Apresentar a tríade da felicidade autêntica de 2004 com clareza executiva e rigor teórico.',
      talkingPoints: [
        'Expor como o marketing moderno tenta vender a "Vida Agradável" como se fosse o total da felicidade.',
        'Demonstrar que o prazer possui rápida adaptação hedônica (efeito esteira rolante); o significado não se desgasta com o tempo.',
        'Mostrar que a Vida Significativa se conecta diretamente ao conceito de autotranscendência de Viktor Frankl.'
      ],
      executiveInsight: 'Empresas focadas apenas em benefícios de conveniência criam apenas "vida agradável". O engajamento sustentável exige "vida engajada" e "vida significativa".',
      potentialQuestion: {
        question: 'É possível viver uma vida com significado mesmo sem ter muita vida agradável?',
        answer: 'Absolutamente. Cientistas, humanitários e pais dedicados enfrentam noites sem dormir e desconforto extremo, vivendo com profundo significado e bem-estar eudaimônico.'
      }
    }
  },
  {
    id: 'slide-07',
    number: 7,
    section: 'Capítulo 5 • Rigor Conceitual',
    category: 'MATRIZ COMPARATIVA',
    title: 'Tríade da Felicidade Autêntica (2004) vs. Modelo PERMA (2011)',
    subtitle: 'Atenção epistemológica exigida no texto: modelos correlatos que não devem ser confundidos',
    academicRef: 'Seligman (2004; 2011) • Flourish',
    threeMode: 'synthesis',
    visualType: 'perma-comparison',
    executiveSummary: 'É fundamental observar que a proposta original da Felicidade Autêntica (2004) foi ampliada por Seligman no Modelo PERMA (2011), que autonomizou os Relacionamentos Positivos e a Realização.',
    fullContentParagraphs: [
      'A proposta original da felicidade autêntica centrava-se na satisfação com a vida através de três vias monistas.',
      'Posteriormente, em sua obra "Flourish" (2011), Seligman estabeleceu que o objetivo da Psicologia Positiva é o Florescimento Humano, medido por 5 pilares independentes:',
      'P (Positive Emotion), E (Engagement), R (Positive Relationships), M (Meaning) e A (Accomplishment/Realização). Portanto, a tríade e o PERMA são correlatos, mas não sinônimos.'
    ],
    keyPoints: [
      {
        title: 'Felicidade Autêntica (2004)',
        description: 'Modelo baseado em 3 caminhos (Agradável, Engajada, Significativa). Objetivo central: mensurar e elevar a "satisfação com a vida".',
        badge: 'MODELO DE 2004',
        accentColor: 'cyan'
      },
      {
        title: 'Modelo PERMA (2011)',
        description: 'Modelo de 5 pilares independentes: Positividade, Engajamento, Relações Positivas, Significado e Realização. Objetivo: o Florescimento (Flourish).',
        badge: 'MODELO DE 2011',
        accentColor: 'purple'
      },
      {
        title: 'Ganho Epistemológico no Trabalho',
        description: 'Reconhecimento explícito de que os relacionamentos (R) e a busca por realização (A) possuem valor intrínseco e não devem ser reduzidos a mero entretenimento.',
        badge: 'DISTINÇÃO CLARA',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'A tríade da felicidade autêntica e o modelo PERMA são propostas relacionadas, mas não devem ser confundidas academicamente.',
      author: 'Texto Oficial do TCC',
      role: 'Alinhamento Conceitual Exigido pela UNIP'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Destacar o rigor acadêmico ao alertar para não confundir os dois modelos de Seligman, conforme explicitado no texto original.',
      talkingPoints: [
        'Apontar a autocrítica feita por Seligman em 2011: a palavra "felicidade" no senso comum foi cooptada pelo entretenimento.',
        'Explicar os 5 elementos do PERMA, com ênfase no R (Outras pessoas importam) e no A (Realização por amor à excelência).',
        'Validar a coerência com as diretrizes do módulo ministrado pela Profa. Flávia Vasconcelos.'
      ],
      executiveInsight: 'Para a gestão estratégica de pessoas, o PERMA serve como um scorecard completo de saúde organizacional e retenção de líderes.',
      potentialQuestion: {
        question: 'Por que o modelo PERMA separou Relacionamentos e Conquista como categorias autônomas?',
        answer: 'Porque pesquisas comprovaram que o ser humano busca conexão afetiva e maestria executiva mesmo quando não produzem prazer imediato ou sentido cósmico direto.'
      }
    }
  },
  {
    id: 'slide-08',
    number: 8,
    section: 'Capítulo 6 • Psicologia do Envolvimento',
    category: 'ESTADO DE FLOW',
    title: 'O Estado de Flow e o Envolvimento Ativo com a Vida',
    subtitle: 'Mihaly Csikszentmihalyi: Equilíbrio entre desafio e habilidade na recuperação do engajamento',
    academicRef: 'Csikszentmihalyi, Mihaly (1990)',
    threeMode: 'flow',
    visualType: 'flow-interactive',
    executiveSummary: 'O flow refere-se ao estado de envolvimento intenso em que a pessoa sente elevada concentração e perde a percepção do tempo. Equilíbrio entre o nível de desafio e a habilidade disponível.',
    fullContentParagraphs: [
      'O flow pode acontecer durante uma atividade profissional, artística, esportiva ou intelectual. Para que seja favorecido, existe um equilíbrio: se a tarefa for muito fácil, gera tédio e desinteresse; se for excessivamente difícil, provoca ansiedade e estresse.',
      'A relação entre flow e vazio existencial está na possibilidade de recuperar o envolvimento com a própria vida.',
      'Entretanto, é fundamental destacar: o flow não representa, por si só, o sentido da vida. Uma pessoa pode entrar em flow em um jogo prazeroso sem que ele esteja ligado a um propósito mais amplo. O flow traz engajamento; o sentido envolve compreender o valor daquilo que se faz.'
    ],
    keyPoints: [
      {
        title: 'O Canal do Flow (Equilíbrio Dinâmico)',
        description: 'Zona ideal onde desafios estimulantes encontram competências à altura. Absorção mental e cessação de ruídos internos.',
        badge: 'FLUXO ÓTIMO',
        accentColor: 'emerald'
      },
      {
        title: 'Ansiedade vs. Tédio',
        description: 'Desafio acima da habilidade gera sobrecarga e ansiedade; habilidade muito acima da demanda gera tédio e desengajamento crônico.',
        badge: 'POLOS DESALINHADOS',
        accentColor: 'rose'
      },
      {
        title: 'A Ressalva Crítica do TCC',
        description: 'Flow traz concentração e engajamento, mas não substitui o sentido da vida. O sentido exige valor transcendente e direcionamento noético.',
        badge: 'RESSALVA ONTOLÓGICA',
        accentColor: 'amber'
      }
    ],
    strategicQuote: {
      text: 'O estado de flow pode contribuir para o engajamento, enquanto o sentido envolve também a compreensão do valor e da importância daquilo que fazemos.',
      author: 'Mihaly Csikszentmihalyi & Viktor Frankl',
      role: 'Síntese do TCC (Capítulo 6)'
    },
    speakerNotes: {
      duration: '4 minutos',
      objective: 'Demonstrar a mecânica do Flow e a ressalva crítica do trabalho: flow gera absorção, mas não garante propósito existencial.',
      talkingPoints: [
        'Convidar o professor a interagir com o simulador visual de Flow do slide.',
        'Destacar a diferença crucial: um jogador de videogame compulsivo entra em flow sem ter sentido de vida.',
        'Portanto, o Flow é o veículo do engajamento, mas a bússola deve ser calibrada pela dimensão noética.'
      ],
      executiveInsight: 'Na gestão estratégica de projetos, balancear os squads entre desafio estimulante e capacitação contínua é a fórmula científica contra o tédio e o esgotamento.',
      potentialQuestion: {
        question: 'Como resgatar um profissional experiente que caiu na zona de tédio corporativo?',
        answer: 'Elevando o nível de complexidade estratégica e o impacto da missão, ou reposicionando-o como mentor de novos talentos (autotranscendência).'
      }
    }
  },
  {
    id: 'slide-09',
    number: 9,
    section: 'Capítulo 7 • Ferramenta Prática',
    category: 'MAPEAMENTO PESSOAL',
    title: 'Mapeamento Pessoal: Caminho para o Autoconhecimento',
    subtitle: 'Auditoria de valores, forças, necessidades e objetivos para superar expectativas externas',
    academicRef: 'Metodologia Proposta no Trabalho (Capítulo 7)',
    threeMode: 'triad',
    visualType: 'mapping-interactive',
    executiveSummary: 'Ferramenta de reflexão que ajuda o indivíduo a identificar se sua rotina diária corresponde aos seus valores inegociáveis ou se está vivendo em função da aprovação externa.',
    fullContentParagraphs: [
      'Em uma sociedade marcada pela comparação, o autoconhecimento se torna fundamental. Sem ele, existe o risco de construir uma vida baseada em expectativas alheias, deixando de reconhecer os próprios desejos e limites.',
      'Perguntas centrais: Quais são os meus principais valores? Quais atividades me proporcionam satisfação? Quais habilidades reconheço em mim? O que considero importante nas minhas relações? Quais situações me fazem sentir que estou contribuindo? O que preciso mudar para viver de forma mais coerente?',
      'O autoconhecimento não deve ser compreendido como uma busca interminável por uma versão perfeita de si mesmo. Trata-se de um processo contínuo de rever escolhas quando necessário.'
    ],
    keyPoints: [
      {
        title: 'Perguntas Estratégicas de Alinhamento',
        description: 'Diagnosticar discrepâncias concretas entre a vida ideal e a vida real (ex: valorizar a família, mas dedicar 100% da energia ao trabalho).',
        badge: 'AUDITORIA DE VALORES',
        accentColor: 'cyan'
      },
      {
        title: 'Alocação das Forças Pessoais (VIA)',
        description: 'Reconhecer talentos e atividades que favorecem engajamento e sentido, traduzindo valores abstratos em escolhas práticas.',
        badge: 'FORÇAS VIA',
        accentColor: 'purple'
      },
      {
        title: 'Processo Contínuo vs. Perfeccionismo',
        description: 'Reconhecer qualidades, aceitar limitações reais e ter a humildade e coragem de recalibrar metas conforme as fases de vida.',
        badge: 'RECALIBRAGEM',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'O autoconhecimento não é uma busca interminável por uma versão perfeita de si mesmo, mas um processo contínuo de rever escolhas quando necessário.',
      author: 'Trabalho de Conclusão',
      role: 'Seção 7: Autoconhecimento Prático'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Apresentar a ferramenta do Mapeamento Pessoal como uma ponte pragmática entre a teoria acadêmica e a execução diária.',
      talkingPoints: [
        'Usar linguagem de gestão estratégica: o ser humano precisa de um planejamento estratégico pessoal com auditoria de coerência.',
        'Destacar as perguntas-chave descritas no texto: Quais são meus valores inegociáveis? Onde estou gerando valor?',
        'Ressaltar que autoconhecimento sem ação concreta vira intelectualismo estéril.'
      ],
      executiveInsight: 'Grandes estrategistas corporativos muitas vezes falham em auditar a própria vida com o mesmo rigor com que auditam seus balanços trimestrais.',
      potentialQuestion: {
        question: 'Com que frequência o mapeamento pessoal deve ser revisado?',
        answer: 'Recomenda-se um checkpoint trimestral de alinhamento e uma revisão profunda anual ou após marcos de transição de ciclo de vida.'
      }
    }
  },
  {
    id: 'slide-10',
    number: 10,
    section: 'Capítulo 8 • Elaboração da Dor',
    category: 'RESSIGNIFICAÇÃO',
    title: 'A Ressignificação dos Desafios e a Construção de Sentido',
    subtitle: 'Elaborar adversidades sem negar o sofrimento nem cair na positividade ingênua',
    academicRef: 'Frankl (2008) • Seligman (2011)',
    threeMode: 'reframing',
    visualType: 'reframing-matrix',
    executiveSummary: 'Ressignificar consiste em desenvolver novas formas de compreender uma experiência difícil, seus aprendizados e as alternativas futuras. Não significa negar a dor nem justificar situações injustas.',
    fullContentParagraphs: [
      'Perdas, mudanças, frustrações e dificuldades profissionais fazem parte da experiência humana. Ressignificar não significa considerar que todo sofrimento é necessário ou que devemos romantizar a dor.',
      'Mesmo quando não é possível modificar determinadas circunstâncias, existe a possibilidade de escolher a atitude diante delas. Isso não elimina a importância de buscar ajuda, transformar o que pode ser mudado e reconhecer limites.',
      'Nem toda dificuldade produz crescimento automaticamente. A ressignificação depende de condições individuais, do tempo para elaborar e do apoio dos outros. Uma experiência difícil não precisa determinar todas as escolhas futuras.'
    ],
    keyPoints: [
      {
        title: 'A Atitude Diante do Inevitável',
        description: 'Frankl ensina: quando não podemos mudar uma situação, somos chamados a mudar nossa postura interior diante dela.',
        badge: 'LIBERDADE INTERIOR',
        accentColor: 'rose'
      },
      {
        title: 'Rejeição à Positividade Tóxica',
        description: 'Respeito irrestrito à dor, ao luto e ao tempo individual de elaboração. Nem todo sofrimento é justo ou intencional.',
        badge: 'LUCIDEZ ÉTICA',
        accentColor: 'amber'
      },
      {
        title: 'Descoberta de Novos Repertórios',
        description: 'Mobilização de forças latentes que não eram utilizadas antes da crise, permitindo abrir caminhos de futuro.',
        badge: 'APRENDIZADO ATIVO',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'Ressignificar não é apagar o passado, mas reconhecer que uma experiência difícil não precisa determinar todas as escolhas futuras.',
      author: 'Viktor Frankl & Texto Base',
      role: 'Capítulo 8 do TCC'
    },
    speakerNotes: {
      duration: '4 minutos',
      objective: 'Destacar o rigor do trabalho ao rejeitar explicitamente qualquer forma de positividade tóxica ou justificativa de injustiças.',
      talkingPoints: [
        'Enfatizar o posicionamento do texto: a dor dói, e não devemos fingir que tudo acontece por um motivo pré-determinado.',
        'A ressignificação é um ato de liberdade noética: o que eu faço a partir do fato consumado?',
        'Trazer o exemplo de executivos que perderam posições executivas e redescobriram sua vocação autêntica.'
      ],
      executiveInsight: 'A capacidade de ressignificação em uma liderança impede o contágio emocional de pânico em momentos de crise institucional ou disrupção de mercado.',
      potentialQuestion: {
        question: 'A ressignificação é aplicável a qualquer tipo de crise corporativa?',
        answer: 'Sim, pois mesmo quando a perda financeira ou o colapso operacional é total, a dignidade e a postura da liderança permanecem sob seu controle absoluto.'
      }
    }
  },
  {
    id: 'slide-11',
    number: 11,
    section: 'Capítulo 9 • Síntese Teórica',
    category: 'INTEGRAÇÃO ESTRATÉGICA',
    title: 'A Integração entre Logoterapia e Psicologia Positiva',
    subtitle: 'Uma vida satisfatória não se resume à ausência de sofrimento ou à busca constante por prazer',
    academicRef: 'Frankl (2008) • Seligman (2011) • Csikszentmihalyi (1990)',
    threeMode: 'synthesis',
    visualType: 'synthesis-quadrant',
    executiveSummary: 'A Logoterapia destaca o sentido, a responsabilidade e o significado concreto. A Psicologia Positiva contribui com emoções positivas, engajamento, forças e realização. Juntas, oferecem um modelo holístico para o bem-estar.',
    fullContentParagraphs: [
      'Sentir alegria é importante, mas também é necessário reconhecer o que dá significado à vida. Ter objetivos pode ser motivador, mas é igualmente importante compreender se esses objetivos estão alinhados aos próprios valores.',
      'Envolver-se em uma atividade (flow) proporciona satisfação, mas a experiência ganha outra dimensão quando está conectada a algo que a pessoa considera importante.',
      'O mapeamento pessoal ajuda a identificar valores e capacidades; o flow favorece o engajamento; e a ressignificação amplia a compreensão das experiências difíceis. A construção de sentido não acontece de uma única vez: ela se desenvolve em pequenas decisões diárias.'
    ],
    keyPoints: [
      {
        title: 'Logoterapia (A Âncora e o Sentido)',
        description: 'Fornece o alicerce ontológico, a responsabilidade noética e a autotranscendência perante o sofrimento inevitável.',
        badge: 'O PORQUÊ (FRANKL)',
        accentColor: 'purple'
      },
      {
        title: 'Psicologia Positiva (As Forças e o Florescimento)',
        description: 'Oferece mensuração empírica, cultivo de emoções positivas, forças de caráter (VIA) e relacionamentos saudáveis.',
        badge: 'O COMO (SELIGMAN)',
        accentColor: 'cyan'
      },
      {
        title: 'O Estado de Flow (O Engajamento Ativo)',
        description: 'Traduz valores e intenções em foco concentrado, maestria e perda da noção do tempo em desafios relevantes.',
        badge: 'A EXECUÇÃO (FLOW)',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'Enfrentar o vazio existencial não significa ter resposta definitiva para tudo, mas desenvolver a capacidade de reconhecer o que tem valor e agir com consciência.',
      author: 'Capítulo 9',
      role: 'Síntese Integrativa do TCC'
    },
    speakerNotes: {
      duration: '4 minutos',
      objective: 'Apresentar a grande tese integrativa do trabalho de forma matricial e visualmente impactante.',
      talkingPoints: [
        'Mostrar que essas duas correntes não são concorrentes, mas profundamente complementares.',
        'Sem a Logoterapia, a Psicologia Positiva corre o risco de virar superficial ou excessivamente funcionalista.',
        'Sem a Psicologia Positiva, a Logoterapia pode parecer árdua ou restrita a situações extremas de crise.',
        'Juntas, formam a mais potente tecnologia de desenvolvimento humano do século XXI.'
      ],
      executiveInsight: 'Organizações exponenciais integram propósito noético (missão de valor) com ecossistemas de flow e reconhecimento de forças (execução excelente).',
      potentialQuestion: {
        question: 'Qual o ponto mais sensível de atrito entre as duas abordagens?',
        answer: 'A abordagem da felicidade: a Psicologia Positiva valoriza as emoções positivas como recurso adaptativo; Frankl alerta que o prazer nunca deve ser buscado diretamente como meta, mas colhido como subproduto do sentido realizado.'
      }
    }
  },
  {
    id: 'slide-12',
    number: 12,
    section: 'Aplicação Executiva',
    category: 'PLAYBOOK DE LIDERANÇA',
    title: 'Framework de Aplicação Prática para Gestão e Liderança',
    subtitle: 'Da teoria acadêmica à governança do bem-estar e da cultura corporativa',
    academicRef: 'Visão do Especialista em Gestão Estratégica',
    threeMode: 'leadership',
    visualType: 'leadership-playbook',
    executiveSummary: 'Recomendações táticas para líderes, gestores e consultores aplicarem esses conceitos em governança de equipes, engajamento e combate ao desengajamento nas organizações contemporâneas.',
    fullContentParagraphs: [
      'Na contemporaneidade, a liderança estratégica exige mais do que bater metas quantitativas: demanda criar ambientes organizacionais onde as pessoas compreendam o impacto de seu trabalho.',
      'Sensemaking Corporativo: conectar o trabalho à contribuição social real.',
      'Arquitetura de Flow: auditoria de complexidade para proteger as equipes da ansiedade crônica e da apatia por subutilização de talentos.',
      'Gestão por Forças de Caráter: identificação das virtudes e talentos VIA para maximizar a segurança psicológica e o engajamento autêntico.'
    ],
    keyPoints: [
      {
        title: '1. Sensemaking Corporativo',
        description: 'Conectar cada meta corporativa ao impacto no cliente real; desconstruir a sensação de trabalho inútil.',
        badge: 'SENSEMAKING',
        accentColor: 'cyan'
      },
      {
        title: '2. Calibragem de Desafios (Flow Audits)',
        description: 'Diagnosticar regularmente a carga cognitiva da equipe, evitando tanto a ansiedade crônica quanto o desengajamento apático.',
        badge: 'FLOW DESIGN',
        accentColor: 'emerald'
      },
      {
        title: '3. Cultura de Segurança Psicológica & Forças',
        description: 'Alocar pessoas a partir de suas virtudes primárias (VIA Character), permitindo ressignificação ágil de erros operacionais.',
        badge: 'FORÇAS & CULTURA',
        accentColor: 'purple'
      }
    ],
    strategicQuote: {
      text: 'Liderar estrategicamente na contemporaneidade é desenhar ambientes onde o trabalho seja uma expressão viva do sentido humano.',
      author: 'Rodrigo Muniz Tognareli',
      role: 'Especialista em Gestão Estratégica'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Demonstrar sua marca pessoal de especialista em gestão estratégica, aplicando os conceitos da Psicologia Positiva à realidade executiva.',
      talkingPoints: [
        'Destacar a responsabilidade dos líderes modernos no combate à epidemia silenciosa de desengajamento.',
        'Apresentar os 3 pilares práticos: Sensemaking, Flow Design e Gestão por Forças.',
        'Demonstrar retorno tangível: empresas com alto alinhamento de propósito apresentam menor rotatividade e maior inovação.'
      ],
      executiveInsight: 'A liderança baseada no medo e na cobrança cega produz obediência estéril; a liderança noética e positiva constrói lealdade inspirada e maestria colaborativa.',
      potentialQuestion: {
        question: 'Como medir o ROI do sentido e do bem-estar em um balanço corporativo?',
        answer: 'Por meio da redução de absenteísmo, redução de custos de recrutamento por turnover, aumento no eNPS (Employee Net Promoter Score) e aceleração no ciclo de inovação das equipes.'
      }
    }
  },
  {
    id: 'slide-13',
    number: 13,
    section: 'Capítulo 10 • Considerações Finais',
    category: 'CONCLUSÃO & LEGADO',
    title: 'Considerações Finais: O Sentido como Construção Contínua',
    subtitle: 'Uma vida significativa não é uma vida sem dificuldades, mas com razões firmes para continuar',
    academicRef: 'Considerações Finais do TCC',
    threeMode: 'hero',
    visualType: 'conclusion-vision',
    executiveSummary: 'Ter acesso a oportunidades, conforto material e reconhecimento social não garante uma vida significativa. Enfrentar o vazio existencial exige refletir sobre escolhas e sobre o que consideramos realmente valioso.',
    fullContentParagraphs: [
      'A reflexão sobre o vazio existencial demonstra que o conforto material não assegura plenitude. Em uma sociedade que valoriza a produtividade e a comparação, torna-se essencial reservar espaço para o autoconhecimento, a construção de vínculos e a reflexão sobre os próprios valores.',
      'O sentido da vida não precisa estar associado a grandes realizações heroicas: reside nas relações de cuidado, no trabalho realizado com propósito, no aprendizado e nas pequenas atitudes cotidianas.',
      'A Logoterapia e a Psicologia Positiva oferecem contribuições fundamentais para pensar o bem-estar humano de forma ampla: considerando não apenas a felicidade momentânea, mas o sentido, o engajamento e a responsabilidade na construção da própria trajetória.'
    ],
    keyPoints: [
      {
        title: 'O Sentido nas Pequenas Ações Cotidianas',
        description: 'O sentido não exige façanhas monumentais; reside no cuidado diário com o outro, na responsabilidade com o trabalho e no zelo pelas relações.',
        badge: 'MICRO-SENTIDO',
        accentColor: 'cyan'
      },
      {
        title: 'Superação da Cultura de Fachada',
        description: 'Substituir a busca por aplausos externos superficiais pela coerência interna e pelo fortalecimento da dimensão noética.',
        badge: 'AUTENTICIDADE',
        accentColor: 'purple'
      },
      {
        title: 'A Pergunta Que Guia a Maturidade',
        description: '"O que a vida está me pedindo nesta situação?". A vida como um chamado ativo à responsabilidade ética e à autotranscendência.',
        badge: 'RESPONSABILIDADE',
        accentColor: 'emerald'
      }
    ],
    strategicQuote: {
      text: 'O que o ser humano realmente necessita não é um estado de ausência de tensão, mas a busca e o esforço por uma meta que valha a pena.',
      author: 'Viktor Frankl',
      role: 'Em Busca de Sentido'
    },
    speakerNotes: {
      duration: '3 minutos',
      objective: 'Encerrar a apresentação com elegância, força oratória e síntese inspiradora, preparando o terreno para a arguição da banca.',
      talkingPoints: [
        'Resumir a trajetória: do diagnóstico do vazio à construção ativa de sentido.',
        'Reforçar o compromisso do grupo e o aprendizado transformador ao longo de todo o módulo.',
        'Concluir com a convicção de que inteligência emocional e psicologia positiva são competências nucleares de vida e liderança.'
      ],
      executiveInsight: 'O maior legado de uma carreira não é o patrimônio acumulado, mas a qualidade do sentido compartilhado e as vidas positivamente impactadas.',
      potentialQuestion: {
        question: 'Qual a principal mensagem que este trabalho deixa para a pós-graduação da UNIP?',
        answer: 'Que a ciência psicológica positiva e a sabedoria existencial da Logoterapia não são apenas ferramentas acadêmicas, mas bússolas urgentes para humanizar o futuro do trabalho e da sociedade.'
      }
    }
  },
  {
    id: 'slide-14',
    number: 14,
    section: 'Agradecimentos & Fontes',
    category: 'REFERÊNCIAS ACADÊMICAS',
    title: 'Referências Bibliográficas & Agradecimento Especial',
    subtitle: 'UNIP – Universidade Paulista • MBA Psicologia Positiva e Inteligência Emocional',
    academicRef: 'ABNT / Referências Oficiais do Trabalho',
    threeMode: 'hero',
    visualType: 'academic-references',
    executiveSummary: 'Agradecimento sincero à Professora Flávia Vasconcelos pela condução primorosa e inspiradora do módulo, e consolidação das obras acadêmicas fundamentais citadas no trabalho.',
    fullContentParagraphs: [
      'CSIKSZENTMIHALYI, Mihaly. Flow: the psychology of optimal experience. New York: Harper & Row, 1990.',
      'FRANKL, Viktor E. Em busca de sentido: um psicólogo no campo de concentração. Petrópolis, RJ: Vozes, 2008.',
      'PEREIRA, Ivo Studart. A vontade de sentido na obra de Viktor Frankl. Psicologia USP, São Paulo, v. 18, n. 1, p. 125-136, 2007. DOI: https://doi.org/10.1590/S0103-65642007000100007.',
      'SELIGMAN, Martin E. P. Authentic happiness: using the new positive psychology to realize your potential for lasting fulfillment. New York: Free Press, 2004.',
      'SELIGMAN, Martin E. P. Flourish: a visionary new understanding of happiness and well-being. New York: Free Press, 2011.'
    ],
    keyPoints: [
      {
        title: 'CSIKSZENTMIHALYI, Mihaly (1990)',
        description: 'Flow: the psychology of optimal experience. New York: Harper & Row.',
        badge: 'FLOW',
        accentColor: 'emerald'
      },
      {
        title: 'FRANKL, Viktor E. (2008)',
        description: 'Em busca de sentido: um psicólogo no campo de concentração. Petrópolis, RJ: Vozes.',
        badge: 'LOGOTERAPIA',
        accentColor: 'cyan'
      },
      {
        title: 'SELIGMAN, Martin E. P. (2004 & 2011)',
        description: 'Authentic happiness & Flourish: a visionary new understanding of happiness and well-being. New York: Free Press.',
        badge: 'PSICOLOGIA POSITIVA',
        accentColor: 'purple'
      },
      {
        title: 'PEREIRA, Ivo Studart (2007)',
        description: 'A vontade de sentido na obra de Viktor Frankl. Psicologia USP, São Paulo, v. 18, n. 1, p. 125-136.',
        badge: 'REVISÃO',
        accentColor: 'amber'
      }
    ],
    strategicQuote: {
      text: 'Agradecimento especial à Professora Flávia Vasconcelos pela condução primorosa e inspiradora do módulo.',
      author: 'Os Autores',
      role: 'Fabiana Cavassan Nogueira • Rodrigo Muniz Tognareli • Viviane Tasso'
    },
    speakerNotes: {
      duration: '2 minutos',
      objective: 'Agradecer a professora Flávia Vasconcelos, à UNIP, aos colegas e abrir oficialmente para comentários e perguntas da banca.',
      talkingPoints: [
        'Agradecer expressamente à Professora Flávia Vasconcelos pelas provocações intelectuais de alto nível.',
        'Agradecer aos colegas de grupo pela colaboração e sintonia no desenvolvimento do trabalho.',
        'Declarar a apresentação formalmente concluída e colocar-se à disposição para perguntas da banca avaliadora.'
      ],
      executiveInsight: 'A humildade acadêmica aliada à firmeza conceitual é a marca indelével do profissional especialista.',
      potentialQuestion: {
        question: 'O grupo pretende dar continuidade a esta pesquisa?',
        answer: 'Sim, pretendemos transformar este framework em artigos aplicados sobre liderança noética e workshops corporativos de alinhamento existencial.'
      }
    }
  }
];
