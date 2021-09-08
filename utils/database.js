const Sequelize = require("sequelize");

const DB_NAME = "node-todo";
const USER_NAME = "root";
const PASSWORD = "12345678";
const seqielize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = seqielize;
