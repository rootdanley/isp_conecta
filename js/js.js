console.log("Js Funcionando");

// =========================
// MENU MOBILE
// =========================
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  const isActive = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", isActive ? "true" : "false");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// =========================
// PAINÉIS (boxes)
// =========================
const PANELS = [
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    className: "card",
    title: "Dossiê Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
    tag: "mulher",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    className: "card-painel-mulher",
    title: "Painel Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
    tag: "mulher",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    className: "card-painel-mulher",
    title: "Panorama da violência contra a Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "img/imgmod.svg",
    imgAlt: "",
    tag: "mulher",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    className: "card",
    title: "Estudos Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
    tag: "mulher",
  },
  {
    href: "https://ispconecta.rj.gov.br/serie_historica/",
    className: "card-serie",
    title: "Série Histórica",
    desc: "Estatísticas mensais da Segurança Pública no estado do Rio de Janeiro",
    img: "/Fotos/icone_seriehistorica.svg",
    imgAlt: "",
    layout: "text-first",
  },
  {
    href: "https://ispconecta.rj.gov.br/armas/",
    className: "card-armas",
    title: "Armas",
    desc: "Estatísticas mensais de apreensão de armas, munições, simulacros e artefatos explosivos no estado do Rio de Janeiro",
    img: "/img/policiais.svg",
    imgAlt: "",
    layout: "text-first",
  },
  {
    href: "https://ispconecta.rj.gov.br/transito/",
    className: "card-transito",
    title: "Trânsito",
    desc: "Estatísticas sobre trânsito no estado do Rio de Janeiro",
    img: "/Fotos/icone_transito.svg",
    imgAlt: "",
    layout: "text-first",
  },
  {
    href: "https://ispconecta.rj.gov.br/meio_ambiente/",
    className: "card-meioambiente",
    title: "Meio Ambiente",
    desc: "Estatísticas de crimes ambientais no estado do Rio de Janeiro",
    img: "/img/icone_ambiente.svg",
    imgAlt: "",
    layout: "text-first",
  },
  {
    href: "https://ispconecta.rj.gov.br/discriminacao/",
    className: "card-disc",
    title: "Discriminação",
    desc: "Estatísticas sobre discriminação no estado do Rio de Janeiro",
    img: "/img/disc.svg",
    imgAlt: "",
    layout: "text-first",
  },
  {
    href: "https://ispconecta.rj.gov.br/letalidade_violenta/",
    className: "card-lv",
    title: "Letalidade Violenta",
    desc: "Estatísticas de vitimização por Letalidade Violenta no estado do Rio de Janeiro",
    img: "/img/card_lv.png",
    imgAlt: "",
    layout: "text-first",
  },
];

function buildCard(panel) {
  const a = document.createElement("a");
  a.href = panel.href;
  a.className = `card ${panel.className || ""}`.trim();

  const imgHTML = `
    <div class="card-img">
      <img src="${panel.img}" alt="${panel.imgAlt}">
    </div>
  `;

  const textHTML = `
    <div class="card-texto">
      <h2>${panel.title}</h2>
      <p>${panel.desc}</p>
    </div>
  `;

  if (panel.layout === "text-first") {
    a.innerHTML = textHTML + imgHTML;
  } else {
    a.innerHTML = imgHTML + textHTML;
  }

  return a;
}

// Render padrão no painel (boxes)
(function renderPanels() {
  const container = document.getElementById("boxes");
  if (!container) return;

  container.innerHTML = "";
  PANELS.forEach((panel) => container.appendChild(buildCard(panel)));
})();

// =========================
// HERO HOME DINÂMICO (lado esquerdo) - CARDS PRÓPRIOS DO HERO
// =========================
const heroLeft = document.getElementById("heroLeft");
let heroLeftOriginalHTML = "";
let heroMulherAtivo = false;

/// Dados específicos do HERO (agora com imagem igual ao painel)
const HERO_MULHER = [
  {
    href: "https://ispconecta.rj.gov.br/dossie_mulher/",
    title: "Dossiê Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    title: "Painel Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    title: "Panorama da violência contra a Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
  },
  {
    href: "https://www.ispconecta.rj.gov.br/ispmulher/",
    title: "Estudos Mulher",
    desc: "Estatísticas mensais de violência contra a mulher no estado do Rio de Janeiro",
    img: "/img/imgmod.svg",
    imgAlt: "",
  },
];

// Card do HERO com a MESMA estrutura do painel (imagem + texto)
function buildHeroCard(item) {
  const a = document.createElement("a");
  a.href = item.href;
  a.className = "hero-card";

  a.innerHTML = `
    <div class="card-img">
      <img src="${item.img}" alt="${item.imgAlt}">
    </div>
    <div class="hero-card-text">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
    </div>
  `;

  return a;
}

function renderHeroMulher() {
  if (!heroLeft) return;

  heroLeft.innerHTML = "";

  // wrapper próprio (não usa .boxes)
  const wrapper = document.createElement("div");
  wrapper.className = "hero-cards";

  HERO_MULHER.forEach((item) => {
    wrapper.appendChild(buildHeroCard(item));
  });

  heroLeft.appendChild(wrapper);
  heroMulherAtivo = true;
}

function restoreHeroHome() {
  if (!heroLeft) return;

  heroLeft.innerHTML = heroLeftOriginalHTML;
  heroMulherAtivo = false;
}

function wireHeroMulherTab() {
  const linkMulher = document.querySelector('#menu a[data-tab="mulher"]');
  if (!linkMulher) return;

  linkMulher.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!heroMulherAtivo) {
      renderHeroMulher();
    } else {
      restoreHeroHome();
    }

    linkMulher.blur();

    const nav = document.getElementById("nav");
    if (nav && nav.classList.contains("active")) {
      nav.classList.remove("active");
      btnMobile?.setAttribute("aria-expanded", "false");
    }
  });
}

(function bootstrapHeroSwap() {
  if (!heroLeft) return;

  heroLeftOriginalHTML = heroLeft.innerHTML;
  wireHeroMulherTab();
})();