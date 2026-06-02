// data.js - Dados estáticos do quiz

export const estilos = {
  A: "Clássico",
  B: "Criativo",
  C: "Romântico",
  D: "Casual",
  E: "Glamouroso",
  F: "Dramático",
  G: "Refinado",
};

export const perguntas = [
  {
    pergunta: "Como você prefere se vestir no dia a dia?",
    respostas: [
      { letra: "A", texto: "Roupas clássicas, bem cortadas, cores neutras." },
      {
        letra: "B",
        texto: "Peças ousadas, misturas de estampas ou cores inesperadas.",
      },
      {
        letra: "C",
        texto: "Tons suaves, tecidos delicados, detalhes românticos.",
      },
      { letra: "D", texto: "Confortável, prático, simples." },
      { letra: "E", texto: "Brilho, tecidos luxuosos, peças chamativas." },
      {
        letra: "F",
        texto: "Linhas fortes, contrastes marcantes, impacto visual.",
      },
      { letra: "G", texto: "Minimalista, cortes limpos, cores neutras." },
    ],
  },

  {
    pergunta: "Que tipo de sapato você costuma escolher?",
    respostas: [
      { letra: "A", texto: "Clássico, sóbrio, elegante." },
      { letra: "B", texto: "Criativo, artístico." },
      { letra: "C", texto: "Romântico, com detalhes delicados." },
      { letra: "D", texto: "Confortável, fácil de calçar." },
      { letra: "E", texto: "Com brilho, marca de luxo." },
      { letra: "F", texto: "Marcante, exótico, ousado." },
      { letra: "G", texto: "Simples, discreto, funcional." },
    ],
  },

  {
    pergunta: "Sua decoração favorita é:",
    respostas: [
      { letra: "A", texto: "Tradicional, elegante e organizada." },
      { letra: "B", texto: "Arte, objetos incomuns." },
      { letra: "C", texto: "Cores suaves, flores, detalhes delicados." },
      { letra: "D", texto: "Prática, aconchegante." },
      { letra: "E", texto: "Luxuosa, glamourosa." },
      {
        letra: "F",
        texto: "Dramática, contrastes fortes, esculturas marcantes.",
      },
      { letra: "G", texto: "Minimalista, clean, essencial." },
    ],
  },

  {
    pergunta: "Como você prefere passar o tempo livre?",
    respostas: [
      { letra: "A", texto: "Leitura clássica, cinema, teatro." },
      { letra: "B", texto: "Pintura, experimentos, design." },
      { letra: "C", texto: "Passeios tranquilos, música suave." },
      { letra: "D", texto: "Natureza, esportes leves, relaxar." },
      { letra: "E", texto: "Eventos sociais, festas elegantes." },
      { letra: "F", texto: "Aventuras intensas, experiências novas." },
      { letra: "G", texto: "Meditação, simplificação, projetos funcionais." },
    ],
  },

  {
    pergunta: "Qual cor você mais se sente confortável usando?",
    respostas: [
      { letra: "A", texto: "Azul-marinho, bege, cinza." },
      { letra: "B", texto: "Cores ousadas, contrastes." },
      { letra: "C", texto: "Rosa, lilás, tons pastel." },
      { letra: "D", texto: "Verde, marrom, tons naturais." },
      { letra: "E", texto: "Vermelho, dourado, cores chamativas." },
      { letra: "F", texto: "Preto, branco, cores dramáticas." },
      { letra: "G", texto: "Branco, cinza, preto, cores neutras." },
    ],
  },

  {
    pergunta: "Quando pensa em seu guarda-roupa, você busca:",
    respostas: [
      {
        letra: "A",
        texto: "Peças que nunca saem de moda, em tecidos de muita qualidade.",
      },
      {
        letra: "B",
        texto:
          "Itens únicos, exclusivos, com tecidos diferentes e interessantes.",
      },
      {
        letra: "C",
        texto: "Roupas delicadas e femininas, com tecido leves e suaves.",
      },
      {
        letra: "D",
        texto:
          "Conforto e praticidade, com tecidos de fácil manutenção e resistentes.",
      },
      {
        letra: "E",
        texto: "Luxo e glamour, em tecidos com estampa animal print.",
      },
      {
        letra: "F",
        texto: "Peças impactantes e ousadas, com tecidos mais estruturados.",
      },
      { letra: "G", texto: "Qualidade e tecidos sofisticados." },
    ],
  },

  {
    pergunta: "Como você organiza sua vida diária?",
    respostas: [
      { letra: "A", texto: "Planejada e estruturada." },
      { letra: "B", texto: "Flexível, improvisada." },
      { letra: "C", texto: "Suave, com atenção aos detalhes." },
      { letra: "D", texto: "Descomplicada, prática." },
      { letra: "E", texto: "Intensa, focada em status e estética." },
      { letra: "F", texto: "Energética, gosta de mudanças radicais." },
      { letra: "G", texto: "Estruturada, porém simplificada." },
    ],
  },

  {
    pergunta: "Ao comprar roupas ou objetos, você prefere:",
    respostas: [
      { letra: "A", texto: "Qualidade duradoura." },
      { letra: "B", texto: "Design original ou raro." },
      { letra: "C", texto: "Estilo delicado ou bonito." },
      { letra: "D", texto: "Funcionalidade e conforto." },
      { letra: "E", texto: "Luxo e sofisticação." },
      { letra: "F", texto: "Algo que chame atenção." },
      { letra: "G", texto: "Minimalismo, essencial." },
    ],
  },

  {
    pergunta: "Qual acessório combina mais com você?",
    respostas: [
      { letra: "A", texto: "Relógio clássico." },
      { letra: "B", texto: "Joia ou objeto artístico." },
      { letra: "C", texto: "Lenço, pérolas, flores." },
      { letra: "D", texto: "Chapéu ou mochila simples." },
      { letra: "E", texto: "Bolsa ou sapato luxuoso." },
      { letra: "F", texto: "Óculos, cinto ou peça chamativa." },
      { letra: "G", texto: "Acessório discreto." },
    ],
  },

  {
    pergunta: "Que tipo de filme você prefere?",
    respostas: [
      { letra: "A", texto: "Drama histórico ou clássico." },
      { letra: "B", texto: "Filmes experimentais, fantasia." },
      { letra: "C", texto: "Romance." },
      { letra: "D", texto: "Aventura leve, natureza." },
      { letra: "E", texto: "Filmes de luxo, moda, glamour." },
      { letra: "F", texto: "Ação intensa, suspense." },
      { letra: "G", texto: "Documentários ou minimalistas." },
    ],
  },

  {
    pergunta: "Em festas, você:",
    respostas: [
      { letra: "A", texto: "Prefere elegância discreta." },
      { letra: "B", texto: "Cria seu próprio estilo." },
      { letra: "C", texto: "Gosta de looks delicados." },
      { letra: "D", texto: "Conforto acima de tudo." },
      { letra: "E", texto: "Brilha e se destaca." },
      { letra: "F", texto: "Ama causar impacto." },
      { letra: "G", texto: "Minimalista e elegante." },
    ],
  },

  {
    pergunta: "Como são os objetos do seu dia a dia?",
    respostas: [
      { letra: "A", texto: "Tradicionais." },
      { letra: "B", texto: "Artísticos." },
      { letra: "C", texto: "Românticos, delicados." },
      { letra: "D", texto: "Naturais." },
      { letra: "E", texto: "Luxuosos." },
      { letra: "F", texto: "Dramáticos." },
      { letra: "G", texto: "Essenciais." },
    ],
  },

  {
    pergunta: "Como são as cores da sua casa?",
    respostas: [
      { letra: "A", texto: "Neutras clássicas." },
      { letra: "B", texto: "Mistura ousada." },
      { letra: "C", texto: "Suaves." },
      { letra: "D", texto: "Terrosas." },
      { letra: "E", texto: "Vibrantes." },
      { letra: "F", texto: "Contrastes fortes." },
      { letra: "G", texto: "Clean." },
    ],
  },

  {
    pergunta: "Seus hobbies incluem:",
    respostas: [
      { letra: "A", texto: "Leitura, cultura clássica." },
      { letra: "B", texto: "Artes, design." },
      { letra: "C", texto: "Música, passeios românticos." },
      { letra: "D", texto: "Natureza, esportes." },
      { letra: "E", texto: "Social, festas glamorosas." },
      { letra: "F", texto: "Aventuras radicais." },
      { letra: "G", texto: "Simplificação, meditação." },
    ],
  },

  {
    pergunta: "Em reuniões, você:",
    respostas: [
      { letra: "A", texto: "Mantém postura formal." },
      { letra: "B", texto: "Expressa ideias únicas." },
      { letra: "C", texto: "Suave e diplomático." },
      { letra: "D", texto: "Prático e direto." },
      { letra: "E", texto: "Impressiona." },
      { letra: "F", texto: "Forte presença." },
      { letra: "G", texto: "Objetivo e conciso." },
    ],
  },

  {
    pergunta: "Qual seu look ideal para viajar?",
    respostas: [
      { letra: "A", texto: "Clássico e elegante." },
      { letra: "B", texto: "Diferente e criativo." },
      { letra: "C", texto: "Delicado e confortável." },
      { letra: "D", texto: "Casual e prático." },
      { letra: "E", texto: "Luxuoso e chamativo." },
      { letra: "F", texto: "Marcante e ousado." },
      { letra: "G", texto: "Simples e funcional." },
    ],
  },

  {
    pergunta: "O que é importante na decoração do seu espaço de trabalho?",
    respostas: [
      { letra: "A", texto: "Organização." },
      { letra: "B", texto: "Estilo artístico." },
      { letra: "C", texto: "Detalhes suaves." },
      { letra: "D", texto: "Praticidade." },
      { letra: "E", texto: "Glamour e luxo." },
      { letra: "F", texto: "Impacto visual." },
      { letra: "G", texto: "Essencial." },
    ],
  },

  {
    pergunta: "Que tipo de perfume você prefere?",
    respostas: [
      { letra: "A", texto: "Clássico, elegante." },
      { letra: "B", texto: "Diferente, criativo." },
      { letra: "C", texto: "Floral, suave." },
      { letra: "D", texto: "Natural, leve." },
      { letra: "E", texto: "Marcante, sofisticado." },
      { letra: "F", texto: "Intenso, dramático." },
      { letra: "G", texto: "Neutro, minimalista." },
    ],
  },

  {
    pergunta: "Seu estilo de comunicação é:",
    respostas: [
      { letra: "A", texto: "Formal e polido." },
      { letra: "B", texto: "Original e criativo." },
      { letra: "C", texto: "Gentil e atencioso." },
      { letra: "D", texto: "Direto e simples." },
      { letra: "E", texto: "Direto e simples." },
      { letra: "F", texto: "Impactante e persuasivo." },
      { letra: "G", texto: "Claro e objetivo." },
    ],
  },

  {
    pergunta: "Qual sua preferência ao escolher um presente?",
    respostas: [
      { letra: "A", texto: "Algo tradicional." },
      { letra: "B", texto: "Único e criativo." },
      { letra: "C", texto: "Romântico ou delicado." },
      { letra: "D", texto: "Útil e prático." },
      { letra: "E", texto: "Luxuoso ou chamativo." },
      { letra: "F", texto: "Dramático e surpreendente." },
      { letra: "G", texto: "Minimalista e funcional." },
    ],
  },
];
