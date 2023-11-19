const express = require("express");
const morgan = require("morgan");


const app = express();

app.use(morgan("dev"));

app.listen(8000);

app.get("/", (req, res) => {
    res.send("hi");
})