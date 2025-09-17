# Link Bio

Projeto simples e responsivo feito com React + TypeScript e Vite para servir como uma página de "link na bio". Estilização com Tailwind CSS v4 e ícones do Lucide.

## Requisitos
- Node.js 18+ (recomendado LTS)
- pnpm 9+ (recomendado)

Verifique as versões instaladas:

```powershell
node -v
pnpm -v
```

## Tecnologias
- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Lucide React (ícones)
- ESLint (lint)

## Como rodar o projeto

1. Instale as dependências:

```powershell
pnpm install
```

2. Ambiente de desenvolvimento (hot reload):

```powershell
pnpm dev
```

- O Vite normalmente sobe em http://localhost:5173 (o terminal mostra a porta exata).

3. Build de produção:

```powershell
pnpm build
```

4. Pré-visualizar o build de produção:

```powershell
pnpm preview
```

5. Lint do código:

```powershell
pnpm lint
```

## Estrutura do projeto
```
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.tsx         # Ponto de entrada do React
    ├── App.tsx          # Componente principal
    ├── global.css       # Importa Tailwind v4
    ├── assets/
    │   ├── logo.png
    │   └── favicon.ico
    └── vite-env.d.ts
```

## Configuração do Tailwind CSS v4
- O Tailwind está habilitado via `@tailwindcss/vite` (plugin) e `@import "tailwindcss";` em `src/global.css`.
- Não há `tailwind.config.js` no v4 por padrão; a maioria das utilities já vem pronta.

## Variáveis/Ambiente
- Este projeto não usa variáveis de ambiente por padrão. Caso precise, use um arquivo `.env` e acesse via `import.meta.env` no Vite.

## Dúvidas comuns (Troubleshooting)
- Erro ao rodar `pnpm dev`:
  - Confira se as dependências foram instaladas (`pnpm install`).
  - Garanta que a versão do Node é 18+.
  - Se a porta já estiver em uso, o Vite troca automaticamente; olhe o terminal para a URL correta.
- Estilos do Tailwind não aparecem:
  - Confirme que `src/global.css` está importado em `src/main.tsx` (ou em `App.tsx`).
  - Reinicie o servidor (`Ctrl+C` e rode `pnpm dev` novamente).
- Ícones não renderizam:
  - Verifique a importação: `import { Instagram, Youtube } from 'lucide-react'`.

## Scripts disponíveis
- `pnpm dev` — inicia o servidor de desenvolvimento.
- `pnpm build` — gera a build de produção (TypeScript + Vite).
- `pnpm preview` — pré-visualiza a build gerada.
- `pnpm lint` — verifica problemas de lint.

## Licença
Este projeto é de uso pessoal do autor. Adapte conforme necessário.
