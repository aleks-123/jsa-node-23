//! KAKO INICIJALIZIRAME APLIKACIJA
//* npm init  (-y so ova se odbiraat default parametri)

//! ZA DA INSTALIRAME NADVORESEN MODUL SE KORISTI
//* npm install (imeto na modulot)

//! Go povikuvame express modulot
const express = require("express");

const app = express(); //! Kreirame nova express aplikacija

//! So app.get() definirame ruta sto kje se spravuva so baranjata HTTP GET do odredena URL adresa

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/zdravo", (req, res) => {
  res.send("Zdravo svetu!!!");
});

app.get("/zdravo/:ime/:prezime", (req, res) => {
  console.log(req.params);
  res.send(`Zdravo ${req.params.ime}!!! `);
});

app.get("/calculator/:op/:a/:b", (req, res) => {
  console.log(req.params);
  switch (req.params.op) {
    case "sobiranje":
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case "odzemanje":
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case "delenje":
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case "mnozenje":
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send("Nepoznat operator!");
  }
});

app.get("/konverter/:op/:a", (req, res) => {
  if (req.params.op === "f2c") {
    const farenajt = (req.params.a - 32) * 0.556;
    return res.send(`${farenajt}`);
  } else if (req.params.op === "c2f") {
    const celsius = req.params.a * 1.8 + 32;
    return res.send(`${celsius}`);
  } else {
    res.send("Imate pogresna operacija selektirano");
  }
});

//! So app.listen moze da ja startuvame nashata veb aplikacija i da ja napravime dostapna za korisnicite
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10000");
});

//! Za npm run start da funkcionira vo package.json vo delot za script
//! stavame:  "start": "node app.js"

//? Da se rekreira domasnoto od chas 6
//? Da se instalira Postman aplikacija i da se istrazi
//? Inaku se koristi za polesno testiranje na web aplikacija
