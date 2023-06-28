const fs = require("fs");

const objekt = {
  ime: "Aleksandar",
  data: 2445,
  sfafasf: "asdgsdgag",
};

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (propery in object) {
          content = content.replaceAll(`[[${propery}]]`, object[propery]);
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

module.exports = {
  bmiCalculator,
  calculateForce,
};
