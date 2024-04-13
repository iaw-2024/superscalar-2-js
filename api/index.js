const express = require("express");
const app = express();

const ejercicio_express = require("../express/con_express.js");

app.get("/express", (req, res) => { res.send( ejercicio_express.getTableData() ); });

app.use("/cliente_servidor", express.static("cliente_servidor"));
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;