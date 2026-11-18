# Candidus — site

Site em [Astro](https://astro.build) 6. Gera HTML estático: o resultado é igual ao site anterior, mas o header, o rodapé e os serviços ficam num lugar só.

## Como usar

Precisa de Node 22.12 ou mais novo.

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:4321 e atualiza ao salvar
npm run build      # gera o site final em dist/
npm run preview    # mostra o dist/ como ficará no ar
```

Para publicar, envie a pasta `dist/` para a hospedagem (Netlify, Vercel, Cloudflare Pages ou qualquer servidor de arquivos).

## Onde fica cada coisa

```
src/
  pages/
    index.astro                 página inicial (junta as seções abaixo)
    servicos/[slug].astro       modelo das páginas de serviço (/servicos/fluxo-de-caixa/ etc.)
  layouts/Base.astro            <head>, header, rodapé e scripts de todas as páginas
  components/
    Header.astro                menu do topo + menu mobile
    Footer.astro                rodapé
    IconArrow.astro             seta dos botões
    home/                       uma seção da home por arquivo:
                                Hero · Servicos · Relatorios · Cinematic · ComoFunciona
                                Planos · Confianca · CtaFinal · Contato
  data/servicos.js              TEXTOS DOS SERVIÇOS: cards da home + páginas de cada serviço
public/                         copiado como está para o site final
  css/main.css                  importa os demais arquivos de CSS, na ordem da cascata
  css/{base,components,layout,sections,utilities,pages}/
  js/main.js                    menu, header ao rolar, animações, gráfico do hero
  js/formulario.js              validação e envio do formulário (WhatsApp)
  assets/img/                   fotos e logos
```

## Tarefas comuns

- **Mudar o texto de um serviço:** edite `src/data/servicos.js`. O card da home e a página do serviço mudam juntos.
- **Criar um serviço novo:** acrescente um item em `src/data/servicos.js`. A página `/servicos/<slug>/` é criada sozinha.
- **Mudar um link do menu ou o logo:** `src/components/Header.astro`. Vale para todas as páginas.
- **Número do WhatsApp do formulário:** variável `WHATSAPP` em `public/js/formulario.js` (hoje um número provisório).
- **Domínio:** quando tiver, preencha `site` em `astro.config.mjs`.

A ordem dos `@import` em `public/css/main.css` é a ordem da cascata. Um arquivo carregado depois sobrescreve o anterior.
