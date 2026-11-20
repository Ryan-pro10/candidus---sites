// Depoimentos de clientes. Enquanto a lista estiver vazia, o site mostra os compromissos
// (src/data/compromissos.js) no lugar. Com pelo menos um depoimento autorizado, os cards aparecem.
//
// Só cadastre depoimentos REAIS, com autorização por escrito do cliente para publicar
// (guarde o print ou o e-mail da autorização). Modelo de pedido: docs/pedido-de-depoimento.md
//
// Formato de cada item:
// {
//   texto: "O que o cliente disse, com as palavras dele.",
//   nome: "Nome Sobrenome",
//   cargo: "Sócia-administradora",          // opcional
//   empresa: "Nome da empresa",              // opcional
//   nota: 5,                                 // opcional, de 1 a 5 (mostra estrelas)
//   foto: "/assets/img/depoimentos/arquivo.jpg", // opcional; sem foto, mostra as iniciais
//   autorizado: true,                        // false = fica guardado aqui, mas não aparece no site
// },

export const depoimentos = [];

// EXEMPLOS INVENTADOS, só para visualizar o layout da aba "Depoimentos".
// Aparecem apenas com `npm run dev` (com a etiqueta "Exemplo") e NUNCA no site publicado (`npm run build`).
// Quando tiver os depoimentos reais, cadastre-os na lista `depoimentos` acima. Pode apagar esta lista.
export const exemplos = [
  {
    texto: "A gente fechava o mês lá pelo dia 20, e ainda faltava conferir alguma coisa. Agora o relatório chega na primeira semana e eu consigo conversar com meu sócio sobre os números antes de qualquer compra maior.",
    nome: "Mariana Albuquerque",
    cargo: "Sócia",
    empresa: "Clínica odontológica",
  },
  {
    texto: "Eu achava que o problema era falta de dinheiro. Com o fluxo de caixa organizado ficou claro que era prazo: pagávamos fornecedor em 28 dias e recebíamos em 60. Ajustamos isso em dois meses.",
    nome: "Rafael Moreira",
    cargo: "Diretor",
    empresa: "Distribuidora de alimentos",
  },
  {
    texto: "Não precisei trocar de banco nem de sistema. Eles se adaptaram ao que a gente já usava, e hoje eu só aprovo os pagamentos pelo celular.",
    nome: "Juliana Prado",
    cargo: "Proprietária",
    empresa: "Loja de materiais de construção",
  },
];

// Reais e autorizados: aparecem sempre.
export const publicados = depoimentos.filter((d) => d.autorizado === true && d.texto && d.nome);

// Lista da aba "Depoimentos": os reais e, só no modo de desenvolvimento, os exemplos.
export const paraAba = [
  ...publicados,
  ...(import.meta.env.DEV ? exemplos.map((d) => ({ ...d, exemplo: true })) : []),
];
