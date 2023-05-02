const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/database");
const routes = require("./routes/server.routes");
const app = express();
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("src/uploads"));

const port = process.env.PORT || 3003;

dotenv.config();
database();

app.use("/api/users", routes);

app.listen(port, () => {
  console.log("Server started on port 3003 🔥");
});
