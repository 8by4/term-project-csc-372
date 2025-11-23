"use strict";
const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const cardRoutes = require('./routes/deckRoutes');

app.use('/play', cardRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Blackjack Server listening on port: " + PORT + "!");
});

