const express = require("express");
const app = express();

app.use(express.static('public'))

const ejercicio_express = require("../express/con_express.js");
app.get("/express", (req, res) => { res.send( ejercicio_express.getTableData() ); });

app.use("/dom", express.static('dom'))
app.use("/cliente_servidor", express.static('cliente_servidor'))


app.listen(3001, () => console.log("Server ready on port 3001"));

module.exports = app;