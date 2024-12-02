// DATA

const planets = [
  "Via Lattea",
  "Luna",
  "Tatooine",
  "Santorinius",
  "Starland",
  "Serenitopia",
  "Etherealis",
  "Bumbafria",
];

const types = ["Romantico", "Avventura", "Famiglia", "Tour organizzati"];

const cardData = [
  {
    title: "Fuga d'amore spaziale",
    planet: "Etherealis",
    type: "Romantico",
    text: "Un'avventura romantica a Etherealis, con serate sotto le stelle, cene gourmet e suite spaziali per un'esperienza indimenticabile.",
    image: "/img/img_fuga.png",
    back: "/img/cardback.png",
    link: "/6_viaggio.html",
  },
  {
    title: "Safari Astrale",
    planet: "Tatooine",
    type: "Tour organizzati",
    text: "Un'esperienza ideale per le famiglie su Tatooine, con safari interstellari per osservare creature aliene e paesaggi spettacolari.",
    image: "/img/img_safari.png",
    back: "/img/cardback.png",
    link: "/7_tour.html",
  },
  {
    title: "Campeggio stellare",
    planet: "Luna",
    type: "Avventura",
    text: "Un'avventura emozionante sulla Luna, con tende spaziali e escursioni notturne per esplorare la superficie lunare.",
    image: "/img/img_campeggio.png",
    back: "/img/cardback.png",
  },

  {
    title: "SPA Galattica",
    planet: "Santorinius",
    type: "Romantico",
    text: "Un rifugio romantico su Santorinius, dove le coppie possono rilassarsi e rigenerarsi con trattamenti spa esclusivi sotto il cielo stellato.",
    image: "/img/img_spa.png",
    back: "/img/cardback.png",

  },
  {
    title: "Parco divertimenti celeste",
    planet: "Starland",
    type: "Famiglia",
    text: "Un'esperienza divertente per tutta la famiglia a Starland, con giostre spaziali, spettacoli interattivi e esibizioni di fuochi d'artificio cosmici.",
    image: "/img/img_parco.png",
    back: "/img/cardback.png",
  },
  {
    title: "Yoga interstellare",
    planet: "Serenitopia",
    type: "Romantico",
    text: "Un ritiro romantico a Serenitopia, dove le coppie possono praticare yoga sotto la guida di maestri interstellari e connettersi con l'universo.",
    image: "/img/img_yoga.png",
    back: "/img/cardback.png",
  },
  {
    title: "Settimana bianca lattea",
    planet: "Bumbafria",
    type: "Avventura",
    text: "Un'esperienza avventurosa a Bumbafria, con sport invernali sulla neve e panorami mozzafiato della Via Lattea.",
    image: "/img/img_neve.png",
    back: "/img/cardback.png",
  },
  {
    title: "Crociera tra le nebulose",
    planet: "Via Lattea",
    type: "Romantico",
    text: "Un viaggio romantico attraverso la vastità della Via Lattea, con crociere serali per osservare le splendide nebulose galattiche.",
    image: "/img/img_crociera.png",
    back: "/img/cardback.png",
  },
];

// FUNCTIONS

const selectPianeta = document.getElementById("select-pianeta");
const selectTipo = document.getElementById("select-tipo");

planets.forEach((planet) => {
  selectPianeta.innerHTML += `<option value="${planet}">${planet}</option>`;
});

types.forEach((type) => {
  selectTipo.innerHTML += `<option value="${type}">${type}</option>`;
});

const filterExperience = (planet, type) => {
  const cardListElement = document.getElementById("card-list");

  cardListElement.innerHTML = "";

  cardData
    .filter((card) => {
      return planet ? card.planet === planet : true;
    })
    .filter((card) => {
      return type ? card.type === type : true;
    })
    .forEach((card) => {
      let linkHTML = card.link ? `<a href="${card.link}" class="btn btn-secondary mt-3">Scopri di più</a>` : '';
      cardListElement.innerHTML += `
      <div class="card-container">
        <div class="front" style="background-image: url('${card.image}')">
          <div class="inner">
            <h1 class="card-title">${card.title}</h1>
            <h2 class="card-text">${card.planet}</h2>
          </div>
        </div>
        <div class="back" style="background-image: url('${card.back}')">
          <div class="inner">
            <p class="card-text">${card.text}</p>
            ${linkHTML}
          </div>
        </div>
      </div>
      `;
    });
};

document.getElementById("btnSearch").addEventListener("click", () => {
  filterExperience(selectPianeta.value, selectTipo.value);
});

filterExperience();
