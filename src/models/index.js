const Sequelize = require('sequelize');

const {
  DB_PASSWORD,
  DBNAME,
  DB_USER,
  DB_PORT,
} = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(DBNAME, DB_USER, DB_PASSWORD, {
    host: `localhost:${DB_PORT}`,
  });

  Sequelize.sync({ alter: true });

  return {};
};

module.exports = setupDatabase();
