//ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeTitle(newTitle) {
  let oldTitle = document.querySelector(".title");
  oldTitle.textContent = newTitle;
}

changeTitle("nuovo titolo");

//ES.8: Scrivi una funzione per cambiare il colore di background della pagina
function changeBackground(color) {
  let body = document.querySelector("body");
  body.style.backgroundColor = color;
  console.log(body);
}

changeBackground("lightgrey");

//ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeFooterAddress(newAddress) {
  let address = document.querySelector(".address");
  address.textContent = newAddress;
}

changeFooterAddress("Via di qui,12");

//ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addClassTolinks(className) {
  let links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add(className);
  }
}

addClassTolinks("classToAdd");

// ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function addRemoveClass(className) {
  let images = document.querySelectorAll("img");
  //   for (let i = 0; i < images.length; i++) {
  //     images[i].classList.add(className);
  //   }
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove(className);
  }
}

addRemoveClass("classForImages");

// ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function changeRandomPrice() {
  let prices = document.querySelectorAll(".price");
  for (let i = 0; i < prices.length; i++) {
    prices[i].textContent = Math.floor(Math.random() * 100);
  }
}

changeRandomPrice();
