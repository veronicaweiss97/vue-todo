const express = require("express");
const path = require("path");
const sequelize = require("./utils/database");
const todoRoutes = require("./routes/todo");
const helmet = require("helmet");
const compression = require("compression");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api/todo", todoRoutes);

app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(helmet());
app.use(compression());

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();
