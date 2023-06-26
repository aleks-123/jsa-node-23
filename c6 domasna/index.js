const http = require("http");

const server = http.createServer((req, res) => {
  const [_, path, name] = req.url.split("/");

  if (path === "ime") {
    console.log(path, name);
    if (!name) {
      res.end("invalid url");
      return;
    }

    const samoglaski = ["a", "e", "i", "o", "u"];
    const brojNabukvi = name.length;
    const eParen = brojNabukvi % 2 === 0 ? "da" : "ne";
    let samoglaskiBroj = 0;

    const bukviArray = name.split("");

    for (let i = 0; i < bukviArray.length; i++) {
      if (samoglaski.includes(bukviArray[i])) {
        samoglaskiBroj++;
      }
    }

    const soglaskiBroj = brojNabukvi - samoglaskiBroj;

    res.end(
      `karakteri na imeto ${brojNabukvi}, paren: ${eParen}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
    );
  } else if (path === "sobiranje") {
    res.end();
  } else if (path === "odzemnaje ") {
  }
});

server.listen(10000, (err) => {
  if (err) console.log(err);
  console.log("server has started");
});
