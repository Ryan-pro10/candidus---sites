// Textos dos serviços. Editar aqui atualiza os cards da home e as páginas /servicos/<slug>/.
// Cada item de lista é [título, texto].
export const servicos = [
  {
    slug: "contas-a-pagar",
    nome: "Contas a pagar",
    resumo: "Organização dos compromissos financeiros, vencimentos e acompanhamento dos pagamentos.",
    titulo: "Contas a pagar em dia, sem planilha paralela.",
    lead: "Registramos cada boleto, nota e compromisso, organizamos o calendário de vencimentos e preparamos os pagamentos para a sua aprovação.",
    resumoLateral: [
      ["Rotina", "Diária"],
      ["Você aprova", "Cada lote de pagamentos"],
      ["Relatório", "Pagamentos do mês e próximos vencimentos"],
    ],
    oQueFazemos: [
      ["Cadastro e lançamento", "Notas, boletos e despesas recorrentes entram no sistema com categoria e centro de custo."],
      ["Agenda de vencimentos", "Visão do que vence hoje, na semana e no mês, para nada pegar a empresa de surpresa."],
      ["Preparação dos pagamentos", "Montamos os lotes para você aprovar no banco; o dinheiro só sai com o seu aval."],
      ["Comprovantes organizados", "Cada pagamento fica ligado ao seu comprovante, pronto para a contabilidade."],
    ],
    passos: [
      ["Recebemos os documentos", "Você encaminha notas e boletos por e-mail ou pelo canal combinado."],
      ["Lançamos e agendamos", "Classificamos cada conta e colocamos na agenda de vencimentos."],
      ["Você aprova", "Enviamos o lote do dia ou da semana para a sua aprovação no banco."],
    ],
    perguntas: [
      ["Vocês fazem os pagamentos no meu banco?", "Preparamos os pagamentos, e a aprovação final continua com você no banco. Assim o controle do dinheiro nunca sai da empresa."],
      ["Como envio as notas e boletos?", "Definimos um canal na implantação, como um e-mail exclusivo ou uma pasta compartilhada."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 9h18M3 9l2-5h14l2 5M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9M9 14h6\"/></svg>",
  },
  {
    slug: "contas-a-receber",
    nome: "Contas a receber",
    resumo: "Controle dos recebimentos, valores pendentes e acompanhamento de clientes.",
    titulo: "Saiba quem já pagou e quem ainda deve.",
    lead: "Acompanhamos cada recebimento, identificamos atrasos e mantemos a lista de pendências atualizada para a sua equipe cobrar no momento certo.",
    resumoLateral: [
      ["Rotina", "Diária"],
      ["Visão", "Recebido, a vencer e em atraso"],
      ["Relatório", "Inadimplência por cliente"],
    ],
    oQueFazemos: [
      ["Registro das vendas a prazo", "Cada venda, parcela e boleto emitido entra no controle com data e cliente."],
      ["Baixa dos recebimentos", "Conferimos o que caiu na conta e damos baixa no título certo."],
      ["Lista de atrasos", "Pendências por cliente e por idade do atraso, prontas para a cobrança."],
      ["Previsão de entradas", "O que deve entrar nas próximas semanas alimenta o fluxo de caixa."],
    ],
    passos: [
      ["Integramos as vendas", "Recebemos as vendas a prazo do seu sistema ou planilha."],
      ["Conferimos o extrato", "Todo dia cruzamos o que entrou no banco com o que era esperado."],
      ["Avisamos os atrasos", "Você recebe a lista de pendências para decidir a cobrança."],
    ],
    perguntas: [
      ["Vocês fazem a cobrança dos clientes?", "Entregamos a lista de atrasos organizada; o contato com o cliente segue o combinado com a sua empresa na implantação."],
      ["Funciona com boleto, Pix e cartão?", "Sim. Conciliamos os recebimentos de qualquer meio que caia na conta da empresa."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
  },
  {
    slug: "conciliacao-bancaria",
    nome: "Conciliação bancária",
    resumo: "Conferência das movimentações bancárias para identificar divergências.",
    titulo: "Cada movimento do banco conferido com o seu financeiro.",
    lead: "Cruzamos os extratos de todas as contas com os lançamentos da empresa para que o saldo do sistema seja o mesmo do banco.",
    resumoLateral: [
      ["Rotina", "Diária"],
      ["Contas", "Todas as contas e cartões da empresa"],
      ["Resultado", "Saldo conferido e divergências apontadas"],
    ],
    oQueFazemos: [
      ["Importação dos extratos", "Extratos de todas as contas entram no sistema, sem digitação manual."],
      ["Cruzamento dos lançamentos", "Cada entrada e saída é ligada ao seu lançamento correspondente."],
      ["Divergências apontadas", "Tarifas, valores errados ou lançamentos faltando aparecem para correção."],
      ["Saldo confiável", "O saldo que você vê no relatório é o mesmo do banco."],
    ],
    passos: [
      ["Recebemos os extratos", "Pela integração bancária ou pelo arquivo do banco."],
      ["Conciliamos", "Ligamos cada movimento ao lançamento certo."],
      ["Resolvemos o que sobrou", "Consultamos você apenas sobre o que não tem explicação."],
    ],
    perguntas: [
      ["Preciso dar senha do banco?", "Não. Trabalhamos com extratos, arquivos do banco ou acesso de consulta, sem permissão para movimentar."],
      ["E se houver diferença?", "Apontamos a divergência com o detalhe do movimento para você confirmar."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a9 9 0 1 1-9-9M21 3v6h-6\"/><path d=\"m8 12 2.5 2.5L16 9\"/></svg>",
  },
  {
    slug: "fluxo-de-caixa",
    nome: "Fluxo de caixa",
    resumo: "Visibilidade das entradas e saídas realizadas e previstas.",
    titulo: "Veja hoje como estará o caixa nos próximos meses.",
    lead: "Juntamos o que já entrou e saiu com o que está previsto para mostrar quando sobra dinheiro e quando vai faltar, a tempo de agir.",
    resumoLateral: [
      ["Atualização", "Semanal"],
      ["Horizonte", "Próximos 90 dias"],
      ["Formato", "Realizado e previsto lado a lado"],
    ],
    oQueFazemos: [
      ["Fluxo realizado", "Tudo o que entrou e saiu, por categoria, já conciliado com o banco."],
      ["Fluxo projetado", "Contas a pagar e a receber viram previsão dia a dia."],
      ["Alertas de falta de caixa", "Mostramos com antecedência as semanas em que o saldo fica apertado."],
      ["Cenários", "Simulamos o efeito de uma compra, contratação ou antecipação antes de você decidir."],
    ],
    passos: [
      ["Organizamos as bases", "Contas a pagar, a receber e saldos bancários conciliados."],
      ["Montamos a projeção", "Previsão de entradas e saídas para os próximos 90 dias."],
      ["Revisamos com você", "Mostramos os pontos de atenção e as decisões em aberto."],
    ],
    perguntas: [
      ["Qual a diferença para o extrato do banco?", "O extrato mostra o passado. O fluxo de caixa junta o passado com o que já está previsto, para você enxergar o futuro."],
      ["Com que frequência é atualizado?", "A rotina padrão é semanal, e o período pode ser ajustado ao seu negócio."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 3v18h18M7 14l4-4 3 3 5-6\"/></svg>",
  },
  {
    slug: "relatorios-gerenciais",
    nome: "Relatórios gerenciais",
    resumo: "Informações financeiras organizadas para apoiar decisões empresariais.",
    titulo: "Relatórios que mostram para onde vai o dinheiro.",
    lead: "Todo mês você recebe DRE gerencial, fluxo de caixa e análise por centro de custo, explicados em linguagem clara.",
    resumoLateral: [
      ["Entrega", "Mensal"],
      ["Inclui", "DRE gerencial e fluxo de caixa"],
      ["Acompanhamento", "Reunião para revisar os números"],
    ],
    oQueFazemos: [
      ["DRE gerencial", "Receitas, custos, despesas e resultado do mês, comparados ao mês anterior."],
      ["Resultado por área", "Centros de custo mostram quais áreas, produtos ou unidades dão resultado."],
      ["Comparativos", "Mês a mês e acumulado do ano, para enxergar tendências."],
      ["Explicação dos números", "Um especialista comenta os pontos que merecem atenção."],
    ],
    passos: [
      ["Fechamos o mês", "Com tudo lançado e conciliado."],
      ["Montamos os relatórios", "DRE, fluxo de caixa e análises combinadas."],
      ["Apresentamos", "Revisamos os números com você e registramos as decisões."],
    ],
    perguntas: [
      ["Isso substitui a contabilidade?", "Não. Os relatórios gerenciais servem para a gestão; a contabilidade continua cuidando das obrigações fiscais. Organizamos as informações para facilitar o trabalho dela."],
      ["Posso pedir um relatório específico?", "Sim. Ajustamos os relatórios às perguntas que a sua empresa precisa responder."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6M8 13h8M8 17h5\"/></svg>",
  },
  {
    slug: "indicadores-financeiros",
    nome: "Indicadores financeiros",
    resumo: "Acompanhamento de desempenho e evolução dos resultados.",
    titulo: "Os números certos para acompanhar a empresa.",
    lead: "Definimos com você os indicadores que importam para o seu negócio e acompanhamos a evolução de cada um, mês a mês.",
    resumoLateral: [
      ["Atualização", "Mensal"],
      ["Exemplos", "Margem, ticket médio, prazo de recebimento"],
      ["Formato", "Painel com metas e evolução"],
    ],
    oQueFazemos: [
      ["Escolha dos indicadores", "Selecionamos os indicadores que respondem às perguntas da sua gestão."],
      ["Metas por indicador", "Cada número ganha uma referência para saber se está bom ou não."],
      ["Evolução no tempo", "Gráficos mostram a tendência dos últimos meses."],
      ["Pontos de atenção", "Destacamos o que saiu da meta e o que pode explicar a mudança."],
    ],
    passos: [
      ["Definimos juntos", "Quais indicadores e quais metas fazem sentido."],
      ["Medimos todo mês", "Com base nos dados já organizados e conciliados."],
      ["Discutimos os desvios", "O que mudou, por que mudou e o que fazer."],
    ],
    perguntas: [
      ["Quantos indicadores acompanham?", "Começamos com poucos e relevantes, e ampliamos conforme a maturidade da gestão."],
      ["Preciso de algum sistema novo?", "Não necessariamente. Trabalhamos a partir dos dados que a empresa já tem."],
    ],
    icone: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20V10M18 20V4M6 20v-4\"/></svg>",
  },
];
