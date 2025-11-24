const express = require("express");
const app = express();

app.use(express.json());

const deckRoutes = require("./routes/deckRoutes");
const accountRoutes = require("./routes/accountRoutes");

app.use("/deck", deckRoutes);
app.use("/account", accountRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));