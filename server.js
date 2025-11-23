const express = require("express");
const app = express();
const deckRoutes = require("./routes/deckRoutes");

app.use(express.json());
app.use("/deck", deckRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));