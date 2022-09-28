require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const PORT = process.env.PORT || 8080;
const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//connection zur DB
db();

app.get("/", (req, res) => {
  res.send("NodeJS with NoSQL Lecture");
});

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
