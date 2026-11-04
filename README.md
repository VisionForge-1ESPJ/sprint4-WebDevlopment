# JOVI Lens — Câmera Contextual para Estudantes

Projeto das Sprints 3 e 4 (entrega conjunta de **Web Development** e **Front-End Design**) — FIAP, Engenharia de Software (Bacharelado), 2º semestre.

Aplicação em **React** com landing page, rotas públicas e privadas, hooks nativos e customizados, **Tailwind CSS**, consumo de APIs e persistência via `localStorage`.

## Sprint 4 — o que foi adicionado

- **Landing page** (`/`) com as seções A Solução, Público-Alvo, Galeria, Nossa Equipe e Contato (HTML semântico, CSS Grid e layout responsivo)
- **Rotas** com React Router: públicas (`/`, `/login`) e privada (`/app`, protegida por `ProtectedRoute`)
- **Autenticação simulada** (cadastro e login) com contexto React
- **Hooks customizados** em `src/hooks`: `useLocalStorage`, `useCapturas`, `useCamera`, `useInspiracoes`, `useContato`, `useAuth`
- **Tailwind CSS v4** substituindo o CSS puro
- **APIs**: Lorem Picsum (fotos de referência de enquadramento por modo, com favoritos) e JSONPlaceholder (envio mockado do formulário de contato)

## Contexto do desafio

A JOVI (marca da vivo Mobile Communication Co., Ltd. no Brasil) propôs repensar a experiência de câmera dos smartphones para o público estudante Full-time — que usa a câmera para estudar, se relacionar socialmente e se expressar. O problema: a maioria dos usuários só usa o modo automático, sem explorar modos pensados para cada contexto do dia a dia.

## A solução: JOVI Lens

O JOVI Lens é um protótipo de câmera inteligente e contextual. Em vez de um único modo automático, ele:

- Sugere automaticamente um modo de captura (Estudo, Social ou Perfil) com um nível de confiança, simulando uma câmera que entende o contexto
- Permite capturar uma foto pela **câmera real do dispositivo** (`getUserMedia`) ou, quando a câmera não está disponível/permitida, gerar uma **captura simulada** — garantindo que a demonstração sempre funcione
- Reúne tudo em uma **central de conteúdo** única, com busca e destaque para as capturas mais recentes
- Deixa o próprio usuário criar **álbuns** e organizar as capturas livremente
- Mantém um **histórico** de tudo que foi adicionado, movido ou removido
- Calcula **estatísticas de uso**: total de capturas, modo mais usado, média de capturas por dia, percentual de uso por modo e espaço aproximado ocupado
- Envia exclusões para uma **lixeira**, de onde dá para restaurar ou excluir definitivamente
- Salva tudo automaticamente no `localStorage` do navegador, sem precisar de backend

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) como bundler e servidor de desenvolvimento
- JavaScript (ES6+)
- Tailwind CSS 4 e React Router
- `localStorage` (Web Storage API)
- `MediaDevices.getUserMedia` (API de câmera do navegador) e `Canvas` para captura/processamento de imagem
- APIs: [Lorem Picsum](https://picsum.photos/) e [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Deploy na [Vercel](https://vercel.com/)

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
npm install
```

## Como executar o projeto

Ambiente de desenvolvimento:

```bash
npm run dev
```

O terminal vai mostrar o endereço local (geralmente `http://localhost:5173`). Abra no navegador.

Build de produção:

```bash
npm run build
npm run preview
```

> Observação sobre a câmera: o navegador só libera acesso à câmera em `localhost` ou em conexões `https` (como o deploy na Vercel). Se a permissão for negada ou não houver câmera disponível, use o botão **"Simular captura"** — o app funciona normalmente sem precisar de webcam.

## Usuários e senhas de teste

A autenticação é simulada (dados no `localStorage`). Use a conta de teste ou crie uma na tela de login:

- E-mail: `aluno@jovi.com`
- Senha: `jovi123`

## Uso de IA

Foi utilizada IA (Claude, da Anthropic) como assistente de programação na Sprint 4: apoio na migração dos estilos de CSS puro para Tailwind, na estrutura de rotas públicas/privadas, na extração da lógica para hooks customizados e na integração com as APIs. Todo o código foi revisado, testado e entendido pela equipe.

## Link do Deploy na Vercel

https://jovi-lens.vercel.app

## Link do repositório

https://github.com/nickbelo2201/sprint3-WebDevlopment
