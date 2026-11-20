// Planos da Candidus. Editar aqui atualiza a seção "Planos" da home.
// limites: lista de [valor, rótulo]; ou texto (string) quando o limite é personalizado.
export const planos = [
  {
    id: "essencial",
    nome: "Candidus Essencial",
    icone: "camadas",
    descricao: "Para empresas pequenas que precisam organizar a rotina financeira.",
    preco: "790",
    incluido: [
      "Contas a pagar e receber",
      "Conciliação bancária básica",
      "Organização financeira e controle de vencimentos",
      "Relatório financeiro mensal simples",
    ],
    limites: [
      ["Até 60", "Movimentações"],
      ["Até 25", "Pagamentos"],
      ["Até 35", "Recebimentos"],
      ["1", "Conta bancária"],
      ["Até 20", "Notas fiscais"],
      ["Até 3", "Funcionários"],
    ],
  },
  {
    id: "organizado",
    nome: "Candidus Organizado",
    icone: "barras",
    destaque: "Mais procurado",
    descricao: "Para empresas que precisam de controle financeiro e acompanhamento dos resultados.",
    preco: "1.490",
    incluido: [
      "Tudo do Essencial",
      "Fluxo de caixa projetado",
      "Relatórios gerenciais",
      "Análise de receitas e despesas",
      "Indicadores financeiros básicos",
      "Reunião mensal de resultados",
    ],
    limites: [
      ["Até 250", "Movimentações"],
      ["Até 100", "Pagamentos"],
      ["Até 150", "Recebimentos"],
      ["Até 2", "Contas bancárias"],
      ["Até 60", "Notas fiscais"],
      ["Até 15", "Funcionários"],
    ],
  },
  {
    id: "estrategico",
    nome: "Candidus Estratégico",
    icone: "alvo",
    descricao: "Para empresas com maior volume ou necessidade de controladoria.",
    preco: "2.490",
    incluido: [
      "Tudo do Organizado",
      "Análise de custos e despesas",
      "DRE gerencial detalhada",
      "Análise de margem e rentabilidade",
      "Orçamento e acompanhamento de resultados",
      "Indicadores de desempenho",
      "Reunião estratégica mensal",
    ],
    limites:
      "Personalizados, conforme o volume de movimentações, contas bancárias, notas fiscais, funcionários e complexidade da operação.",
  },
];
