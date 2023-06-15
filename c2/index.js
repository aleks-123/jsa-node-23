// 1. Function Declaration (Функционални декларации)
// Ова е најстар начин на декларирање на функција каде што се состои од функција и име на функцијата
const resenie = sobirok(2, 3, 6);

function sobirok(a, b, c) {
  console.log(a + b + c);
  return a + b + c;
}

// console.log(`Sobirokot e ${sobirok(2, 3, 4)}`);
// const resenie2 = sobirok(10, 500, 1000);
console.log(resenie);
// console.log(resenie2);

// 2. Function Expressions (Функционални експресии)
// Функционалните експресии се оние кои се запишува функцијата како варијабла или константа, значи не и треба име на функцијата
const proizvod = function (a, b) {
  return a * b;
};
const prizvodot = proizvod(7, 7);

console.log(`Proizvodot e ${prizvodot}`);

// 3. Fat-Arrow function
const razlika = (a, b) => a - b;

console.log(`Razlikata e ${razlika(6, 2)}`);

// this

// 4. Методи во објекти во ЈаваСкрипт
const ucenik = {
  ime: "Trajan",
  pozdrav: function () {
    console.log(`Zdravo ${this.ime}`);
  },
};

ucenik.pozdrav();

// 5. IIFFE Immediately Invoked Function Expressions
// ova se koristi da se odeli od drugiot kod, i drugiot kod da ne moze da modificira vo ovaa IIFFE funkcija
// i ova se izvrsuva na pocetok od aplikacijata
(function () {
  console.log("Ovde kje se izvrsi funkcijata");
})();

// Задача број 1.
// Да се креира функционална експресија со име c2f која ќе конвертира целзиусови степени во фаренхајт

// Задача број 2
// Да се креира Fat Arrow Function со име f2c која ќе конвертира фаренгајт во целзиусови

// High order functions

// primer broj1
function mnozenje(broj1) {
  return function (broj2) {
    return broj2 * broj1;
  };
}

const pomnozen = mnozenje(2);
const rezultat = pomnozen(5);

console.log(rezultat);

//primer broj2
function calculator(operacija) {
  return function (a, b) {
    switch (operacija) {
      case "soberi":
        return a + b;
      case "odzemi":
        return a - b;
      case "pomnozi":
        return a * b;
      case "podeli":
        return a / b;
    }
  };
}

const soberiOperacija = calculator("soberi");
const rezultat123 = soberiOperacija(5, 3);

console.log(rezultat123);

// zadacha broj 3
// da se kreira funkcija koja kje zema kako argument c2f ili f2c i koja kje gi pretvora celziusovite vo farenajt
// i farenhajt vo celziusiv

///////////////////

const arrayEden = [2, 3, 6, 7, 8];
const arrayDva = [1, 1, 1, 1, 1];
console.log(arrayDva.length);

for (let i = 1; i <= arrayDva.length; i++) {
  console.log(`Array${arrayEden[i]}`);
}
