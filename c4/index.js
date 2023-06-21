//! DA PROCHITATE OD DOKUMENTACIJA
//? Da istrazite uste nekolku methodi na fs modulot
//? Kako da izbrishite fajl, kako da preimenuvatefajls
//? i uste eden po zelba
//? isto taka da kreirate fajl
//? i da prochitate fajl

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

fs.writeFile("./asyhronWrite.txt", asyhronPodatok, "utf-8", (err) => {
  if (err) console.log("Greska");
  console.log("uspesno");
});

//! Promise pattern

//* Чекор 1
// const fileWrite = () => {};

//* Чекор 2
//? Funkcijata kje ni vrati nov Promise objekt
// const fileWrite = () => {
//   return new Promise();
// };

//* Чекор 3
// const fileWrite = () => {
//   //? Kje kreirame executor funkcija vo promisot
//   return new Promise(() => {});
// };

//* Чекор 4
// const fileWrite = () => {
//   //? Kje vnesime vba parametri koi se callback funkcii
// moze da gi zabelizte definirani kako resolve, reject
//   return new Promise((success, fail) => {});
// };

//* Чекор 5
// const fileWrite = () => {
//   //? kje ja zapishime fs.writeFile funkcijata vnatre vo egzekucionata funkcija
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Helloo!!!", (err) => {
//       if (err) return console.log(err);
//       console.log("Zapisot e napraven");
//     });
//   });
// };

//* Чекор 6
// const fileWrite = () => {
//   //? vo ovoj slucaj ako imame err da aktivira fail funkcijata
//   //? ako imame uspesno zapishan fajl da se aktivira funkcijata success
//   return new Promise((success, fail) => {
//     fs.writeFile("data.txt", "Helloo!!!", (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

//* Чекор 7
//? i kje go modificirame fileWrite za da go zema filename,
//? i data kako parametri
//? i zemenite parametri gi prenesuvame na fs.writeFile
//? vo ovoj slucaj ako imame err da aktivira fail funkcijata
//? ako imame uspesno zapishan fajl da se aktivira funkcijata success

const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, "utf-8", (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite("data1.txt", "Asynhron zapis od promis");
    await fileWrite("data2.txt", "Asynhron zapis od promis 2");
    const rezultat = await fileRead("super.txt");
    console.log(rezultat);
  } catch (err) {
    console.log(err);
  }
};

main();
