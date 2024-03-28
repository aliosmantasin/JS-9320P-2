const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 17,
    name: "Wedge Antilles",
    pic: "https://static.wikia.nocookie.net/starwarsofthecaribbean/images/d/d9/Wedge-helmetless.jpg",
    homeworld: "corellia",
  },
  {
    id: 18,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 19,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 20,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];


const row = document.querySelector(".row");
const renderBtn = document.querySelector(".renderBtn");
renderBtn.textContent = "Show Characters";
renderBtn.style.backgroundColor = "#19bc9b";
// document.getElementById("btnToggle")

let renderStatus = false; // Başlangıçta karakterlerin gizli olduğunu belirtmek için false olarak ayarlandı

function renderCharacters() {
  if (renderStatus === false) {
    row.innerHTML = ""; // İçerik boş
    renderBtn.textContent = "Hide Characters";
    renderBtn.style.backgroundColor = "#ff3b1f";
    for (let character of characters) { // İçerik doldur
      row.innerHTML += ` 
        <div class="col-lg-3 col-md-6 col-sm-12 card text-center mx-auto" style="width: 18rem;">
          <img src="${character.pic}">
          <h4 class="position-absolute mt-4 mx-3  px-1 bg-info w-35 rounded-circle text-white">${character.id}</h4>
          <p class="text-white">${character.name}</p>
          <p class=" text-muted">${character.homeworld || "other"}</p>
        </div>`
    }
  } else {
    row.innerHTML = ""; 
    renderBtn.style.backgroundColor = "#19bc9b";
    renderBtn.textContent = "Show Characters";
  }
  renderStatus = !renderStatus; // Her çağrıda durumu tersine çevir
}

//

let homeworldsRaw = characters.map(function(character) {
  return (character.homeworld ?? "other");
});

console.log("homeworldsRaw atanmış homeworld objeleri", homeworldsRaw);

let homeworldsUnique = [...new Set(homeworldsRaw)];

let homeworldsLowercase = homeworldsUnique.map(function(homeworld) {
  return homeworld.toLowerCase();
});

console.log("homeworldsLowercase:", homeworldsLowercase);

console.log("Unique Name : Tekrarlayan homeworld'ler kaldırıldı. ",homeworldsUnique);

const homeworld = homeworldsLowercase;

console.log("Homeworld: ",homeworld);




 // InputDiv elementini seçme
 const inputDiv = document.getElementById("inputDiv");
 inputDiv.innerHTML = homeworld.map((homeworld) =>
  `<div class="form-check">
  <input class="form-check-input" type="radio" name="random" value="${homeworld}" id="${homeworld}">
  <label class="form-check-label" for="homeworld - ${homeworld}">${homeworld}</label>
  </div>
  `
 ).join("");

 console.log(inputDiv,"inputDiv");
 console.log(homeworld,"inputDiv");

 inputDiv.addEventListener("change", function(event) {
  if(event.target.classList.contains("form-check-input")){
    const selectedHomeworld = event.target.value
    const selectedHomeworldCharacters = characters.filter(
      (character) => {
      const homeworld = character.homeworld ? character.homeworld.toLowerCase() : "other"
      return homeworld === selectedHomeworld
    }
    )

    console.log("tıklandı");
    console.log(selectedHomeworldCharacters);


  const row = document.querySelector(".row");
  row.innerHTML = selectedHomeworldCharacters.map((character) => {
    return(
    `<div class="col-lg-3 col-md-6 col-sm-12 card text-center mx-auto" style="width: 18rem;">
    <img src="${character.pic}">
    <h4 class="position-absolute mt-4 mx-3  px-1 bg-info w-35 rounded-circle text-white">${character.id}</h4>
    <p class="text-white">${character.name}</p>
    <p class=" text-muted">${character.homeworld || "other"}</p>
    </div>`)
 
   }).join("")
  }
 })

