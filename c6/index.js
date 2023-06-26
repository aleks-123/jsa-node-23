// request - prima nekoja naredba
// response - vrakja na primenata naredba

const http = require("http");

// const server = http.createServer((req, res) => {
//   // znaci res.end methodata kje go ispratime respondot od nashiot serer
//   res.end("Hello World");
// });

// server.listen(10000, "127.0.0.1", (err) => {
//   if (err) console.log("error");
//   console.log("server started on port 10000");
// });

const handler = (req, res) => {
  // console.log(req);
  // console.log(req.method);
  // console.log(req.headers);
  // /sobiranje/2/5

  console.log(req.url);

  const [_, op, a, b] = req.url.split("/");
  // ["", "sobiranje", "2", "5"]
  // split methodata go deli stringot prema parametarto sto e vnatre vo /
  // const ime = "Aleksndar,Maja,Mirka,Petko,Sharko";
  // console.log(ime.split(" "));

  let o;
  switch (op) {
    case "sobiranje":
      o = Number(a) + Number(b);
      res.end(`rezultatot e ${o}`);
      break;
    case "odzemanje":
      o = Number(a) - Number(b);
      res.end(`rezultatot e ${o}`);
      break;
    case "delenje":
      o = Number(a) / Number(b);
      res.end(`Rezultatot e ${o}`);
      break;
    case "mnozenje":
      o = Number(a) * Number(b);
      res.end(`Rezultatot e ${o}`);
      break;
    default:
      res.end("OK");
  }
};

const server = http.createServer(handler);
server.listen(10000, (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});

//? Servis koj kje obrabotuva ruti od sledniot tip
// ime/aleksandar
// /ime/angela
// /ime/julija

// parno: da, karakteri 5, soglaski: 2, samoglaski

//! http://127.0.0.1:10000/
