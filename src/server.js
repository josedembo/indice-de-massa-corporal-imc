const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const { calculaIMC } = require("../public/js/imc");

app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

app.get("/", (request, response) => {
    response.render("index", { imc: "" });

});

app.post("/", (request, response) => {
    const { peso, altura } = request.body;
    const imcResult = calculaIMC(peso, altura);

    response.render("index", { imc: imcResult })

})


app.get("/imc", (request, response) => {
    const { peso, altura } = request.query;
    const imcResult = calculaIMC(peso, altura);

    response.json({ imc: imcResult });
})

module.exports = app;