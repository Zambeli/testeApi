const express = require("express");
const json = require("./teste.json");
const app = express();

console.log(json);

app.get("/status", (request, response) => {
  response.status(200).json(json);
});

// function status(request, response) {
//   response.status(200).json({ chave: "valor" });
// }

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Rodando porta 3000");
});
