/**
 * script.js — Alimento Inteligente | Concurso Agrinho 2026
 *
 * Módulos:
 *  1. Navegação (menu mobile)
 *  2. Animação de contadores (hero stats)
 *  3. Banco de dados de culturas
 *  4. Roteiro interativo (filtros + renderização dinâmica)
 *  5. Simulador de impacto (cálculos + resultados)
 *  6. Utilitários (formatação, scroll)
 */

"use strict";

/* ============================================================
   1. DADOS: BANCO DE CULTURAS
   ============================================================ */

const CULTURAS = {
  graos: {
    nome: "Grãos",
    imgSrc: "imagens/cultura-graos.svg",
    imgAlt: "Ícone de grãos de cereal",
    descricao: 'Soja, milho, trigo, arroz e feijão. A categoria que mais gera receita no agronegócio brasileiro.',
    taxaDesperdicio: 0.12,
    precoMedio: 1800,
    aguaVirtualPorTonelada: 1800,
    co2PorTonelada: 1.2,
    causas: [
      {texto: 'Armazenamento com umidade elevada, causando fungos e aflatoxinas nos silos.' },
      {texto: 'Transporte em carretas sem cobertura adequada, com perdas por derramamento nas estradas.' },
      {texto: 'Infestação de pragas de armazenagem (carunchos, traças) por ausência de monitoramento.' },
      {texto: 'Má secagem pós-colheita, elevando a umidade dos grãos acima dos limites seguros.' },
      {texto: 'Silos sem sistemas de aeração automatizados, favorecendo o aquecimento da massa de grãos.' },
    ],
    solucoes: [
      {texto: 'Sensores de temperatura e umidade em silos com alertas automáticos via SMS/app.' },
      {texto: 'Secadores inteligentes com controle automatizado de temperatura e fluxo de ar.' },
      {texto: 'Roteirização logística com IA para minimizar tempo em trânsito e perdas por vibração.' },
      {texto: 'Big Bags biodegradáveis e Sacolas Herméticas reutilizáveis para pequenos produtores.' },
      {texto: 'Software de gestão de estoque integrado com previsão de demanda por mercado.' },
    ],
    destaque: {
      titulo: 'Sensor IoT de Monitoramento de Silos',
      descricao: 'Dispositivos IoT (Internet das Coisas) instalados dentro dos silos medem continuamente temperatura e umidade da massa de grãos. Ao detectar anomalias, disparam alertas em tempo real para o produtor pelo celular — permitindo intervenção antes que o dano se alastre para toda a carga.',
      metricas: [
        {texto: 'Reduz perdas em até 60%' },
        {texto: 'ROI médio em 18 meses' },
        {texto: 'Tecnologia adaptável a pequenas fazendas' },
      ],
    },
  },

  frutas: {
    nome: "Frutas",
    imgSrc: "imagens/cultura-frutas.svg",
    imgAlt: "Ícone de frutas",
    descricao: "Laranja, banana, maçã, manga, morango e demais frutas frescas de alta perecibilidade.",
    taxaDesperdicio: 0.38,
    precoMedio: 3200,
    aguaVirtualPorTonelada: 900,
    co2PorTonelada: 2.5,
    causas: [
      {texto: 'Quebra da cadeia do frio durante o transporte, acelerando o amadurecimento e a deterioração.' },
      {texto: 'Embalagens inadequadas que causam amassamentos, abrasões e pressão excessiva nos frutos.' },
      {texto: 'Colheita no ponto errado de maturação, deixando frutas inviáveis para o transporte de longa distância.' },
      {texto: 'Estradas com buracos e vibrações excessivas causando danos mecânicos irreversíveis.' },
      {texto: 'Falta de estruturas de câmara fria na fazenda para aguardar o escoamento ideal da produção.' },
    ],
    solucoes: [
      {texto: 'Câmaras frias modulares de baixo custo para associações de produtores rurais.' },
      {texto: 'Embalagens biodegradáveis com espuma natural e amortecimento vegetal para proteção individual.' },
      {texto: 'Tecnologia de Atmosfera Controlada (CA) com ajuste de O₂ e CO₂ nos contêineres.' },
      {texto: 'App de gestão de colheita com índices de maturação por espécie e destino do mercado.' },
      {texto: 'Plataformas de conexão direta produtor-consumidor para reduzir elos logísticos desnecessários.' },
    ],
    destaque: {
      titulo: 'Atmosfera Controlada e Câmara Fria Modular',
      descricao: 'A tecnologia de Atmosfera Controlada (CA) regula os gases dentro das câmaras de armazenamento, reduzindo o oxigênio e aumentando o CO₂ para desacelerar o metabolismo das frutas. Em conjunto com câmaras frias modulares de baixo custo, é possível estender a vida útil de frutas como maçã e manga em até 6 vezes sem uso de conservantes químicos.',
      metricas: [
        {texto: 'Vida útil estendida em até 6x' },
        {texto: 'Sem conservantes químicos' },
        {texto: 'Compatível com produção orgânica' },
      ],
    },
  },

  hortalicas: {
    nome: "Hortaliças",
    imgSrc: "imagens/cultura-hortalicas.svg",
    imgAlt: "Ícone de hortaliças",
    descricao: "Alface, tomate, cenoura, beterraba, pimentão e demais vegetais frescos de alta rotatividade.",
    taxaDesperdicio: 0.45,
    precoMedio: 2400,
    aguaVirtualPorTonelada: 280,
    co2PorTonelada: 1.8,
    causas: [
      {texto: 'Altíssima perecibilidade natural: folhosas podem murchar em menos de 12h sem refrigeração.' },
      {texto: 'Excesso de umidade durante a lavagem ou o transporte causa apodrecimento rápido das folhas.' },
      {texto: 'Embalagens pesadas demais comprimem os vegetais, causando danos na base da pilha.' },
      {texto: 'Falta de previsão de demanda: produção em excesso sem destino certo leva ao descarte no campo.' },
      {texto: 'Transporte inadequado misturando hortaliças com produtos que liberam etileno, acelerando a decomposição.' },
    ],
    solucoes: [
      {texto: 'Hidrocooling (pré-resfriamento a água) imediatamente após a colheita para reduzir o calor de campo.' },
      {texto: 'Caixas plásticas retornáveis (CPRs) padronizadas para eliminar amassamentos no transporte.' },
      {texto: 'Revestimentos naturais comestíveis (à base de cera de carnaúba) para prolongar a vida de prateleira.' },
      {texto: 'Plataformas digitais de comercialização antecipada (compra na roça) para planejar a colheita.' },
      {texto: 'Mini-centrais de abastecimento locais com câmara fria compartilhada por cooperativas.' },
    ],
    destaque: {
      titulo: 'Revestimento Comestível de Cera de Carnaúba',
      descricao: 'Derivada da palma-de-carnaúba, planta nativa do Nordeste brasileiro, a cera de carnaúba aplicada em fina película sobre frutas e hortaliças cria uma barreira natural que reduz a perda de água, retarda o amadurecimento e protege contra microrganismos — sem nenhum produto sintético. É segura, biodegradável, de baixo custo e já aprovada pelas principais agências regulatórias do mundo.',
      metricas: [
        {texto: '100% natural e comestível' },
        {texto: 'Prateleira até 3x mais longa' },
        {texto: 'Matéria-prima 100% brasileira' },
      ],
    },
  },

  laticinios: {
    nome: "Laticínios",
    imgSrc: "imagens/cultura-laticinios.svg",
    imgAlt: "Ícone de laticínios",
    descricao: "Leite fluido, queijos, iogurtes e manteiga. Produtos com cadeia do frio crítica e prazos curtos.",
    taxaDesperdicio: 0.2,
    precoMedio: 4800,
    aguaVirtualPorTonelada: 1020,
    co2PorTonelada: 3.2,
    causas: [
      {texto: 'Quebra da cadeia do frio na coleta do leite, especialmente em pequenos produtores sem tanque refrigerado.' },
      {texto: 'Higienização insuficiente de equipamentos de ordenha e tanques, contaminando o leite com bactérias.' },
      {texto: 'Falta de controle de qualidade no campo: leite com acidez elevada descartado na indústria.' },
      {texto: 'Embalagens com selagem deficiente permitindo entrada de ar e aceleração da oxidação.' },
      {texto: 'Superprodução em períodos de entressafra sem planejamento para derivados (queijo, manteiga).' },
    ],
    solucoes: [
      {texto: 'Tanques de resfriamento a granel para associações de pequenos produtores com energia solar.' },
      {texto: 'Sensores de temperatura integrados à coleta: motorista recebe alerta se o leite estiver fora do padrão.' },
      {texto: 'App de controle de qualidade em campo: o próprio produtor testa acidez e pH via kit portátil.' },
      {texto: 'Aproveitamento do leite fora do padrão para produção de biogás e biofertilizante.' },
      {texto: 'Orientação técnica para transformação em derivados de maior vida útil (queijo, ricota) em períodos de excesso.' },
    ],
    destaque: {
      titulo: 'Tanque Coletivo de Resfriamento a Energia Solar',
      descricao: 'Tanques de resfriamento coletivos, alimentados por painéis fotovoltaicos instalados nas propriedades, permitem que grupos de pequenos produtores rurais mantenham o leite refrigerado desde a ordenha até a coleta pela cooperativa. A solução elimina a dependência da rede elétrica, reduz custos de energia e garante a qualidade microbiológica do leite — resolvendo o principal gargalo de perdas nessa cadeia.',
      metricas: [
        {texto: '100% energia renovável' },
        {texto: 'Ideal para agricultura familiar' },
        {texto: 'Reduz rejeição na indústria em 75%' },
      ],
    },
  },

  carnes: {
    nome: 'Carnes',
    imgSrc: "imagens/cultura-carnes.svg",
    imgAlt: "Ícone de carnes",
    descricao: 'Carne bovina, suína, de frango e pescados. Alta densidade proteica e cadeia logística complexa.',
    taxaDesperdicio: 0.22,
    precoMedio: 12000,
    aguaVirtualPorTonelada: 15415,
    co2PorTonelada: 27,
    causas: [
      {texto: 'Transporte em temperaturas acima do limite seguro (acima de 4°C para carnes frescas) contamina o produto.' },
      {texto: 'Logística lenta entre frigoríficos e distribuidoras aumenta o tempo de exposição e o risco de deterioração.' },
      {texto: 'Embalagens a vácuo com falha de selagem permitem entrada de oxigênio e crescimento bacteriano acelerado.' },
      {texto: 'Rastreabilidade deficiente impede identificar o ponto de falha quando há lote rejeitado.' },
      {texto: 'Gestão de validade manual em açougues e supermercados leva a estoques com datas vencidas não percebidas.' },
    ],
    solucoes: [
      {texto: 'Embalagens com indicadores de temperatura integrados (etiquetas termocromáticas) visíveis ao consumidor.' },
      {texto: 'Rastreabilidade via QR Code ou blockchain: do boi ao prato, visível por qualquer consumidor.' },
      {texto: 'Veículos refrigerados com monitoramento IoT e alarme automático de temperatura para o motorista.' },
      {texto: 'Sistemas de gestão de validade com IA em câmaras frigoríficas — priorizando saída pelo prazo (FEFO).' },
      {texto: 'Aproveitamento de cortes fora do padrão estético para produção de proteína processada, evitando descarte.' },
    ],
    destaque: {
      titulo: 'Rastreabilidade por QR Code e Blockchain',
      descricao: 'Cada lote de carne recebe um QR Code que registra todo o histórico em um sistema de blockchain: fazenda de origem, data de abate, temperatura de cada etapa logística, data de embalagem e prazo de validade. O consumidor escaneia com o celular e vê todo o trajeto. Em caso de anomalia de temperatura, o sistema emite alerta automático e bloqueia o lote antes que chegue à gôndola.',
      metricas: [
        {texto: 'Transparência total ao consumidor' },
        {texto: 'Bloqueio preventivo de lotes suspeitos' },
        {texto: 'Aumenta confiança e valor do produto' },
      ],
    },
  },
};

/* ============================================================
   DADOS: CENÁRIOS DO SIMULADOR
   ============================================================ */

const CENARIOS = {
  basico: { fator: 0.3, nome: "Básico" },
  intermediario: { fator: 0.55, nome: "Intermediário" },
  avancado: { fator: 0.8, nome: "Avançado" },
};

/* Imagens para as equivalências e tecnologias no resultado */
const IMG_EQUIVALENCIAS = {
  pessoas: { src: "imagens/equiv-pessoas.svg", alt: "Família" },
  banho: { src: "imagens/equiv-banho.svg", alt: "Chuveiro" },
  carro: { src: "imagens/equiv-carro.svg", alt: "Carro" },
};

/* ============================================================
   2. MÓDULO: NAVEGAÇÃO MOBILE
   ============================================================ */

function inicializarNavegacao() {
  const botaoToggle = document.getElementById("navToggle");
  const menuNav = document.getElementById("navMenu");

  if (!botaoToggle || !menuNav) return;

  botaoToggle.addEventListener("click", () => {
    const estaAberto = menuNav.classList.toggle("is-open");
    botaoToggle.classList.toggle("is-open", estaAberto);
    botaoToggle.setAttribute("aria-expanded", String(estaAberto));
  });

  menuNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menuNav.classList.remove("is-open");
      botaoToggle.classList.remove("is-open");
      botaoToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (evento) => {
    const clicouFora =
      !menuNav.contains(evento.target) && !botaoToggle.contains(evento.target);
    if (clicouFora && menuNav.classList.contains("is-open")) {
      menuNav.classList.remove("is-open");
      botaoToggle.classList.remove("is-open");
      botaoToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ============================================================
   3. MÓDULO: ANIMAÇÃO DE CONTADORES
   ============================================================ */

function animarContador(elemento, valorFinal, duracaoMs = 1600) {
  const inicio = performance.now();

  function atualizar(timestamp) {
    const progresso = Math.min((timestamp - inicio) / duracaoMs, 1);
    const easedProgresso = 1 - Math.pow(1 - progresso, 3);
    const valorAtual = Math.round(valorFinal * easedProgresso);

    elemento.textContent = valorAtual.toLocaleString("pt-BR");

    if (progresso < 1) {
      requestAnimationFrame(atualizar);
    }
  }

  requestAnimationFrame(atualizar);
}

function inicializarContadores() {
  const contadores = document.querySelectorAll(".stat-numero[data-target]");
  if (!contadores.length) return;

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const elemento = entrada.target;
          const valorFinal = parseInt(elemento.dataset.target, 10);
          animarContador(elemento, valorFinal);
          observer.unobserve(elemento);
        }
      });
    },
    { threshold: 0.5 },
  );

  contadores.forEach((contador) => observer.observe(contador));
}

/* ============================================================
   4. MÓDULO: ROTEIRO INTERATIVO
   ============================================================ */

let culturaAtiva = "graos";

function renderizarCultura(chave) {
  const cultura = CULTURAS[chave];
  if (!cultura) return;

  culturaAtiva = chave;

  // Atualizar imagem e textos do cabeçalho
  const imgGrande = document.getElementById("culturaImgGrande");
  if (imgGrande) {
    imgGrande.src = cultura.imgSrc;
    imgGrande.alt = cultura.imgAlt;
  }
  atualizarTextoElemento("culturaNome", cultura.nome);
  atualizarTextoElemento("culturaDescricao", cultura.descricao);

  // Renderizar causas
  const listaCausas = document.getElementById("causasLista");
  if (listaCausas) {
    listaCausas.innerHTML = "";
    cultura.causas.forEach((causa, index) => {
      const item = criarItemLista(causa, "causa-item", index * 50);
      listaCausas.appendChild(item);
    });
  }

  // Renderizar soluções
  const listaSolucoes = document.getElementById("solucoesLista");
  if (listaSolucoes) {
    listaSolucoes.innerHTML = "";
    cultura.solucoes.forEach((solucao, index) => {
      const item = criarItemLista(solucao, "solucao-item", index * 50);
      listaSolucoes.appendChild(item);
    });
  }

  renderizarTecnologiaDestaque(cultura.destaque);

  const painel = document.getElementById("roteiroPainel");
  if (painel) {
    painel.style.animation = "none";
    void painel.offsetHeight;
    painel.style.animation = "fadeIn 0.4s ease";
  }
}

function criarItemLista(dado, classeCSS, delayMs) {
  const li = document.createElement("li");
  li.classList.add(classeCSS);
  li.setAttribute("role", "listitem");
  li.style.animationDelay = `${delayMs}ms`;

  /*const img = document.createElement("img");
  img.src = dado.imgSrc;
  img.alt = dado.imgAlt;
  img.classList.add("item-img");
  img.setAttribute("aria-hidden", "true");
 */
  const texto = document.createElement("span");
  texto.textContent = dado.texto;
/*
  li.appendChild(img);
  */
  li.appendChild(texto);
  return li;
}

function renderizarTecnologiaDestaque(destaque) {
  atualizarTextoElemento("tecTitulo", destaque.titulo);
  atualizarTextoElemento("tecDescricao", destaque.descricao);

  const containerMetricas = document.getElementById("tecMetricas");
  if (!containerMetricas) return;

  containerMetricas.innerHTML = "";
  destaque.metricas.forEach((metrica) => {
    const span = document.createElement("span");
    span.classList.add("tec-metrica");
    span.setAttribute("role", "listitem");

    // const img = document.createElement("img");
    // img.src = metrica.imgSrc;
    // img.alt = metrica.imgAlt;
    // img.classList.add("tec-metrica-img");
    // img.setAttribute("aria-hidden", "true");

    const textoSpan = document.createElement("span");
    textoSpan.textContent = metrica.texto;

    // span.appendChild(img);
    span.appendChild(textoSpan);
    containerMetricas.appendChild(span);
  });
}

function inicializarRoteiroInterativo() {
  const botoesCultura = document.querySelectorAll(".cultura-btn");
  if (!botoesCultura.length) return;

  botoesCultura.forEach((botao) => {
    botao.addEventListener("click", () => {
      const chave = botao.dataset.cultura;

      botoesCultura.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      botao.classList.add("active");
      botao.setAttribute("aria-pressed", "true");

      renderizarCultura(chave);
    });
  });

  renderizarCultura(culturaAtiva);
}

/* ============================================================
   5. MÓDULO: SIMULADOR DE IMPACTO
   ============================================================ */

function calcularImpacto(producaoTon, chavecultura, chaveCenario) {
  const cultura = CULTURAS[chavecultura];
  const cenario = CENARIOS[chaveCenario];

  const desperdicioTotal = producaoTon * cultura.taxaDesperdicio;
  const alimentoRecuperado = desperdicioTotal * cenario.fator;
  const economiaReais = alimentoRecuperado * cultura.precoMedio;
  const aguaEconomizada = alimentoRecuperado * cultura.aguaVirtualPorTonelada;
  const co2Evitado = alimentoRecuperado * cultura.co2PorTonelada * 1000;

  return {
    alimentoRecuperado,
    economiaReais,
    aguaEconomizada,
    co2Evitado,
    cultura,
    cenario,
  };
}

function gerarEquivalencias(resultado) {
  const { alimentoRecuperado, aguaEconomizada, co2Evitado } = resultado;

  const pessoasAlimentadas = Math.round((alimentoRecuperado * 1000) / 2.5);
  const chuveirosEconomizados = Math.round(aguaEconomizada / 0.15);
  const km_carro = Math.round(co2Evitado / 1000 / 0.2);

  return [
    {
      img: IMG_EQUIVALENCIAS.pessoas,
      texto: `Alimentar <strong>${pessoasAlimentadas.toLocaleString("pt-BR")} pessoas</strong> por um mês (estimativa média de 2,5 kg/pessoa/mês)`,
    },
    {
      img: IMG_EQUIVALENCIAS.banho,
      texto: `<strong>${chuveirosEconomizados.toLocaleString("pt-BR")} banhos</strong> de 7 minutos (150L cada) — água virtual preservada`,
    },
    {
      img: IMG_EQUIVALENCIAS.carro,
      texto: `Emissões equivalentes a <strong>${km_carro.toLocaleString("pt-BR")} km</strong> percorridos por um carro a gasolina (200g CO₂/km)`,
    },
  ];
}

function gerarTecnologiasRecomendadas(chavecultura) {
  return CULTURAS[chavecultura].solucoes.slice(0, 4);
}

function exibirResultados(resultado) {
  const placeholder = document.getElementById("resultadoPlaceholder");
  const conteudo = document.getElementById("resultadoConteudo");

  if (placeholder) {
    placeholder.hidden = true;
    placeholder.setAttribute("aria-hidden", "true");
  }
  if (conteudo) {
    conteudo.hidden = false;
    conteudo.removeAttribute("aria-hidden");
  }

  atualizarTextoElemento(
    "resAlimentoSalvo",
    formatarNumero(resultado.alimentoRecuperado, 2),
  );
  atualizarTextoElemento(
    "resEconomia",
    "R$ " + formatarNumero(resultado.economiaReais, 0),
  );
  atualizarTextoElemento(
    "resAgua",
    formatarNumero(resultado.aguaEconomizada, 0),
  );
  atualizarTextoElemento("resCO2", formatarNumero(resultado.co2Evitado, 0));

  // Equivalências
  const listaEquiv = document.getElementById("equivLista");
  if (listaEquiv) {
    listaEquiv.innerHTML = "";
    gerarEquivalencias(resultado).forEach((equiv) => {
      const li = document.createElement("li");
      li.classList.add("equiv-item");
      li.setAttribute("role", "listitem");

      /*
      const img = document.createElement("img");
      img.src = equiv.img.src;
      img.alt = equiv.img.alt;
      img.classList.add("equiv-img");
      img.setAttribute("aria-hidden", "true");
      */

      const textoSpan = document.createElement("span");
      textoSpan.innerHTML = equiv.texto;

      // li.appendChild(img);
      li.appendChild(textoSpan);
      listaEquiv.appendChild(li);
    });
  }

  // Tecnologias recomendadas
  const listaTec = document.getElementById("tecRecomLista");
  if (listaTec) {
    listaTec.innerHTML = "";
    gerarTecnologiasRecomendadas(culturaAtiva).forEach((tec) => {
      const li = document.createElement("li");
      li.classList.add("tec-recom-item");
      li.setAttribute("role", "listitem");

      /*
      const img = document.createElement("img");
      img.src = tec.imgSrc;
      img.alt = tec.imgAlt;
      img.classList.add("tec-recom-img");
      img.setAttribute("aria-hidden", "true");
      */

      const textoSpan = document.createElement("span");
      textoSpan.textContent = tec.texto;

      // li.appendChild(img);
      li.appendChild(textoSpan);
      listaTec.appendChild(li);
    });
  }

  const resultadosEl = document.getElementById("simuladorResultados");
  if (resultadosEl) {
    resultadosEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function validarEntradaSimulador() {
  const inputProducao = document.getElementById("inputProducao");
  const selectCultura = document.getElementById("selectCultura");
  const selectCenario = document.getElementById("selectCenario");

  const producao = parseFloat(inputProducao?.value);
  const cultura = selectCultura?.value;
  const cenario = selectCenario?.value;

  if (!producao || isNaN(producao) || producao <= 0) {
    mostrarErroInput(
      inputProducao,
      "Por favor, informe uma produção válida (maior que 0).",
    );
    return null;
  }
  if (producao > 100000) {
    mostrarErroInput(inputProducao, "O valor máximo é de 100.000 toneladas.");
    return null;
  }
  if (!cultura) {
    mostrarErroInput(selectCultura, "Por favor, selecione um tipo de cultura.");
    return null;
  }

  limparErroInput(inputProducao);
  limparErroInput(selectCultura);

  return { producao, cultura, cenario };
}

function mostrarErroInput(elemento, mensagem) {
  if (!elemento) return;
  elemento.style.borderColor = "#ef4444";
  let erroMsg = elemento.parentElement.querySelector(".erro-msg");
  if (!erroMsg) {
    erroMsg = document.createElement("span");
    erroMsg.classList.add("erro-msg", "campo-help");
    erroMsg.style.color = "#ef4444";
    erroMsg.setAttribute("role", "alert");
    elemento.parentElement.appendChild(erroMsg);
  }
  erroMsg.textContent = mensagem;
}

function limparErroInput(elemento) {
  if (!elemento) return;
  elemento.style.borderColor = "";
  const erroMsg = elemento.parentElement.querySelector(".erro-msg");
  if (erroMsg) erroMsg.remove();
}

function reiniciarSimulador() {
  const placeholder = document.getElementById("resultadoPlaceholder");
  const conteudo = document.getElementById("resultadoConteudo");

  if (conteudo) {
    conteudo.hidden = true;
    conteudo.setAttribute("aria-hidden", "true");
  }
  if (placeholder) {
    placeholder.hidden = false;
    placeholder.removeAttribute("aria-hidden");
  }

  const inputProducao = document.getElementById("inputProducao");
  const selectCultura = document.getElementById("selectCultura");
  if (inputProducao) inputProducao.value = "";
  if (selectCultura) selectCultura.value = "";
}

function inicializarSimulador() {
  const btnCalcular = document.getElementById("btnCalcular");
  const btnReiniciar = document.getElementById("btnReiniciar");

  if (btnCalcular) {
    btnCalcular.addEventListener("click", () => {
      const dados = validarEntradaSimulador();
      if (!dados) return;
      const resultado = calcularImpacto(
        dados.producao,
        dados.cultura,
        dados.cenario,
      );
      exibirResultados(resultado);
    });
  }

  if (btnReiniciar) {
    btnReiniciar.addEventListener("click", reiniciarSimulador);
  }

  const inputProducao = document.getElementById("inputProducao");
  if (inputProducao) {
    inputProducao.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter") btnCalcular?.click();
    });
  }
}

/* ============================================================
   6. UTILITÁRIOS
   ============================================================ */

function atualizarTextoElemento(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.textContent = texto;
}

function formatarNumero(valor, casasDecimais) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: casasDecimais,
    maximumFractionDigits: casasDecimais,
  });
}

function inicializarNavAtiva() {
  const secoes = document.querySelectorAll("main section[id]");
  const linksNav = document.querySelectorAll(".nav-link");

  if (!secoes.length || !linksNav.length) return;

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          const idAtivo = entrada.target.id;
          linksNav.forEach((link) => {
            const isAtivo = link.getAttribute("href") === `#${idAtivo}`;
            link.style.backgroundColor = isAtivo ? "var(--verde-fundo)" : "";
            link.style.color = isAtivo ? "var(--verde-escuro)" : "";
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  secoes.forEach((sec) => observer.observe(sec));
}

/* ============================================================
   MÓDULO: ACESSIBILIDADE (Contraste + Tamanho de Fonte)
   ============================================================ */

const FONTE_MINIMA = 14;
const FONTE_MAXIMA = 24;
const FONTE_PASSO  = 2;
const FONTE_PADRAO = 16;

function aplicarTamanhoFonte(tamanho) {
  document.documentElement.style.fontSize = `${tamanho}px`;
  localStorage.setItem('agrinho-tamanho-fonte', String(tamanho));
}

function obterTamanhoFonteAtual() {
  const salvo = localStorage.getItem('agrinho-tamanho-fonte');
  const tamanho = salvo ? parseInt(salvo, 10) : FONTE_PADRAO;
  return Math.min(Math.max(tamanho, FONTE_MINIMA), FONTE_MAXIMA);
}

function inicializarControleFonte() {
  const btnFonteMais  = document.getElementById('btnFonteMais');
  const btnFonteMenos = document.getElementById('btnFonteMenos');

  let tamanhoAtual = obterTamanhoFonteAtual();
  aplicarTamanhoFonte(tamanhoAtual);

  if (btnFonteMais) {
    btnFonteMais.addEventListener('click', () => {
      if (tamanhoAtual < FONTE_MAXIMA) {
        tamanhoAtual += FONTE_PASSO;
        aplicarTamanhoFonte(tamanhoAtual);
      }
    });
  }

  if (btnFonteMenos) {
    btnFonteMenos.addEventListener('click', () => {
      if (tamanhoAtual > FONTE_MINIMA) {
        tamanhoAtual -= FONTE_PASSO;
        aplicarTamanhoFonte(tamanhoAtual);
      }
    });
  }
}

function inicializarAltoContraste() {
  const btnContraste = document.getElementById('btnContraste');
  if (!btnContraste) return;

  const contrasteSalvo = localStorage.getItem('agrinho-alto-contraste') === 'true';
  if (contrasteSalvo) {
    document.body.classList.add('alto-contraste');
    btnContraste.setAttribute('aria-pressed', 'true');
  }

  btnContraste.addEventListener('click', () => {
    const ativo = document.body.classList.toggle('alto-contraste');
    btnContraste.setAttribute('aria-pressed', String(ativo));
    localStorage.setItem('agrinho-alto-contraste', String(ativo));
  });
}


/* ============================================================
   7. INICIALIZAÇÃO GERAL
   ============================================================ */

function inicializar() {
  inicializarNavegacao();
  inicializarContadores();
  inicializarRoteiroInterativo();
  inicializarSimulador();
  inicializarNavAtiva();
  inicializarControleFonte();
  inicializarAltoContraste();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}
