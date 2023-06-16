// // 1. Function Declaration (Функционални декларации)
// // Ова е најстар начин на декларирање на функција каде што се состои од функција и име на функцијата
// const resenie = sobirok(2, 3, 6);

// function sobirok(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// }

// // console.log(`Sobirokot e ${sobirok(2, 3, 4)}`);
// // const resenie2 = sobirok(10, 500, 1000);
// console.log(resenie);
// // console.log(resenie2);

// // 2. Function Expressions (Функционални експресии)
// // Функционалните експресии се оние кои се запишува функцијата како варијабла или константа, значи не и треба име на функцијата
// const proizvod = function (a, b) {
//   return a * b;
// };
// const prizvodot = proizvod(7, 7);

// console.log(`Proizvodot e ${prizvodot}`);

// // 3. Fat-Arrow function
// const razlika = (a, b) => a - b;

// console.log(`Razlikata e ${razlika(6, 2)}`);

// // this

// // 4. Методи во објекти во ЈаваСкрипт
// const ucenik = {
//   ime: "Trajan",
//   pozdrav: function () {
//     console.log(`Zdravo ${this.ime}`);
//   },
// };

// ucenik.pozdrav();

// // 5. IIFFE Immediately Invoked Function Expressions
// // ova se koristi da se odeli od drugiot kod, i drugiot kod da ne moze da modificira vo ovaa IIFFE funkcija
// // i ova se izvrsuva na pocetok od aplikacijata
// (function () {
//   console.log("Ovde kje se izvrsi funkcijata");
// })();

// // Задача број 1.
// // Да се креира функционална експресија со име c2f која ќе конвертира целзиусови степени во фаренхајт

// // Задача број 2
// // Да се креира Fat Arrow Function со име f2c која ќе конвертира фаренгајт во целзиусови

// // High order functions

// // primer broj1
// function mnozenje(broj1) {
//   return function (broj2) {
//     return broj2 * broj1;
//   };
// }

// const pomnozen = mnozenje(2);
// const rezultat = pomnozen(5);

// console.log(rezultat);

// //primer broj2
// function calculator(operacija) {
//   return function (a, b) {
//     switch (operacija) {
//       case "soberi":
//         return a + b;
//       case "odzemi":
//         return a - b;
//       case "pomnozi":
//         return a * b;
//       case "podeli":
//         return a / b;
//     }
//   };
// }

// const soberiOperacija = calculator("soberi");
// const rezultat123 = soberiOperacija(5, 3);

// console.log(rezultat123);

// // zadacha broj 3
// // da se kreira funkcija koja kje zema kako argument c2f ili f2c i koja kje gi pretvora celziusovite vo farenajt
// // i farenhajt vo celziusiv

// //! TYPEOF
// console.log(typeof undefined);
// console.log(typeof 239);
// console.log(typeof 12n);
// console.log(typeof false);
// console.log(typeof "undefined");
// console.log(typeof null);
// console.log(console.log);

// //! BOOLEAN TRUE FALSE
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean("1"));
// console.log(Boolean("135235623"));
// console.log(Boolean(""));
// console.log(Boolean(" "));

// console.log(+true);
// console.log(2 > 1);
// console.log(2 == 2);
// console.log(2 == "2");
// console.log(2 != 1);

// //! || - or (ili ili)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// //! && - and (i dvata uslovi)
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// console.log(true && true);

// //! Ternary operators
// //* uslov ? uslovot ako e tocen : uslovot ako e netocen
// const godini = 17;
// const vozrast = godini >= 18 ? "Polnoleten" : "Ne e polnoleten";
// console.log(vozrast);

//! Rabota so nizi(Arrays)
const arrayEden = [5, 2, 3, 6, 7, 8];
const arrayDva = [1, 1, 1, 1, 1];
const arrayTri = [10, 20, 30, 40];
const arrayTriPrazen = [];
const ovoshje = ["jabolko", "praska", "limun"];
const arrayNov = [];
const arrayponov = [];
const zelencuk = "kromid";

// for (let i = 0; i < arrayEden.length; i++) {
//   console.log(arrayEden[i]);
// }

arrayponov[0] = ovoshje[0];
arrayponov[1] = "apple";
arrayponov[2] = zelencuk;
console.log(arrayponov);

// for (let i = 0; i < arrayDva.length; i++) {
//   // arrayNov[i] = arrayDva[i] + 1;
//   // arrayponov[i] = arrayEden[i];
//   arrayTri[i] = arrayTri[i] + 20
// }
// console.log(arrayNov);
// console.log(arrayponov);

//! Implementacija na gotovi higher-order functions vo javaskript
//* MAP, FOREACH, REDUCE, FILTER, SORT, FIND
//! FOREACH vrshi interacija na sekoj element vo nizata znaci ne go modificira
//! po default tuku samo go izminuva, i ako sakame mozeme da go modificirame nizata
arrayTri.forEach((item, i, arr) => (arr[i] = item + 20));
for (let i = 0; i < arrayTri.length; i++) {
  // console.log(arrayTri[i]);
}

//! MAP metodata izminuva niza za promeni na istata, rezultato e nova niza
const arrayCetiri = arrayTri.map((item, i) => {
  return item + 10;
});

//! REDUCE reducira/namaluva/sumira niza na eden edinstven rezultat
// accumulator - segasnaVrednost

const reducePrimer = [5, 1, 2, 3, 4, 2];

let rezultat = reducePrimer.reduce((acc, s) => {
  return acc + s;
}, 0);

console.log(`rezultatot na reducePrimer e ${rezultat}`);

//! SORT sortira elementi vo niza spored dadena funkcija za sortiranje
//Go modificira originalniot array
reducePrimer.sort((a, b) => b - a);
console.log(reducePrimer);

//! FILTER vrakja nova niza od elementi koi odgovaraat na postaveniot uslov
const brojkiFilter = reducePrimer.filter((vrednosti) => {
  return vrednosti > 3;
});
console.log(brojkiFilter);

//! FIND vrakja element od nizata koj odgovara na postaveniot uslov
const brojkaFind = reducePrimer.find((vrednost) => {
  return vrednost === 2;
});

console.log(brojkaFind);

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Prilep" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 8.8, grad: "Kratovo" },
  { ime: "Ivana", prosek: 6.3, grad: "Kumanovo" },
  { ime: "Simona", prosek: 7, grad: "Ohrid" },
  { ime: "Natasha", prosek: 8.2, grad: "Skopje" },
  { ime: "Stanko", prosek: 6.7, grad: "Kichevo" },
  { ime: "Damjan", prosek: 9.1, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 9.2, grad: "Ohrid" },
];
//todo: Da gi izlistame site iminja na studenti
// for (let i = 0; i < studenti.length; i++) {
//   console.log(studenti[i].ime);
// }

// studenti.forEach((student) => console.log(student.ime));

const filtriraniStudenti = studenti
  .filter((student) => student.prosek > 9)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 2);
console.log(filtriraniStudenti);

//todo: Da pronajdime student sto ima prosek 6.9
const studentEden = studenti.find((student) => student.prosek === 6.9);
console.log(studentEden);

//todo: Da doznaeme zbir na site proseci na site studenti
const zbirNaProsek = studenti.reduce((sum, s) => sum + s.prosek, 0);
console.log(zbirNaProsek);

//!
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(JSON.stringify(array1) === JSON.stringify(array2));

//? Domasna
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7, podredeni po ime(rastecki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradoovite Skopje i Ohrid
//? 6. Da se dodade ushte eden student so ime Goran, prosek 7.3 i grad Delchevo
//? 7.Da se izbrishe prviot student vo studentite
//? 8. Da se kreira nova niza kade sto studentite od Ohrid i Kumanovo prosecite im se za 1 pogolemi od segasnite(dinamicki)
