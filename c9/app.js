const express = require("express");
let ejs = require("ejs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let data = {
  ime: "Pero",
  prezime: "Prevoski",
  niza: ["Skopje", "Bitola", "Kumanovo", "Tetovo", "Ohrid", "Veles"],
  studenti: [
    { ime: "Pero", prezime: "Perovski", prosek: 9.2 },
    { ime: "Janko", prezime: "Jankovski", prosek: 8.2 },
    { ime: "Stanko", prezime: "Stankovski", prosek: 7.4 },
    { ime: "Ivan", prezime: "Ivanovkski", prosek: 7.0 },
  ],
};

let domasna = {
  ime: "vashe ime",
  prezime: "vashe prezime",
  ovoshje: ["Jabolko, Praska, Kajsija, Krusha"],
  zelenchuk: ["Krastavica", "Zelka", "Brokula", "Domat"],
  vitmini: [
    { ime: "Jabolko", vitamin: "C", mineral: "kalcium" },
    { ime: "Krastavica", vitamin: "A", mineral: "Kalium" },
    { ime: "Praska", vitamin: "B", mineral: "Magnezium" },
    { ime: "Brokula", vitamin: "D", mineral: "Zelezo" },
    { ime: "Domat", vitamin: "G", mineral: "Srebro" },
  ],
};

app.get("/", (req, res) => {
  res.render("index", data);
});

app.post("/", (req, res) => {
  console.log(req.body);
  const novStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(novStudent);

  res.render("index", data);
});

app.post("/delete/:ime", (req, res) => {
  //? DA SE KREIRA LOGIKA KAKO KJE GO BRISHIME STUDENTOT
  res.redirect("/");
});

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("succesfully started on port 9000");
});

//? DA SE KREIRA CONTROLLER VO KOJ KONROLER KJE BIDAT OVIE FUNKCII
//? Na ruta "/zelencuk" da se kreira web stranica koja kje gi socinuva informaciite od objketot domasna
//? da post methoda na "/zelencuk" so koja kje moze da dodavame novi zelencuci i ovoshja
