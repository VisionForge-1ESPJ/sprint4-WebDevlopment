# JOVI Lens — Câmera Contextual para Estudantes

Projeto do **Challenge JOVI 2026** — FIAP, Engenharia de Software (Bacharelado).
**Sprint 4**, entrega conjunta das disciplinas **Web Development** e **Front-End Design** (mesmo projeto, evolução da Sprint 3).

## Links

| Item | Endereço |
| --- | --- |
| Deploy na Vercel | https://sprint3-web-devlopment-lilac.vercel.app/ |
| Repositório Git | https://github.com/VisionForge-1ESPJ/sprint3-WebDevlopment |

## Sumário

1. [Integrantes](#integrantes)
2. [Contexto do desafio](#contexto-do-desafio)
3. [A solução: JOVI Lens](#a-solução-jovi-lens)
4. [Tecnologias utilizadas](#tecnologias-utilizadas)
5. [Como instalar as dependências](#como-instalar-as-dependências)
6. [Como executar o projeto](#como-executar-o-projeto)
7. [Como executar os servidores](#como-executar-os-servidores)
8. [Usuários e senhas de teste](#usuários-e-senhas-de-teste)
9. [Roteiro rápido de teste](#roteiro-rápido-de-teste)
10. [Rotas da aplicação](#rotas-da-aplicação)
11. [Landing page](#landing-page)
12. [Painel do aplicativo](#painel-do-aplicativo)
13. [APIs consumidas](#apis-consumidas)
14. [Hooks nativos e customizados](#hooks-nativos-e-customizados)
15. [Estrutura de componentes e props](#estrutura-de-componentes-e-props)
16. [Responsividade](#responsividade)
17. [Persistência de dados](#persistência-de-dados)
18. [Deploy (Git + Vercel)](#deploy-git--vercel)
19. [Requisitos da Sprint 4 x onde foram atendidos](#requisitos-da-sprint-4-x-onde-foram-atendidos)
20. [O que mudou em relação à Sprint 3](#o-que-mudou-em-relação-à-sprint-3)
21. [Uso de IA](#uso-de-ia)

## Integrantes

| Nome | RM |
| --- | --- |
| Nicholas Belo | RM571063 |
| Leonardo Ursini | RM569812 |
| Gustavo Braga | RM569211 |
| Henry Gabriel | RM570063 |
| Matheus Carvalho | RM569454 |

A mesma lista está no arquivo `INTEGRANTES.TXT`, na raiz do projeto.

## Contexto do desafio

A JOVI (marca da vivo Mobile Communication Co., Ltd. no Brasil) propôs repensar a experiência de câmera dos smartphones para o público **estudante full-time**, que usa a câmera para estudar, se relacionar socialmente e se expressar. O problema: a maioria dos usuários só usa o modo automático, sem explorar os recursos do aparelho, seja por confusão na interface, falta de clareza dos modos ou ausência de funcionalidades para necessidades do dia a dia.

## A solução: JOVI Lens

O JOVI Lens é um protótipo de câmera inteligente e contextual. Em vez de um único modo automático, ele organiza a experiência em três modos pensados para o dia do estudante:

| Modo | Para quê |
| --- | --- |
| **Estudo** | Fotografar quadros, slides e anotações de aula |
| **Social** | Registrar momentos rápidos com os amigos |
| **Perfil** | Selfies e conteúdo de auto-expressão |

Funcionalidades:

- **Sugestão inteligente de modo**, com nível de confiança, simulando uma câmera que entende o contexto
- **Captura pela câmera real** do dispositivo (`getUserMedia`) ou **captura simulada**, que garante que a demonstração funcione mesmo sem webcam ou sem permissão
- **Inspirações de enquadramento**: fotos de referência de cada modo, vindas de uma API pública, que podem ser favoritadas
- **Central de conteúdo** com busca (por modo, álbum ou origem) e destaque para as 3 capturas mais recentes
- **Álbuns** criados pelo usuário, com visualização do conteúdo de cada um e opção de tirar capturas do álbum
- **Histórico** do que foi adicionado, editado, removido e restaurado
- **Estatísticas de uso**: total, modo mais usado, média por dia, percentual por modo e espaço aproximado ocupado
- **Lixeira** para restaurar capturas ou excluí-las definitivamente
- **Login** para acessar o painel e **landing page** pública explicando a solução

## Tecnologias utilizadas

- [React 19](https://react.dev/): componentes funcionais, props, hooks nativos e customizados
- [React Router 7](https://reactrouter.com/): rotas públicas e privadas
- [Tailwind CSS 4](https://tailwindcss.com/) (via plugin `@tailwindcss/vite`): estilização e responsividade
- [Vite](https://vite.dev/): bundler e servidor de desenvolvimento
- JavaScript (ES6+) e JSX
- [oxlint](https://oxc.rs/docs/guide/usage/linter): lint (`npm run lint`)
- `localStorage` (Web Storage API): persistência dos dados
- `MediaDevices.getUserMedia` e `Canvas`: captura e processamento de imagem no navegador
- APIs externas: [Wikimedia Commons](https://commons.wikimedia.org/w/api.php) (API pública) e [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (API mockada)
- Git + GitHub e deploy na [Vercel](https://vercel.com/)

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) **18 ou superior** (inclui o npm).

1. Extraia o `.zip` (ou clone o repositório) e entre na pasta do projeto:

   ```bash
   cd sprint3_JS2026
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Como executar o projeto

**Ambiente de desenvolvimento:**

```bash
npm run dev
```

O terminal mostra o endereço local, geralmente `http://localhost:5173`. Abra no navegador.

**Build de produção e pré-visualização:**

```bash
npm run build
npm run preview
```

**Lint (opcional):**

```bash
npm run lint
```

> **Câmera:** o navegador só libera a câmera em `localhost` ou em conexões `https` (como o deploy na Vercel). Se a permissão for negada ou não houver câmera, use o botão **"Simular captura"**: o app funciona normalmente sem webcam.
>
> **Internet:** é necessária para carregar as inspirações de enquadramento e para enviar o formulário de contato (APIs externas). O restante funciona offline.

## Como executar os servidores

O projeto **não possui back-end próprio**, portanto **não há servidor adicional para subir**: basta o `npm run dev`. Os dados do usuário ficam no `localStorage` do navegador, e as duas APIs consumidas são públicas e externas, sem chave de acesso e sem cadastro.

## Usuários e senhas de teste

A autenticação é **simulada no front-end** (dados no `localStorage`), apenas para demonstrar as rotas privadas. Use a conta de teste:

| E-mail | Senha |
| --- | --- |
| `aluno@jovi.com` | `jovi123` |

Também é possível criar uma conta própria em **Entrar > Não tenho conta — cadastrar** (senha com no mínimo 6 caracteres). As contas ficam salvas somente no navegador em que foram criadas.

> Por ser um protótipo acadêmico sem back-end, as senhas não são criptografadas. Não use senhas reais.

## Roteiro rápido de teste

1. Abra a landing page (`/`) e navegue pelo menu: **A Solução, Público-Alvo, Galeria, Nossa Equipe, Contato**.
2. Preencha o formulário de **Contato** e envie. Deve aparecer a mensagem com o número de protocolo (resposta da API mockada).
3. Tente acessar `/app` sem estar logado: o app redireciona para `/login` (rota privada).
4. Entre com `aluno@jovi.com` / `jovi123`. Você é levado ao painel.
5. Em **Nova captura**, escolha um modo e clique em **Simular captura** (ou em **Tirar foto**, se a câmera estiver liberada). A captura aparece na **Central de conteúdo**, nas **Estatísticas** e no **Histórico**.
6. Em **Inspirações de enquadramento**, troque o modo e favorite fotos com o coração.
7. Crie um álbum em **Álbuns**, mova uma captura para ele pelo seletor "Mover para álbum" e clique no álbum para ver o conteúdo.
8. Exclua uma captura (✕): ela vai para a **Lixeira**, de onde pode ser restaurada ou excluída definitivamente.
9. Use **Sair** no menu e confirme que `/app` volta a exigir login.
10. Reduza a largura da janela para ver a adaptação a tablet e celular (menu vira botão "Menu").

## Rotas da aplicação

| Rota | Tipo | Descrição |
| --- | --- | --- |
| `/` | Pública | Landing page com A Solução, Público-Alvo, Galeria, Nossa Equipe e Contato |
| `/login` | Pública | Login e cadastro. Se já houver sessão, redireciona para o painel |
| `/app` | **Privada** | Painel do aplicativo. Protegida por `ProtectedRoute`: sem sessão, redireciona para `/login` e, após entrar, volta à rota pedida |
| `*` | Pública | Página 404 |

Todas usam o `Layout` (cabeçalho com menu, conteúdo e rodapé). As âncoras do menu (`/#solucao`, `/#publico`, `/#galeria`, `/#equipe`, `/#contato`) funcionam também a partir de outras rotas. O arquivo `vercel.json` reescreve todas as rotas para o `index.html`, evitando erro 404 ao atualizar a página em `/app` ou `/login` no deploy.

## Landing page

Cumpre o menu mínimo exigido, com uma seção para cada item:

| Seção | Conteúdo |
| --- | --- |
| **A Solução** | Problema, solução e como funciona, além da lista de recursos |
| **Público-Alvo** | Estudantes full-time e por que cada modo é relevante para eles |
| **Galeria** | Mockups de celular de cada modo (Estudo, Social e Perfil), em `figure`/`figcaption` |
| **Nossa Equipe** | Nome, RM, função e descrição de cada integrante |
| **Contato** | Formulário com validação, enviado por POST a uma API mockada, e outras formas de contato |

Tecnicamente:

- **HTML semântico:** `header`, `nav` (com `aria-label`), `main`, `section` (com `aria-labelledby`), `article`, `figure`, `figcaption`, `aside`, `footer`, `form`/`label`, listas `ul`/`li` e `lang="pt-BR"`.
- **CSS Grid** (utilitários `grid`, `grid-cols-*` do Tailwind) nos layouts de seções, cards, galeria, equipe, contato, painel, estatísticas e histórico.
- **Acessibilidade:** `alt` nas imagens, `aria-pressed` nos botões de alternância, `aria-expanded`/`aria-controls` no menu mobile e `role="alert"`/`role="status"` nas mensagens de erro e sucesso.

## Painel do aplicativo

Rota privada `/app`, com duas colunas no desktop e uma coluna no celular:

- **Coluna da esquerda:** Sugestão inteligente, Nova captura, Inspirações de enquadramento e Estatísticas.
- **Coluna da direita:** Central de conteúdo, Álbuns, Histórico de ações e Lixeira.

## APIs consumidas

| API | Tipo | Onde é usada | Método |
| --- | --- | --- | --- |
| [Wikimedia Commons](https://commons.wikimedia.org/w/api.php) | Pública de terceiros, sem chave | Bloco **Inspirações de enquadramento** (`useInspiracoes`) | `GET` com busca por tema |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) | Mockada | Formulário de **Contato** (`useContato`) | `POST /posts` |

- **Inspirações:** cada modo busca um tema (Estudo: `students studying`; Social: `group of students friends campus`; Perfil: `headshot student portrait`) e exibe 6 fotos com título e link para a página original. As favoritas ficam salvas no `localStorage`. Há estados de carregando, erro (com botão "Tentar de novo") e lista vazia, e a requisição é cancelada (`AbortController`) ao trocar de modo.
- **Contato:** valida nome, e-mail e mensagem antes de enviar; mostra "Enviando...", o protocolo retornado pela API em caso de sucesso, ou mensagem de erro.

## Hooks nativos e customizados

**Hooks nativos do React usados:** `useState`, `useEffect`, `useRef`, `useContext`, `useMemo`, `useCallback`. Do React Router: `useNavigate`, `useLocation`.

**Hooks customizados** (`src/hooks`), que concentram a lógica e deixam os componentes só com a parte visual:

| Hook | Responsabilidade |
| --- | --- |
| `useLocalStorage(chave, padrao)` | `useState` que persiste automaticamente no `localStorage` |
| `useCapturas()` | Estado e regras de capturas, álbuns, lixeira e histórico (adicionar, mover, excluir, restaurar, criar álbum) |
| `useCamera()` | Liga e desliga a câmera real e expõe o `ref` do vídeo, a disponibilidade e o erro |
| `useInspiracoes(modo)` | Consome a API do Wikimedia Commons |
| `useContato()` | Envia o formulário para a API mockada e controla o status |
| `useAuth()` | Acessa o contexto de autenticação |

O estado de login fica em um **Context** (`src/context/AuthProvider.jsx`), com `entrar`, `cadastrar`, `sair` e `usuario`.

## Estrutura de componentes e props

Estrutura pai → filho com componentes funcionais:

```
main.jsx
└── BrowserRouter > AuthProvider > App
    └── Layout (Header, Outlet, Footer)
        ├── Home (/)
        │   └── Hero, Solucao, PublicoAlvo, GaleriaSolucao, Equipe, Contato   (todos sobre Secao)
        ├── Login (/login)
        ├── ProtectedRoute
        │   └── Painel (/app)
        │       ├── SugestaoModo
        │       ├── Captura
        │       ├── Inspiracoes
        │       ├── Estatisticas
        │       ├── Galeria
        │       │   └── CapturaItem
        │       ├── Albuns
        │       ├── Historico
        │       └── Lixeira
        └── NaoEncontrada (*)
```

Exemplos de props: `Painel` obtém tudo de `useCapturas()` e repassa para os filhos; `Galeria` recebe `capturas`, `albuns`, `onExcluir`, `onMoverAlbum` e repassa `captura`, `albuns`, `destaque` e os callbacks para `CapturaItem`; `Albuns` recebe `albuns`, `capturas`, `onCriar` e `onMoverAlbum`; `Secao` recebe `id`, `titulo`, `subtitulo`, `fundo` e `children`.

Organização das pastas:

```
src/
├── assets/        logo
├── components/    componentes do painel e de layout
│   └── landing/   seções da landing page
├── context/       contexto de autenticação
├── data/          modos de captura e dados da equipe
├── hooks/         hooks customizados
├── pages/         Home, Login, Painel e NaoEncontrada
├── App.jsx        definição das rotas
├── main.jsx       ponto de entrada
└── index.css      Tailwind e tema (cores e fonte)
```

## Responsividade

A estilização é *mobile-first* com os breakpoints do Tailwind (`sm` 640px, `md` 768px, `lg` 1024px):

- **Mobile:** uma coluna, menu recolhível com botão "Menu", cards empilhados e formulários em largura total.
- **Tablet:** grades de 2 colunas nas seções e galerias.
- **Desktop:** menu horizontal, grades de 3 colunas e painel em duas colunas (`md:grid-cols-[1fr_1.3fr]`).

As galerias de capturas e da lixeira usam `grid-cols-[repeat(auto-fill,minmax(...))]` para se ajustarem à largura disponível. A tag `viewport` está configurada no `index.html`.

## Persistência de dados

Os dados ficam no `localStorage`, com o prefixo `jovilens_`:

| Chave | Conteúdo |
| --- | --- |
| `capturas` | Capturas (imagem em base64, modo, origem, álbum e data) |
| `albuns` | Álbuns (nome e cor) |
| `lixeira_capturas` | Capturas excluídas |
| `historico` | Últimas 50 ações |
| `favoritos_inspiracao` | Fotos de referência favoritadas |
| `usuarios` e `sessao` | Contas cadastradas e usuário logado |

Operações com `Math` seguem em uso: arredondamento das estatísticas (média por dia, percentuais e espaço em KB), sorteio da sugestão de modo e da confiança, e cor aleatória dos álbuns.

## Deploy (Git + Vercel)

- O código é versionado no GitHub; a Vercel faz o deploy automático a cada `push` na branch `main`.
- Configuração: framework **Vite**, comando de build `npm run build`, pasta de saída `dist`.
- O `vercel.json` garante o funcionamento das rotas do React Router.
- Endereço: https://sprint3-web-devlopment-lilac.vercel.app/

## Requisitos da Sprint 4 x onde foram atendidos

| Requisito | Atendimento |
| --- | --- |
| React: integração do projeto da Sprint anterior | Landing page e aplicativo migrados para React (`src/`) |
| Componentização e uso de props | Seção [Estrutura de componentes e props](#estrutura-de-componentes-e-props) |
| Rotas públicas e privadas | `/` e `/login` públicas; `/app` privada com `ProtectedRoute` |
| Hooks nativos | `useState`, `useEffect`, `useRef`, `useContext`, `useMemo`, `useCallback` |
| Hooks customizados (lógica separada da parte visual) | `src/hooks` |
| Tailwind CSS | Toda a estilização usa Tailwind; não há CSS próprio além do tema em `index.css` |
| Responsividade (desktop, tablet e mobile) | Seção [Responsividade](#responsividade) |
| Consumo de API (própria, pública ou mockada) | Wikimedia Commons (pública) e JSONPlaceholder (mockada) |
| Deploy com Git + Vercel | Seção [Deploy](#deploy-git--vercel) |
| Landing com menu: A Solução, Público-Alvo, Galeria, Nossa Equipe, Contato | Seção [Landing page](#landing-page) |
| HTML semântico e CSS Grid | Seção [Landing page](#landing-page) |
| Mantém a solução da Challenge (não é proposta nova) | Mesmo JOVI Lens da Sprint 3, evoluído |
| README com tecnologias, instalação, execução, servidores, usuários, IA e deploy | Este arquivo |
| `INTEGRANTES.TXT` com nome e RM de todos | Na raiz do projeto |

## O que mudou em relação à Sprint 3

**Adicionado**

- Landing page com as 5 seções exigidas
- Rotas com React Router, `Layout`, `ProtectedRoute`, página de login/cadastro e página 404
- Contexto de autenticação simulada
- Hooks customizados (`useLocalStorage`, `useCapturas`, `useCamera`, `useInspiracoes`, `useContato`, `useAuth`)
- Tailwind CSS 4
- Consumo de APIs (Wikimedia Commons e JSONPlaceholder) e bloco de inspirações com favoritos
- Visualização do conteúdo de cada álbum, com opção de tirar capturas do álbum
- `vercel.json` para as rotas funcionarem no deploy

**Modificado**

- A lógica que ficava no `App.jsx` foi movida para hooks, e o `App.jsx` passou a só definir as rotas
- Todos os componentes tiveram o CSS puro trocado por classes do Tailwind
- Cabeçalho e rodapé passaram a ter menu de navegação e a lista de integrantes
- Idioma da página ajustado para `pt-BR`

**Removido**

- `App.css` (substituído pelo Tailwind)
- `utils/storage.js` (substituído por `useLocalStorage`)
- `Trash.jsx` (componente antigo sem uso)

## Uso de IA

Foi utilizada IA generativa (**Claude**, da Anthropic, pelo Claude Code) como assistente de programação durante a Sprint 4. Ela foi usada para: (1) migrar os estilos de CSS puro para classes do Tailwind; (2) estruturar as rotas públicas e privadas e o contexto de autenticação; (3) extrair a lógica dos componentes para hooks customizados; (4) criar a landing page e os componentes das seções; (5) integrar as APIs do Wikimedia Commons e do JSONPlaceholder; e (6) revisar o projeto contra os requisitos do enunciado e redigir este README. A ideia da solução, a definição do público e dos modos de captura, as decisões do projeto e a conferência dos resultados são da equipe. Todo o código gerado foi revisado, executado e testado pelo grupo antes da entrega.
