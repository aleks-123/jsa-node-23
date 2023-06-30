const fs = require("fs");

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (propery in object) {
          content = content.replaceAll(`{{${propery}}}`, object[propery]);
        }
      }
      return success(content);
    });
  });
};

const bmiCalculator = async (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = weight / (height * height);
  const response = await parseTemplate("calculator.html", {
    data: bmi,
    ime: "BMI CALCULATOR",
    sfafasf: "ASFFGASGGA",
  });

  res.send(response);
};

const calculateForce = (req, res) => {
  const mass = req.params.mass;
  const acc = req.params.acc;
  const newton = mass * acc;
  res.send(`${newton}`);
};

const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate("calculator_form.html");
    res.send(output);
  } catch (err) {
    console.log(err);
    res.send("ERROR");
  }
};

const postCalculator = async (req, res) => {
  try {
    if ((req.body.a === "") | (req.body.b === "")) {
      return res.send("Prazni polinja");
    }

    let brojka1 = Number(req.body.a);
    let brojka2 = Number(req.body.b);

    let result = "";
    switch (req.body.op) {
      case "sobiranje":
        result = `${brojka1 + brojka2}`;
        break;
      case "odzemanje":
        result = `${brojka1 - brojka2}`;
        break;
      case "mnozenje":
        result = `${brojka1 * brojka2}`;
        break;
      case "delenje":
        result = `${brojka1 / brojka2}`;
        break;
    }

    const response = await parseTemplate("calculator.html", {
      data: result,
      ime: `Opreacija ${req.body.op}`,
    });

    res.send(response);
    // res.send(`${result}`);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = {
  bmiCalculator,
  calculateForce,
  getCalculator,
  postCalculator,
};
