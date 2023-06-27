const fs = require("fs");

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, "utf8", (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
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
  });

  res.send(response);
};

const calculateForce = async (req, res) => {
  // Newton's Second Law
  const mass = req.params.mass;
  const acceleration = req.params.acc;
  const response = await parseTemplate("calculator.html", {
    data: mass * acceleration,
    ime: "CALCULATE FORCE",
  });

  res.send(response);
};

const postCalculator = async (req, res) => {
  if (req.body.a === "" || req.body.b === "") {
    return res.status(400).send("bad request");
  }

  let result = "";
  switch (req.body.op) {
    case "sobiranje":
      result = `${Number(req.body.a) + Number(req.body.b)}`;
      break;
    case "odzemanje":
      result = `${Number(req.body.a) - Number(req.body.b)}`;
      break;
    case "delenje":
      result = `${Number(req.body.a) / Number(req.body.b)}`;
      break;
    case "mnozenje":
      result = `${Number(req.body.a) * Number(req.body.b)}`;
      break;
    default:
      result = `nepoznat operator!`;
  }

  try {
    let output = await parseTemplate("calculator", {
      data: result,
      ime: "Operacija",
    });
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
};

module.exports = {
  bmiCalculator,
  calculateForce,
  postCalculator,
};
