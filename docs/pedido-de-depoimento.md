# Pedido de depoimento para clientes

Modelos para pedir um depoimento curto aos clientes da Candidus e a autorização para publicar no site.
Troque o que está entre colchetes antes de enviar.

## Versão WhatsApp

> Oi, [nome do cliente]! Tudo bem?
>
> Estamos colocando no ar o novo site da Candidus e queríamos muito contar com a sua opinião.
> Você toparia escrever 2 ou 3 frases sobre como está sendo trabalhar com a gente?
>
> Pode ser algo como: como era o financeiro antes, o que mudou e o que você mais gosta no nosso trabalho.
>
> Se puder, me diga também como prefere aparecer: nome, cargo e nome da empresa (ou só o primeiro nome, se preferir).
>
> E, para publicarmos, preciso só que você responda "Autorizo a publicação" junto com o texto. 😊
>
> Muito obrigado pela confiança!
> [seu nome] – Candidus BPO Financeiro

## Versão e-mail

**Assunto:** Sua opinião no novo site da Candidus

> Olá, [nome do cliente],
>
> Estamos lançando o novo site da Candidus e gostaríamos de incluir a experiência de quem já trabalha com a gente.
>
> Você poderia responder este e-mail com um depoimento curto (2 a 4 frases)? Algumas ideias para ajudar:
>
> - Como era a rotina financeira da empresa antes da Candidus?
> - O que mudou depois que começamos a trabalhar juntos?
> - O que você mais valoriza no nosso serviço?
>
> Informe também como prefere ser identificado (nome, cargo e empresa, ou apenas o primeiro nome).
> Se quiser, pode mandar uma foto para aparecer ao lado do depoimento.
>
> Para publicarmos, basta incluir na resposta a frase:
> **"Autorizo a Candidus a publicar este depoimento, com a identificação acima, no site e nas redes da empresa."**
>
> Obrigado pela parceria!
>
> [seu nome]
> Candidus BPO Financeiro

## Depois de receber

1. Guarde o print ou o e-mail com a autorização (é a sua prova, se alguém questionar).
2. Use as palavras do cliente. Pode corrigir erros de digitação, mas não mude o sentido nem acrescente promessas.
3. Cadastre em `src/data/depoimentos.js` com `autorizado: true`.
4. Se o cliente pedir para retirar, mude para `autorizado: false` (ou apague) e publique de novo.
5. Com 3 depoimentos, a seção fica completa. Com 1 ou 2, ela também funciona.
