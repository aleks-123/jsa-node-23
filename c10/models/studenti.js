const fs = require("fs");

const DATA_SOURCE = `${__dirname}/../studenti.json`;

const readFile = async () => {
  return new Promise((success, fail) => {
    fs.readFile(DATA_SOURCE, "utf8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const writeFile = async (data) => {
  return new Promise((success, fail) => {
    fs.writeFile(DATA_SOURCE, data, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

const add = async (data) => {
  let file = await readFile();
  let fileData = JSON.parse(file);
  fileData.push(data);
  await writeFile(JSON.stringify(fileData));
};

const list = async () => {
  let file = await readFile();
  let fileData = JSON.parse(file);
  return fileData;
};

module.exports = {
  add,
  list,
};
