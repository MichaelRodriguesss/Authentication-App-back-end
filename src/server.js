const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/database");
const routes = require("./routes/server.routes");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

dotenv.config();
database();

app.use("/api/users", routes);

app.listen(port, () => {
  console.log("Server started on port 3000 🔥");
});
