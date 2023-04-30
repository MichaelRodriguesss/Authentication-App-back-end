const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/database");
const routes = require("./routes/server.routes");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3003;

dotenv.config();
database();

app.use("/api/users", routes);

app.listen(port, () => {
  console.log("Server started on port 3003 🔥");
});
