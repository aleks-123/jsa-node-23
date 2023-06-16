exports.textStats = (text) => {
  if (typeof text !== "string") return;

  const rezObj = {
    bukvi: 0,
    zborovi: 0,
    rechenici: 0,
    gt5: 0,
    lt5: 0,
    eq5: 0,
  };

  rezObj.bukvi = text.length;
  rezObj.zborovi = text.split(" ").length;
  rezObj.rechenici = text.split(".").length;
};
