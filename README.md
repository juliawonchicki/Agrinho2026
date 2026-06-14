# 🌿 Verde que Alimenta — Guia Tecnológico Contra o Desperdício

> *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*

Projeto front-end desenvolvido para o **Concurso Agrinho 2026**, Categoria Programação — **Subcategoria 3: Front-End (HTML, CSS e JavaScript)**.

---

## 🎯 Objetivo do Projeto

O **Verde que Alimenta** é uma plataforma interativa voltada a pequenos produtores rurais e cooperativas que desejam reduzir o desperdício de alimentos na cadeia logística por meio de tecnologias sustentáveis.

Estima-se que cerca de **30% dos alimentos produzidos no Brasil** se perdem antes de chegar ao consumidor, principalmente por falhas na logística: quebra da cadeia do frio, embalagens inadequadas, rotas ineficientes e gestão manual imprecisa. A plataforma apresenta, de forma visual e acessível, as causas desse desperdício e as soluções tecnológicas mais eficazes para cada tipo de cultura — conectando o tema do Agrinho 2026 à realidade do agronegócio brasileiro.

---

## 🚀 Funcionalidades

- **Seção "O Problema"** — apresenta os 4 principais vilões do desperdício na logística agrícola, com dados de impacto estimado para cada um.
- **Roteiro Interativo** — o usuário seleciona sua cultura (Grãos, Frutas, Hortaliças, Laticínios ou Carnes) e a plataforma carrega dinamicamente as principais causas de perda e as soluções tecnológicas sustentáveis mais adequadas, além de uma tecnologia em destaque com métricas de impacto.
- **Simulador de Impacto** — formulário interativo onde o produtor informa sua produção estimada (em toneladas/mês), o tipo de cultura e o cenário de adoção tecnológica. O simulador calcula e exibe o potencial de alimento recuperado, economia financeira, água virtual economizada e emissões de CO₂ evitadas, com equivalências visuais e tecnologias recomendadas.
- **Barra de Acessibilidade** — controles para alto contraste e ajuste de tamanho de fonte (aumentar/diminuir), disponíveis em todas as páginas.
- **Contadores Animados** — estatísticas globais com animação de contagem ao carregar a página.
- **Design Responsivo** — layout adaptado para celulares, tablets e desktops via CSS Media Queries.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|---|---|
| **HTML5** | Estrutura semântica com tags `section`, `article`, `nav`, `main`, `footer`, `button`, `input`, `label`, `select` e atributos de acessibilidade (`aria-*`, `role`) |
| **CSS3** | Estilização com variáveis CSS (`--cores`), Flexbox, Grid, Media Queries para responsividade, transições e efeitos `hover` |
| **JavaScript (ES6+)** | Manipulação do DOM, gerenciamento de eventos, lógica do simulador, troca dinâmica de conteúdo do roteiro, animações de contagem e controles de acessibilidade |

Nenhuma biblioteca ou framework externo foi utilizado, conforme as regras da Subcategoria 3.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html       # Estrutura principal do site
├── style.css        # Estilização completa (variáveis, layout, responsividade)
├── script.js        # Lógica interativa (roteiro, simulador, acessibilidade)
├── README.md        # Documentação do projeto
└── img/             # Imagens e ícones SVG/PNG utilizados no site
    ├── logotipo.png
    ├── graos.svg
    ├── frutas.svg
    ├── hortalicas.svg
    ├── laticinios.svg
    ├── carnes.svg
    ├── termometro.svg
    ├── embalagens.svg
    ├── rotas.png
    └── gestao.svg
```

---

## 🎨 Créditos e Referências

**Dados e conteúdo:**
- [Embrapa](https://www.embrapa.br) — dados sobre perdas pós-colheita no Brasil
- [FAO (ONU)](https://www.fao.org) — estatísticas globais de desperdício alimentar
- [Nações Unidas Brasil](https://brasil.un.org) — Agenda 2030, Meta ODS 12.3
- [Agrinho / Sistema FAEP](https://www.sistemafaep.org.br/agrinho/) — tema e regulamento do concurso

**Imagens e ícones:**
- Ícones SVG criados pelo autor com auxílio do editor de vetores [Inkscape](https://inkscape.org/) e [Canva](https://www.canva.com/).
- Logotipo: criado pelo autor no Canva.

---

## 📋 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Abra o arquivo `index.html` diretamente no navegador, ou utilize a extensão **Live Server** no VS Code para visualização com recarregamento automático.

Não há dependências externas — o projeto roda 100% no navegador, sem necessidade de servidor ou instalação de pacotes.

---

## 🌐 Acesso Online

O projeto está publicado via **GitHub Pages** e pode ser acessado em:

> 🔗 [https://seu-usuario.github.io/seu-repositorio](https://seu-usuario.github.io/seu-repositorio)

*(substitua pelo link real do seu GitHub Pages)*

---

## 🏆 Concurso Agrinho 2026

- **Instituição promotora:** SENAR-PR e SEED-PR
- **Categoria:** Programação
- **Subcategoria:** 3 — Front-End (HTML, CSS e JavaScript)
- **Tema:** *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*
- **Escola:** [Nome da sua escola]
- **Professor(a) orientador(a):** [Nome do professor]
