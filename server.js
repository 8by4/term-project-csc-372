const express = require("express");
const app = express();

app.use(express.json());

const deckRoutes = require("./routes/deckRoutes");
const accountRoutes = require("./routes/accountRoutes");

app.use("/deck", deckRoutes);
app.use("/account", accountRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));