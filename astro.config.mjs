// Configuração do Astro: https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from "astro/config";

export default defineConfig({
  // site: "https://www.SEU-DOMINIO.com.br", // preencha quando tiver o domínio
  build: { inlineStylesheets: "never" },
  compressHTML: false,
});
