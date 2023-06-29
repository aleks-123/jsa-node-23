const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let data = {
    ime: "Pero",
    prezime: "Перовски",
    niza: ["Скопје", "Битола", "Куманово", "Тетово", "Охрид", "Велес"],
    studenti: [
      { ime: "Перо", prezime: "Перовски", prosek: 9.2 },
      { ime: "Јанко", prezime: "Јанковски", prosek: 7.1 },
      { ime: "Станко", prezime: "Станковски", prosek: 8.4 },
      { ime: "Иван", prezime: "Ивановски", prosek: 7.0 },
    ],
  };
  res.render("index", data);
});

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Service started on port 10000");
});
