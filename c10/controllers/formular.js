const studenti = require("../models/studenti");

const getForm = (req, res) => {
  res.render("formular");
};

const postForm = async (req, res) => {
  let data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  await studenti.add(data);

  res.redirect("/studenti");
};

const getStudenti = async (req, res) => {
  let data = await studenti.list();
  res.render("studenti", { data });
};

module.exports = {
  getForm,
  postForm,
  getStudenti,
};
