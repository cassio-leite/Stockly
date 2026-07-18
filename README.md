# Stockly 📦

O **Stockly** é uma plataforma moderna e completa voltada para o gerenciamento inteligente de estoques e controle transacional de vendas. Desenvolvida com as tecnologias mais recentes do ecossistema JavaScript/TypeScript, a aplicação oferece uma interface limpa, intuitiva e de alta performance para otimizar processos operacionais e comerciais.

---

## 🔗 Demonstração

> 🌐 **Link do Deploy:** https://stockly-two-ecru.vercel.app/

---

## 📸 Preview

Abaixo, veja uma prévia visual da interface atual do projeto:

![Preview](./public/preview.png)

---

## 🎯 Objetivo

O objetivo principal do Stockly é centralizar e automatizar o controle de inventário de produtos e o fluxo de transações de vendas. Através de um design responsivo e arquitetura modular, o projeto visa resolver problemas comuns de perdas de estoque, falta de previsibilidade de vendas e lentidão no registro de novos pedidos. 

Além do propósito de mercado, o projeto serve como um ecossistema consolidado de aprendizado técnico sobre o **Next.js App Router**, renderização no lado do servidor (**React Server Components**), persistência de dados com **Prisma** e gerenciamento de infraestrutura local via **Docker**.

---

## ✨ Funcionalidades Existentes

O projeto encontra-se em sua fase de infraestrutura e definição de layout inicial, contando com os seguintes recursos já implementados:

*   **Estrutura de Layout Global (Sidebar):** Uma barra de navegação lateral persistente e responsiva, facilitando o trânsito entre as telas do sistema.
*   **Navegação Ativa Dinâmica:** Botões inteligentes na barra lateral (`SidebarButton`) que detectam dinamicamente a rota atual via hook `usePathname` do Next.js e alteram seu visual (alternando entre variantes `ghost` e `secondary` do Shadcn UI).
*   **Roteamento Centralizado (App Router):** Roteamento moderno otimizado dividido em três páginas principais:
    *   🏠 **Dashboard (Página Inicial):** `/` - Visão geral de métricas e gráficos (boilerplate inicial).
    *   📦 **Produtos:** `/products` - Listagem e gerenciamento de itens em estoque (boilerplate inicial).
    *   🛒 **Vendas:** `/sales` - Registro e acompanhamento de transações de vendas (boilerplate inicial).
*   **Modelagem de Banco de Dados Relacional:** Estrutura relacional do banco configurada via Prisma ORM mapeando:
    *   `Product`: Cadastro de mercadorias com preço (`Decimal`) e estoque disponível (`Int`).
    *   `Sale`: Registro do momento das transações de vendas.
    *   `SaleProduct`: Tabela intermediária de associação muitos-para-muitos que detalha quais produtos pertencem a quais vendas, registrando a quantidade vendida e o preço unitário praticado no momento da venda.
*   **Banco de Dados Containerizado:** Arquivo de configuração Docker Compose pronto para subir uma instância local e segura do PostgreSQL 15, com persistência automática de dados em volume local mapeado.

---

## 🛠️ Tecnologias Utilizadas

A pilha tecnológica foi criteriosamente selecionada para garantir robustez, tipagem estática segura, velocidade de desenvolvimento e excelente performance final.

### Front-end
*   **[React 18](https://react.dev/):** Biblioteca para construção de interfaces reativas e modulares.
*   **[Next.js 14.2 (App Router)](https://nextjs.org/):** Framework React com renderização híbrida (Server-Side Rendering / Static Site Generation) e otimização automática de rotas.
*   **[TypeScript](https://www.typescriptlang.org/):** Supersuposto JavaScript que adiciona tipagem estática e segurança contra erros de tempo de desenvolvimento.
*   **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários CSS para estilização ágil, limpa e responsiva.

### Componentes & UI
*   **[Shadcn UI](https://ui.shadcn.com/):** Coleção de componentes de UI reutilizáveis e acessíveis, estilizados com Tailwind CSS e baseados em primitivos do **Radix UI**.
*   **[Lucide React](https://lucide.dev/):** Pacote de ícones vetoriais modernos e consistentes.
*   **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate):** Plugin para gerenciamento fluido de transições e animações de interface.

### Banco de Dados & Infraestrutura
*   **[PostgreSQL 15](https://www.postgresql.org/):** Banco de dados relacional de código aberto extremamente robusto.
*   **[Prisma ORM (v7.3.0)](https://www.prisma.io/):** Toolkit moderno de banco de dados para TypeScript, facilitando consultas e migrações tipadas.
*   **[Docker](https://www.docker.com/):** Plataforma para criação e execução de containers isolados (PostgreSQL).

---

## 📁 Estrutura do Projeto

Abaixo está uma árvore de diretórios simplificada que ilustra a organização modular da aplicação:

```text
stockly/
 ├── app/                      # Pasta raiz do Next.js App Router
 │    ├── _components/         # Componentes globais da aplicação (Sidebar, etc.)
 │    │    └── ui/             # Componentes de base do Shadcn UI (ex: Button)
 │    ├── _lib/                # Utilitários de apoio e configurações auxiliares (utils.ts)
 │    ├── products/            # Rota e página de listagem de Produtos
 │    │    └── page.tsx
 │    ├── sales/               # Rota e página de listagem de Vendas
 │    │    └── page.tsx
 │    ├── globals.css          # Estilos globais e variáveis HSL do Tailwind
 │    ├── layout.tsx           # Layout principal que envelopa a aplicação com a Sidebar
 │    └── page.tsx             # Rota inicial do Dashboard (Home)
 ├── prisma/                   # Arquivos relacionados ao Prisma ORM
 │    └── schema.prisma        # Definição dos modelos de banco de dados e conexão
 ├── docker-compose.yml        # Configuração do container PostgreSQL local
 ├── package.json              # Manifesto de dependências e scripts npm
 ├── tailwind.config.ts        # Configurações do Tailwind CSS e variáveis de tema
 └── tsconfig.json             # Configurações do compilador TypeScript
```

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para clonar, configurar e rodar o projeto localmente em sua máquina.

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada).
*   [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/).

### 1. Clonar e Acessar o Diretório
```bash
git clone <url-do-seu-repositorio>
cd stockly
```

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto contendo as credenciais de acesso ao banco de dados:

```env
# URL de conexão do Prisma com o banco de dados PostgreSQL
DATABASE_URL="postgresql://postgres:password@localhost:5433/app?schema=public"
```

> 💡 *Nota: A porta padrão configurada no arquivo `docker-compose.yml` para mapeamento externo é a `5433` para evitar conflitos com instâncias locais de Postgres rodando na porta `5432`.*

### 3. Iniciar o Banco de Dados PostgreSQL
Suba o container do PostgreSQL em segundo plano utilizando o Docker Compose:

```bash
docker compose up -d
```

### 4. Executar Migrations do Banco de Dados
Com o banco ativo, configure as tabelas necessárias executando a sincronização do Prisma:

```bash
npx prisma db push
```
*Ou, se preferir criar um histórico oficial de migrations:*
```bash
npx prisma migrate dev --name init
```

### 5. Instalar Dependências
Instale as dependências listadas no `package.json`:

```bash
npm install
```

### 6. Executar o Servidor de Desenvolvimento
Inicie o servidor local do Next.js:

```bash
npm run dev
```

Abra o seu navegador e acesse: **[http://localhost:3000](http://localhost:3000)**.

### Outros Scripts Disponíveis

*   **Build de Produção:**
    ```bash
    npm run build
    ```
*   **Iniciar Servidor de Produção (pós-build):**
    ```bash
    npm run start
    ```
*   **Linter (verificação estática de erros de código):**
    ```bash
    npm run lint
    ```

---

## 📱 Responsividade

A interface do Stockly foi desenvolvida utilizando a estratégia *mobile-first* indireta com o suporte do Tailwind CSS, aplicando breakpoints específicos para adaptar os blocos de visualização.
*   **Desktops e Notebooks:** Menu lateral fixo (`w-64`) otimizando o preenchimento de telas horizontais largas.
*   **Tablets e Mobile:** Preparado para colapsar o menu lateral ou rearranjar elementos para se acomodar de forma fluida a telas verticais de dispositivos móveis.

---

## ⚡ Performance

Algumas das técnicas focadas em performance adotadas neste projeto incluem:
*   **Otimização de Fontes:** Uso do `next/font/google` para carregar a fonte **Inter** diretamente de forma autohospedada, eliminando requisições adicionais de rede externas no carregamento inicial e evitando problemas de *Layout Shift* (Cumulative Layout Shift).
*   **React Server Components (RSC):** O Next.js renderiza a estrutura estática no servidor por padrão, minimizando a quantidade de JavaScript que o cliente final precisa baixar, interpretar e executar.
*   **Estilização Otimizada:** O Tailwind CSS varre todo o código em tempo de build para gerar um arquivo CSS estático contendo exclusivamente as classes utilizadas de fato (*Purged CSS*), garantindo arquivos ultra-leves.

---

## ♿ Acessibilidade (a11y)

*   **Estrutura Semântica:** Utilização de elementos nativos do HTML (como `<aside>`, `<main>`, `<nav>`, `<h1>` e `<button>`) que facilitam a leitura por leitores de tela e robôs de busca.
*   **Primitivos Radix UI:** O componente de botão herda recursos avançados de acessibilidade fornecidos nativamente pelo Radix UI, incluindo gerenciamento correto de foco, navegação por teclado e atributos `aria-*`.

---

## 🎓 Aprendizados Adquiridos

O desenvolvimento inicial do Stockly permitiu solidificar conceitos cruciais de engenharia de software moderno:
1.  **Arquitetura Baseada em App Router:** Entendimento prático de como organizar rotas de forma limpa, diferenciar *Client Components* (utilizando `"use client"`) de *Server Components*, e manter layouts globais persistentes.
2.  **Modelagem de Relacionamentos Complexos:** Estruturação de relacionamentos muitos-para-muitos (N:N) com tabelas intermediárias que guardam estados históricos cruciais (como preço unitário no momento exato de cada venda).
3.  **Contenerização de Ambientes de Desenvolvimento:** Criação de fluxos replicáveis de desenvolvimento local com Docker Compose, garantindo que qualquer desenvolvedor que baixe o projeto consiga rodá-lo instantaneamente sem necessidade de instalar o PostgreSQL localmente na máquina hospedeira.

---

## 🔮 Melhorias Futuras

O roadmap planejado para as próximas versões do Stockly inclui:

- [ ] **CRUD de Produtos:** Implementação de telas interativas para adicionar, editar e excluir produtos do catálogo.
- [ ] **Interface de Vendas Interativa:** Tela de criação de vendas dinâmica onde o usuário seleciona múltiplos produtos, define quantidades com cálculo de subtotal em tempo real e finaliza a transação deduzindo automaticamente o estoque.
- [ ] **Dashboard com Gráficos Analíticos:** Gráficos interativos de faturamento diário/mensal, produtos mais vendidos, margem de lucro e alertas de estoque crítico utilizando bibliotecas como Recharts.
- [ ] **Filtros e Paginação de Listagens:** Filtros avançados por categoria, preço e busca textual rápida nas telas de produtos e histórico de vendas.
- [ ] **Autenticação de Usuários:** Camada de segurança para acesso exclusivo de funcionários e administradores através do AuthJS (NextAuth) ou Clerk.

---

## ✍️ Autor

Esta aplicação está sendo desenvolvida por um profissional entusiasta da tecnologia moderna:

*   **Seu Nome**
*   📧 **E-mail:** [cassiocarmo77@gmail.com]
*   💼 **LinkedIn:** [https://www.linkedin.com/in/cassio-leite/]
*   🐙 **GitHub:** [https://github.com/cassio-leite]
*   🌐 **Portfólio:** [https://portfolio-cassio-leite.vercel.app/]


---

## 📄 Licença

Este projeto está disponível para fins de estudo e portfólio. Nenhuma licença formal foi anexada ao repositório até o momento, caracterizando-o como um software de uso proprietário/pessoal. Caso deseje reutilizar partes deste código comercialmente, por favor, entre em contato com o autor.
