const heroData = {

home: {
  titulo: "Instituto de Segurança Pública",
  subtitulo: "Bem-vindo(a) ao ISP Conecta, a página de dados abertos do Instituto de Segurança Pública. <br><br>Aqui você encontra, de forma transparente, painéis e dashboards com dados sobre registros criminais e atividades policiais do Estado do Rio de Janeiro.",
  imagem: "img/home.jpg",
  imagemLateral: "img/logos-insitucionais.png"
},

  mulher: {
    imagem: "img/mulher-hero.png",
    cards: [
      {
        titulo: "Dossiê Mulher",
        descricao: "Dados completos.",
        imagem: "img/mulher-hero.png"
      },
      {
        titulo: "Painel Mulher",
        descricao: "Indicadores atualizados.",
        imagem: "img/mulher-hero.png"
      }
      ,
      {
        titulo: "Panorama da violência contra a mulher",
        descricao: "Indicadores atualizados.",
        imagem: "img/mulher-hero.png"
      }
      ,
      {
        titulo: "Estudo Mulher",
        descricao: "Indicadores atualizados.",
        imagem: "img/mulher-hero.png"
      }
    ]
  },
    ambiente: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Amazonia",
        descricao: "Dados completos.",
        imagem: "img/card-mulher-1.jpg"
      }
    ]
  },

  armas: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Painel Armas",
        descricao: "Estatísticas mensais de apreensão de armas, munições, simulacros e artefatos explosivos no estado do Rio de Janeiro",
        imagem: "img/armas-hero.png"
      }
    ]
  },
    transito: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Controle de Armas",
        descricao: "Estatísticas.",
        imagem: "img/transito-hero.jpg"
      }
    ]
  },
    serie: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Seríe Historica",
        descricao: "Estatísticas mensais da Segurança Pública no estado do Rio de Janeiro",
        imagem: "img/serie-hero.png"
      }
    ]
  },
    discriminacao: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Seríe Historica",
        descricao: "Estatísticas.",
        imagem: "img/serie-hero.jpg"
      }
    ]
  },
    letalidade: {
    imagem: "img/home.jpg",
    cards: [
      {
        titulo: "Painel de Letalidade Violenta",
        descricao: "Estatísticas de vitimização por Letalidade Violenta no estado do Rio de Janeiro.",
        imagem: "img/letalidade-hero.png"
      }
    ]
  }
};

const heroContent = document.getElementById("heroContent");
const heroSection = document.querySelector(".hero");

function renderHero(tab) {

  heroContent.classList.add("fade-out");

  setTimeout(() => {

    heroContent.innerHTML = "";

    heroSection.style.backgroundImage =
      `url('${heroData[tab].imagem}')`;

  if (tab === "home") {

  heroContent.innerHTML = `
    <div class="home-hero">
      <div class="hero-text">
        <h1>${heroData.home.titulo}</h1>
        <p>${heroData.home.subtitulo}</p>
      </div>
      <div class="hero-image">
        <img src="${heroData.home.imagemLateral}" alt="Logos institucionais">
      </div>
    </div>
  `;

} else {

      heroData[tab].cards.forEach(item => {

        heroContent.innerHTML += `
          <div class="card">
            <img src="${item.imagem}" class="card-img">
            <div>
              <h3 class="card-titulo">${item.titulo}</h3>
              <p class="card-descricao">${item.descricao}</p>
              <button>Acessar</button>
            </div>
          </div>
        `;
      });
    }

    heroContent.classList.remove("fade-out");

  }, 300);
}
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = link.dataset.tab;
    renderHero(tab);
  });
});

renderHero("home"); // agora inicia no hero principal



const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});


const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
});

const scrollIndicator = document.querySelector(".scroll-indicator");

scrollIndicator.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});


document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const tab = link.dataset.tab;
    document.querySelectorAll("nav a")
      .forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    stopCarousel();
    currentSlide = carouselTabs.indexOf(tab);

    renderHero(tab);
  });
});