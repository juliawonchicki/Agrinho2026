# Verde que Alimenta — Guia Tecnológico Contra o Desperdício

> *Tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*

Projeto front-end desenvolvido para o **Concurso Agrinho 2026**, Categoria Programação — **Subcategoria 3: Front-End (HTML, CSS e JavaScript)**.

---

##  Objetivo do Projeto

O **Verde que Alimenta** é uma plataforma interativa voltada a pequenos produtores rurais e cooperativas que desejam reduzir o desperdício de alimentos na cadeia logística por meio de tecnologias sustentáveis.

Estima-se que cerca de **30% dos alimentos produzidos no Brasil** se perdem antes de chegar ao consumidor, principalmente por falhas na logística: quebra da cadeia do frio, embalagens inadequadas, rotas ineficientes e gestão manual imprecisa. A plataforma apresenta, de forma visual e acessível, as causas desse desperdício e as soluções tecnológicas mais eficazes para cada tipo de cultura — conectando o tema do Agrinho 2026 à realidade do agronegócio brasileiro.

---

## Funcionalidades

- **Seção "O Problema"** — apresenta os 4 principais vilões do desperdício na logística agrícola, com dados de impacto estimado para cada um.
- **Roteiro Interativo** — o usuário seleciona sua cultura (Grãos, Frutas, Hortaliças, Laticínios ou Carnes) e a plataforma carrega dinamicamente as principais causas de perda e as soluções tecnológicas sustentáveis mais adequadas, além de uma tecnologia em destaque com métricas de impacto.
- **Simulador de Impacto** — formulário interativo onde o produtor informa sua produção estimada (em toneladas/mês), o tipo de cultura e o cenário de adoção tecnológica. O simulador calcula e exibe o potencial de alimento recuperado, economia financeira, água virtual economizada e emissões de CO₂ evitadas, com equivalências visuais e tecnologias recomendadas.
- **Barra de Acessibilidade** — controles para alto contraste e ajuste de tamanho de fonte (aumentar/diminuir), disponíveis em todas as páginas.
- **Contadores Animados** — estatísticas globais com animação de contagem ao carregar a página.
- **Design Responsivo** — layout adaptado para celulares, tablets e desktops via CSS Media Queries.

---

## Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|---|---|
| **HTML5** | Estrutura semântica com tags `section`, `article`, `nav`, `main`, `footer`, `button`, `input`, `label`, `select` e atributos de acessibilidade (`aria-*`, `role`) |
| **CSS3** | Estilização com variáveis CSS (`--cores`), Flexbox, Grid, Media Queries para responsividade, transições e efeitos `hover` |
| **JavaScript (ES6+)** | Manipulação do DOM, gerenciamento de eventos, lógica do simulador, troca dinâmica de conteúdo do roteiro, animações de contagem e controles de acessibilidade |

Nenhuma biblioteca ou framework externo foi utilizado, conforme as regras da Subcategoria 3.

---

## Estrutura de Arquivos

```
Agrinho2026/
├── index.html       # Estrutura principal do site
├── css/
│   └── style.css    # Estilização completa (variáveis, layout, responsividade)
├── js/
│   └── script.js    # Lógica interativa (roteiro, simulador, acessibilidade)
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

## Créditos e Referências

As imagens, vídeos, ícones, textos e demais recursos visuais utilizados neste projeto foram produzidos ou organizados para fins educacionais no contexto do Concurso Agrinho 2026.

As ferramentas de inteligência artificial podem ter sido utilizadas como apoio na criação de textos ou ideias visuais do projeto.
Todos os recursos foram utilizados com finalidade educacional, respeitando o tema do concurso e com o objetivo de tornar o aprendizado mais visual, acessível e interativo.

**Dados e conteúdo:**
- [Embrapa](https://www.embrapa.br) — dados sobre perdas pós-colheita no Brasil
- [FAO (ONU)](https://www.fao.org) — estatísticas globais de desperdício alimentar
- [Nações Unidas Brasil](https://brasil.un.org) — Agenda 2030, Meta ODS 12.3
- [Agrinho / Sistema FAEP](https://www.sistemafaep.org.br/agrinho/) — tema e regulamento do concurso

**Imagens e ícones:**
- Ícones criados pelo autor com auxílio do [Canva](https://www.canva.com/).
- Imagens que foram retiradas no [Pixabay](https://pixabay.com) sob a licença gratuita Pixabay Content License.

| Arquivo | Descrição | Fonte |
|---|---|---|
| `img/calculadora.svg` | Imagem de fundo — calculadora (editado no canva) | [Link da imagem](https://pixabay.com/pt/photos/escrit%C3%B3rio-caneta-calculadora-1574717/) |
| `img/carnes.svg` | Ícone de carnes | [Link da imagem](https://pixabay.com/pt/vectors/eu-no-comida-carne-bife-cru-148789/) |
| `img/embalagens.svg` | Ícone de embalagens | [Link da imagem](https://pixabay.com/pt/photos/biscoitos-sacos-de-pl%C3%A1stico-pacote-6380437/) |
| `img/embalagens-fundo.jpg` | Imagem de fundo — embalagens | [Link da imagem](https://pixabay.com/pt/photos/copo-%C3%B3culos-garrafas-255281/) |
| `img/frutas.svg` | Ícone de frutas | [Link da imagem](https://pixabay.com/pt/vectors/tigela-de-frutas-frutas-comida-2411828/) |
| `img/gestao.svg` | Ícone de gestão | [Link da imagem](https://pixabay.com/pt/vectors/di%C3%A1rio-escola-escrit%C3%B3rio-educa%C3%A7%C3%A3o-147191/) |
| `img/gestao-fundo.jpg` | Imagem de fundo — gestão | [Link da imagem](https://pixabay.com/pt/photos/calend%C3%A1rio-encontro-planejamento-10045176/) |
| `img/graos.svg` | Ícone de grãos | [Link da imagem](https://pixabay.com/pt/vectors/trigo-espig%C3%A3o-gr%C3%A3o-saco-7847325/) |
| `img/hero-fundo.jpg` | Imagem de fundo — hero | [Link da imagem](https://pixabay.com/pt/photos/soja-m%C3%A3o-agro-colheita-sementes-1831703/) |
| `img/hortalicas.svg` | Ícone de hortaliças | [Link da imagem](https://pixabay.com/pt/vectors/ai-gerado-salada-verde-pepino-8184586/) |
| `img/laticinios.svg` | Ícone de laticínios | [Link da imagem](https://pixabay.com/pt/vectors/leite-garrafa-latic%C3%ADnio-bebida-576439/) |
| `img/rotas-fundo.jpg` | Imagem de fundo — rotas | [Link da imagem](https://pixabay.com/pt/photos/mapa-lupa-rota-argentina-rotas-5307466/) |
| `img/temperatura-fundo.jpg` | Imagem de fundo — temperatura | [Link da imagem](https://pixabay.com/pt/photos/p%C3%B4r-do-sol-deserto-calor-apimentado-7880263/) |
| `img/termometro.svg` | Ícone de termômetro | [Link da imagem](https://pixabay.com/pt/vectors/term%C3%B4metro-temperatura-quente-153138/) |
| `img/logotipo.png` | Logotipo do projeto | Autoral — criado no Canva |
| `img/rotas.png` | Ícone de rotas | Autoral — criado no Canva |

---

## Como Executar Localmente

1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/juliawonchicki/Agrinho2026.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Agrinho2026
   ```
3. Abra o arquivo `index.html` diretamente no navegador, ou utilize a extensão **Live Server** no VS Code para visualização com recarregamento automático.

Não há dependências externas — o projeto roda 100% no navegador, sem necessidade de servidor ou instalação de pacotes.

---

## Acesso Online

O projeto está publicado via **GitHub Pages** e pode ser acessado em:

> 🔗 [https://juliawonchicki.github.io/Agrinho2026/](https://juliawonchicki.github.io/Agrinho2026/)

---

## Concurso Agrinho 2026

- **Autora:** Julia Monteiro Wonchicki 
- **Escola:** Colégio Estadual Aldo Dallago
- **Município:** Ibaiti - Paraná
- **Professor orientador:** Luiz Gustavo Tavares
