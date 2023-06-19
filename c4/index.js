const fs = require("fs");

//! Vchituvanje na podatok
//* synchrona verzija
// const vcitanTekst = fs.readFileSync("./tekst.txt", "utf-8");
// console.log(vcitanTekst);

//! Zapishuvanje na podatok vo nashiot kompjuter(server)
//* synchrona verzija
// const podatok = `Ova sakame da go zapishime vo nashiot kopjuter ${2 + 100}`;
// fs.writeFileSync(`./novTekst${Date.now()}.txt`, podatok);

//! VO SINHRONO PROGRAMIRANJE SEKOJ PROCES MORA DA ZAVRSHI ZA DA POCNI NOV PROCES
//! ZNACHI KODOT VO SIHRONO PROGRAMIRANJE SE IZVRSHUVA LINIJA PO LINIJA

//! Asychrona verzija

function pozdrav(ime, funkcija) {
  console.log(`Zdravo, ${ime}`);
  funkcija();
}

function prijatno() {
  console.log("chao!");
}

// pozdrav("Danche", prijatno);

//! Vchituvanje na fajls
//* Asynhrona verzija

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  if (err) {
    return console.log("Imashe greska");
  }
  console.log(text);
});

fs.readFile("./tekst.txt", "utf-8", (err, text) => {
  fs.readFile("./novTekst.txt", "utf-8", (err, text2) => {
    console.log(text, text2);
  });
});

//! Zapishuvanje na fajl
//* Asynhrona varijanta
const asyhronPodatok = "ovaj fajl e kreiran asyhrono";
fs.writeFile("./asyhronWrite.txt", asyhronPodatok, "utf-8", (err) => {
  if (err) {
    return console.log("Greska");
  }
  console.log("uspesno");
});

//! Promise pattern

//! DA PROCHITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrishite fajl, kako da preimenuvatefajls
//? i uste eden po zelba
//? isto taka da kreirate fajl
//? i da prochitate fajl
