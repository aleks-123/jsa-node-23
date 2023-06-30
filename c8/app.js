//! Arhitekturata na edna aplikacija igra klucna uloga za organizacijata i strukturata na samata aplikacija

//! 1. Organizirame i struktuirame nashiot kod
//! 2. Podelba na sektori
//! 3. Podobruvanje na testiranjeto na nashata aplikacija
//! 4. Odrzlivost
//! 5. Modularnost

//* MVC - arhitektura
//* MVC
//! M - Model ova biznil logikata ili logikata za podatocite
//! V - View e zagrizen za prezentacija na izgledot
//! C - Contoller - Kontrelot e mozkot na aplikacija, koj vrshi interakcija so modelot i view

const express = require("express");
const calculator = require("./controller/calculator");

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/bmi/:weight/:height", calculator.bmiCalculator);
app.get("/newton/:mass/:acc", calculator.calculateForce);

app.get("/calculator", calculator.getCalculator);
app.post("/calculator", calculator.postCalculator);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully");
});

//? DA SE KREIRA VO CALCULATOR USTE 6 funkcii
//? DA SE KREIRA NOV HTML FILE STO KJE SE VIKA REZULTAT
//? 1. DA SE PRESMETA PLOSTINA NA PRAVOAGOLNIK
//? 2. DA SE PRESMETA F2C i obratno DA SE IMPLEMENTIRA SWITCGH
//? 3. DA SE KREKIRA KALKULATOR(SWITH || IF ELSE)
//? 4. DA SE KREIRA FUNKCIJA STO PRESMETUVA SILA
//? 5. DA SE PRESMETA PLOSTINA NA TRIAGOLNIK
//? SITE OVIE FUNKCII DA VRAKJAAT WEB STRANIICA
//? STRANICATA DA IMA NEKAKOV STYLING(boi, background, flex, border)
//? VO WEB STRANICATA DA IMA  NASLOV ZA STO SLUZI REZULTATOT
//? I DA IMA PARAGRAPH SO KOJ KJE SE OBNASUNVA ZADADENATA FUNKCIJA
